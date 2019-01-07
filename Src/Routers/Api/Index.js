import Cors from 'cors';
import WhiteList from '../../Lib/WhiteList';

const CorsOptions = {
    origin : (origin, cb)=>{
        if (WhiteList.indexOf(origin) !== -1 || !origin)
            cb(null, true);
        else
            cb({
                status: 403,
                data: 'You do not have permission!'
            });
        
    },
    optionsSuccessStatus: 200,
    credentials:true
}

module.exports = [
    {
        Url: 'api/v1',
        optionsMiddlewares: [Cors(CorsOptions)],
        Middlewares: ['ApiMid'],
        Routes: [
            {
                Method: 'GET',
                Controller: 'Api/HomeController',
                Action: 'Index'
            },
            {
                Url: 'test',
                Middlewares: ['TestMid1'],
                Routes: [
                    {
                        Method: 'POST',
                        Url: '1',
                        Controller: 'Api/HomeController',
                        Action: 'Index'
                    },
                    {
                        Method: 'GET',
                        url: '2',
                        Controller: 'Api/HomeController',
                        Action: 'Index'
                    }
                ]
            }
        ]
    }
];