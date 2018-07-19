const {path,version,routes}=require('../src/Routes');
const ApiUrl='/'+path+'/'+version;
class Routing {
    constructor(){
        this.List=this.List.bind(this);
        this.List(routes,'');
    }

    List(routeList,groupUrl) {        
        routeList.map(route=>{
            let keys=Object.keys(route);
            if(keys.join(',').indexOf('group')>-1){
                this.List(route.groupRoutes,route.groupUrl);
            }else{
                eval(`app.${route.method.toLowerCase()}('${ApiUrl+'/'+route.url}',require(app.get('dir')+'/controllers/${route.controller}').${route.action})`);
            }
        });
    }
}

module.exports=new Routing();