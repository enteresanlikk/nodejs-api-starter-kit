'use strict';
import {config as DotenvConfig} from 'dotenv';
import Express from 'express';
const App = Express();
import DynamicRouter from 'express-dynamic-router-creator';
import path from 'path';
import BodyParser from 'body-parser';
import CookieParser from 'cookie-parser';

import {Connect as MongoDBConnect} from './Config/MongoDBConnection';

DotenvConfig();
const {
    PORT,
    DOMAIN,
    MONGO_URI
} = process.env;

export default new class Server{
    constructor(){
        this.SetPort(PORT);
        this.SetDomain(DOMAIN);
        this.ConnectDb();

        this.setAppUse();
        this.SetRouting();
        this.SetErrorPages();
        this.SetServer();
    }

    setAppUse=()=>{
        App.use(BodyParser.urlencoded({ extended: false }));
        App.use(BodyParser.json());
        App.use(CookieParser());

        App.set('views', path.join(__dirname, 'Views'));
        App.set('view engine', 'pug');
        App.use(Express.static(path.join(__dirname, 'Public')));
    }

    SetServer(){
        App.listen(App.get('port'),(err)=>{
            if(err)
                console.log(`Server Error! => ${err}`);
            else
                console.log(`Server was started at the link ${App.get('domain')}`);
        });
    }

    SetPort=(port)=>{
        App.set('port', port || 3000);
    }

    SetDomain=(domain)=>{
        App.set('domain', `${domain}:${App.get('port')}` || `http://localhost:${App.get('port')}`);
    }

    SetRouting(){
        DynamicRouter.Config({
            app:App,
            folders:{
                routers:path.join(__dirname,'Routers'),
                controllers:path.join(__dirname,'Controllers'),
                middlewares:path.join(__dirname,'Middlewares')
            },
            mainFile:['Api/Index.js', 'Client/Index.js'],
            log:true
        });
    }

    SetErrorPages(){
        App.use((req, res, next)=>{
            const err = {
                status: '',
                data: ''
            };
            err.status = 404;
            err.data = 'Invalid URL!';
            next(err);
        });
          
        App.use((err, req, res, next)=> {
            res.status(err.status || 500);
            res.json({data:{error: (err.data ? err.data : err) }});
        });
    }

    ConnectDb(){
        if(MONGO_URI)
            MongoDBConnect(MONGO_URI);
    }
}