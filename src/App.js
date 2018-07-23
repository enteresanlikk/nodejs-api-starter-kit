'use strict';
//SERVICE
import './lib/Service';

//SETTINGS
import './config/Settings';

const DynamicRoute=require("express-dynamic-router-creator");

DynamicRoute.Config({
    app:app,
    folders:{
        routers:'src/routers',
        middlewares:'src/middlewares',
        controllers:'src/controllers'
    },
    mainFile:'main.js',
    log:true
});

//ERROR PAGE
app.use((req, res)=> {
    res.status(404);
    res.json({status:404,response:'Page not found!'});
});

module.exports=app;