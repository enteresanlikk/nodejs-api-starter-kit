import example from './example';

module.exports={
    rootUrl:'api',
    version:{
        text:'v',
        number:1
    },
    middleware:'SetHeader',
    routes:[
        {
            groupUrl:'example',
            groupRoutes:example
        },
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