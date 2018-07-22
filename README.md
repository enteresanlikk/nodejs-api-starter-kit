# **Node.js API Starter Kit**


## **Features**
 - Dynamic Routing
    - Version Knowledge
    - Grouping Urls
    - Set Url
    - Url Set Request Method
    - Set Controller and Action
    - Set Middleware(s)

 - Mysql/MongoDB Connection
 - Global Functions
 - EcmaScript 6 Format Writing
 - Pug Views and Assets(public) Folder

## **Quick Start**
    1. First Clone Project Your Computer
        git clone https://github.com/enteresanlikk/Node.jsApiStarterKit.git myapp

    2. Install NPM Packages
        npm install

    3. Configuration Project
        Create .env file root folder(Example: .env.test file).

        APP_PORT=[Port the project is running on. Default 3000]

        DB_TYPE=[mongo or mysql]
        DB_HOST=[Database Host]
        DB_NAME=[Database Name]
        DB_USERNAME=[Database Username]
        DB_PASSWORD=[Database Password]

    4. Start Project
        npm start (node) / npm run dev (nodemon)

    5. Open Project
        http://localhost:[YOUR_APP_PORT]

## **Project Folder Structure**

        - bin
            - server
        - src
            - config
                - MongoDBConnection.js
                - MysqlConnection.js
                - Routing.js
                - Settings.js
            - controllers
                - IndexController.js
            - lib
                - Modules.js
                - Service.js
            - middlewares
                - SetHeader.js
                - TestMid1.js
                - TestMid2.js
            - models
                - ExampleModel.js
            - public
                - css
                    - style.css
            - views
                - index.pug
                - layout.pug
            - App.js
            - Routes.js
    - .env
    - .babelrc

## **Routing Example (src/Routes.js)**
    
    ...
        rootUrl:'api',
        version:{
            text:'v',
            number:1
        },
        routes:[
            {
                method:'GET|POST|PUT|DELETE',
                url:'example',
                controller:'IndexController',
                action:'Index',
                middleware:['TestMid1','TestMid2'] // or 'TestMid1'
            }
        ]
    ...

> RootUrl and version are optional. The text and number fields in the version are also optional.

## Routing Examples

    1. http://localhost:[YOUR_APP_PORT]/[ROOT_URL]/[VERSION_TEXT][VERSION_NUMBER]

    2. http://localhost:[YOUR_APP_PORT]/[ROOT_URL]/[VERSION_TEXT]

    3. http://localhost:[YOUR_APP_PORT]/[ROOT_URL]/[VERSION_NUMBER]

    4. http://localhost:[YOUR_APP_PORT]/[ROOT_URL]

    5. http://localhost:[YOUR_APP_PORT]