
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
- Mysql/MongoDB Connection
- Global Functions/Packages
- EcmaScript 6 Format Writing
- Pug Views and Assets(public) Folder

## **Quick Start**

1. First Clone Project Your Computer

	`git clone https://github.com/enteresanlikk/Node.jsApiStarterKit.git myapp`

    `cd myapp`

2. Install NPM Packages

	`npm install`

3. Configuration Project

	Create .env file root folder(Example: .env.test file).
	
	    APP_PORT=[Port the project is running on. Default 3000]

	    DB_TYPE=[mongo or mysql]
	    DB_HOST=[Database Host]
	    DB_NAME=[Database Name]
	    DB_USERNAME=[Database Username]
	    DB_PASSWORD=[Database Password]

        /* If you choose mysql, you can access this variable from within the project. 
        If you do not define a variable, you will use the variable "mysqlDb". */

        DB_VARIABLE=

4. Start Project
	
    `npm start (node) / npm run dev (nodemon)`

5. Open Project

	http://localhost:[YOUR_APP_PORT]

  

## **Project Folder Structure**

        - bin
            - server (It is the server file on which the project is running.)
        - src
            - config
                - MongoDBConnection.js (The MongoDb connection is in this file.)
                - MysqlConnection.js (The Mysql database connection is in this file.)
                - Settings.js (Here are the settings for the project. Database connection, port setting etc.)
        - controllers
            - IndexController.js (The actions to be done are in this controller file.)
        - lib
            - Modules.js (The Npm libraries are here and are defined globally.)
            - Service.js (Project-related functions are available here globally.)
        - middlewares
            - SetHeader.js (Header a sends the necessary parameters.)
            - TestMid1.js (Test middleware)
            - TestMid2.js (Test middleware)
        - models
            - ExampleModel.js (Example mongoDB model.)
        - public
            - css
                - style.css
        - routers
            - root.js (Routing is the root file we define.)
            - example.js (Routing is the file we define.)
        - views
            - index.pug
            - layout.pug
        - App.js (It is the main file of the project. This includes services, settings, middleware, routing, and the error status of the project.)
    - .env (The port and database settings are in this file.)
    - .babelrc  

## **Routing Example (src/routers/root.js)**

    ...
    import example from './example';
    ...
    rootUrl:'api', //Optional
    version:{ //Optional
        text:'v', //Optional
        number:1 //Optional
    },
    middleware:'SetHeader', // or ['TestMid1','TestMid2'] - Optional
    routes:[
        {
            groupUrl:'example',
            groupRoutes:example
        },
        {
        method:'GET|POST|PUT|DELETE',
        url:'example',
        controller:'IndexController',
        action:'Index',
        middleware:['TestMid1','TestMid2'] // or 'TestMid1' - Optional
        }
    ]
    ...

> RootUrl and version are optional. The text and number fields in the version are also optional.

## Routing Examples
1. http://localhost:[YOUR_APP_PORT]/[ROOT_URL]/[VERSION_TEXT][VERSION_NUMBER]/[ROUTES_URL]
2. http://localhost:[YOUR_APP_PORT]/[ROOT_URL]/[VERSION_NUMBER]/[ROUTES_URL]
2. http://localhost:[YOUR_APP_PORT]/[ROOT_URL]/[VERSION_TEXT]/[ROUTES_URL]
4. http://localhost:[YOUR_APP_PORT]/[VERSION_TEXT][VERSION_NUMBER]/[ROUTES_URL]
5. http://localhost:[YOUR_APP_PORT]/[VERSION_NUMBER]/[ROUTES_URL]
6. http://localhost:[YOUR_APP_PORT]/[VERSION_TEXT]/[ROUTES_URL]
7. http://localhost:[YOUR_APP_PORT]/[ROOT_URL]/[ROUTES_URL]
8. http://localhost:[YOUR_APP_PORT]/[ROUTES_URL]

> **Important Note**: If you have a mysql connection, you can write your queries with the "[***mysqlDb***](https://github.com/enteresanlikk/Node.jsApiStarterKit/blob/master/src/config/Settings.js#L24)" variable. You can find the example in the [***src/controllers/IndexController***](https://github.com/enteresanlikk/Node.jsApiStarterKit/blob/master/src/controllers/IndexController.js#L11) file.




