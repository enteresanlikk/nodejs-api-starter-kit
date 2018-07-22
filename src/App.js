'use strict';
//SERVICE
import './lib/Service';

//SETTINGS
import './config/Settings';

//MIDDLEWARES
app.use(require('./middlewares/SetHeader'));

//SET ROUTING
import {setDir} from './config/Routing'; setDir(__dirname);

//ERROR PAGE
app.use((req, res)=> {
    res.status(404);
    res.json({status:404,response:'Page not found!'});
});

module.exports=app;