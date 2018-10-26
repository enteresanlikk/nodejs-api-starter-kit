import Cors from 'cors';
import WhiteList from '../../lib/WhiteList';

const CorsOptions = {
    origin : (origin, cb)=>{
        if (WhiteList.indexOf(origin) !== -1 || !origin)
            cb(null, true);
        else
            cb({status:403,data:'You do not have permission!'});
        
    },
    optionsSuccessStatus: 200,
    credentials:true
}

module.exports = {
    rootUrl: 'api',
    version: {
        text: 'v',
        number: 1
    },
    optionsMiddleware: Cors(CorsOptions),
    middleware:'ApiMid',
    routes: [
        {
            method: 'GET',
            controller: 'Api/HomeController',
            action: 'Index'
        },
        {
            groupUrl: 'test',
            middleware: 'TestMid1',
            groupRoutes: [
                {
                    method: 'POST',
                    url: '1',
                    controller: 'Api/HomeController',
                    action: 'Index'
                },
                {
                    method: 'GET',
                    url: '2',
                    controller: 'Api/HomeController',
                    action: 'Index'
                }
            ]
        }
    ]
}