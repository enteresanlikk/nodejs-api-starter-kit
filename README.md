
# **Node.js API Starter Kit**

> It is a API startup kit that provides dynamic routing.

> **Note**: The routing system is written with [express-dynamic-router-creator](https://github.com/enteresanlikk/express-dynamic-router-creator).

## **Features**

- Dynamic Routing
	- Version Knowledge
	- Grouping Urls
	- Set Url
	- Url Set Request Method
	- Set Controller and Action
	- Set Middleware(s)
- MongoDB Connection
- Global Functions/Packages
- EcmaScript 6 Format Writing
- Pug Views and Assets(public) Folder

## **Quick Start**

1. First Clone Project Your Computer

	`git clone https://github.com/enteresanlikk/nodejs-api-starter-kit myapp`

    `cd myapp`

2. Install NPM Packages

	`npm install`

3. Configuration Project

	Create .env file root folder(Example: .env.example file).
	
	    DOMAIN=[Your application Domain. Default http://localhost]
        PORT=[Your application port. Default 3000]

        MONGO_URI=[MongoDB connection URI]

4. Start Project
	
    `npm start (node) / npm run dev (nodemon)`

5. Open Project

	http://localhost:[YOUR_APP_PORT]

  

## **Project Folder Structure**

        - src
            - Config
                - MongoDBConnection.js (The MongoDb connection is in this file.)
        - Controllers
            - Api (Back-end Folder)
                - IndexController.js (The actions to be done are in this controller file.)
            - Client (Front-end Folder)
                - IndexController.js (The actions to be done are in this controller file.)
        - Lib
            - WhiteList.js (People who can use the Api are identified.)
        - Middlewares
            - ApiMid.js (Test middleware)
            - TestMid1.js (Test middleware)
            - TestMid2.js (Test middleware)
        - Models
            - ExampleModel.js (Example mongoDB model.)
        - Public
            - css
                - style.css
        - Routers
            - Api (Back-end Folder)
                - Index.js (Routing is the root file we define.)
            - Client (Front-end Folder)
                - Index.js (Routing is the file we define.)
        - Services
            - Tools.js (The functions to be used in the system are included here.)
        - Views
            - Home
                - Index.pug
            - Shared
                - Layout.pug
        - Server.js (It is the main file of the project. This includes services, settings, middleware, routing, and the error status of the project.)
    - .env (The domain, port and database settings are in this file.)
    - .babelrc  

## **Client Routing Example [Src/Routers/Client/Index.js](Src/Routers/Client/Index.js)**

    module.exports = [
        {
            Routes: [
                {
                    Method: 'GET',
                    Controller: 'Client/HomeController',
                    Action: 'Index',
                    Middleware: ['TestMid1','TestMid2']
                }
            ]
        }
    ]

## **Api Routing Example [Src/Routers/Api/Index.js](Src/Routers/Api/Index.js)**

    import Cors from 'cors';
    import WhiteList from '../../Lib/WhiteList'; //Api access List.
    import Example from './Example';

    //Request options method settings.
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