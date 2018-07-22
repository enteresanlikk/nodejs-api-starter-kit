export default {
    rootUrl:'api',
    version:{
        text:'v',
        number:1
    },
    routes:[
        /*{
            groupUrl:'database',
            groupRoutes:[
                {
                    method:'GET',
                    url:'mysql',
                    controller:'IndexController',
                    action:'mysqlTest'
                }
            ]
        },*/
        {
            method:'GET',
            url:'',
            controller:'IndexController',
            action:'Index',
            middleware:['TestMid1','TestMid2'] // or 'TestMid1'
        }
    ]
};