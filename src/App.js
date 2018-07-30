'use strict';
//SERVICE
import './lib/Service';

//SETTINGS
import './config/Settings';

DynamicRoute.Config({
    app:app,
    folders:{
        routers:path.join(__dirname,'routers'),
        middlewares:path.join(__dirname,'middlewares'),
        controllers:path.join(__dirname,'controllers')
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