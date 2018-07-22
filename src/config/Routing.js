import Routes from '../Routes';

let {rootUrl,version,routes} = Routes;

let newRootUrl=rootUrl ? '/'+rootUrl : '';
let newVersionText='';
let newVersionNumber;
let newVersion='';

if(version){
    newVersionText=version.text ? version.text : '';
    newVersionNumber=version.number ? version.number : '';
    newVersion= (newVersionText || newVersionNumber) ? '/'+newVersionText+newVersionNumber : '' ;
}

let newRoutes = routes ? routes : [];

const ApiUrl=newRootUrl+newVersion;

let OldGroupUrl=[],
    NewGroupUrl='',
    Dir='';

class Routing {
    constructor(){
        this.List=this.List.bind(this);
        this.setDir=this.setDir.bind(this);
    }

    setDir(dir){
        Dir=dir;
        this.List(newRoutes,Dir);
    }

    List(routeList,FolderName) {
        const MiddlewareFolder=FolderName+'/middlewares/';
        const ControllerFolder=FolderName+'/controllers/';
        
        routeList.map((route,i)=>{
            let keys=Object.keys(route);
            if(keys.join(',').indexOf('group')==-1){
                NewGroupUrl=OldGroupUrl.length>0 ? '/'+OldGroupUrl.join('/') : '';

                let {
                    url,
                    controller,
                    action,
                    middleware,
                    method
                } = route;
                method=method.toLowerCase();
                
                let FullUrl=ApiUrl+NewGroupUrl+(url ? '/'+url : '');
                let FullControllerPath=ControllerFolder+controller;

                if(fs.existsSync(FullControllerPath+'.js')){
                    if(typeof require(`${FullControllerPath}`)[`${action}`] !=='undefined'){
                        if(middleware){
                            app[method](`${FullUrl}`
                                    ,(typeof middleware==='object')
                                        ?  middleware.map(mid=>{
                                                return require(MiddlewareFolder+mid)
                                            })
                                        : require(MiddlewareFolder+middleware)
                                ,require(`${FullControllerPath}`)[`${action}`]);
                        }else{
                            app[method](`${FullUrl}`,require(`${FullControllerPath}`)[`${action}`]);
                        }
                    }else{
                        console.log(`[${method}]`,FullUrl,action,"Action Error in",controller);
                    }
                }else{
                    console.log(`[${method}]`,FullUrl," Controller Error");
                }
                
            }else{
                OldGroupUrl.push(route.groupUrl);
                this.List(route.groupRoutes,Dir);
                OldGroupUrl=[];
            }
        });
    }
}

module.exports=new Routing();