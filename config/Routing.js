let {
    path,
    version,
    routes
}=require('../src/Routes');

path=path ? '/'+path : '';
version=version ? '/v'+version : '';
routes = routes ? routes : [];

const ApiUrl=path+version;

let OldGroupUrl='',
    NewGroupUrl='';

class Routing {
    constructor(){
        this.List(routes,'');
    }

    List(routeList) {

        NewGroupUrl+=(OldGroupUrl ? '/'+OldGroupUrl : '');
        console.log("routeList",routeList);
        routeList.map(route=>{
            console.log("route",route);
            let keys=Object.keys(route);
            if(keys.join(',').indexOf('group')>-1){
                OldGroupUrl=route.groupUrl;
                this.List(route.groupRoutes);
            }else{
                if(route.middleware){
                    app[route.method.toLowerCase()](`${ApiUrl+NewGroupUrl+'/'+route.url}`,
                        (typeof route.middleware==='object')
                            ? route.middleware.map((midd,i)=>{
                                require(app.get('dir')+'/middlewares/'+midd);
                            })
                            : require(app.get('dir')+'/middlewares/'+route.middleware)
                        ,require(`${app.get('dir')+'/controllers/'+route.controller}`)[`${route.action}`]);
                }else{
                    app[route.method.toLowerCase()](`${ApiUrl+NewGroupUrl+'/'+route.url}`,require(`${app.get('dir')+'/controllers/'+route.controller}`)[`${route.action}`]);
                }
            }
        });

    }
}

module.exports=new Routing();