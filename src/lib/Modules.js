const Modules=()=>{
    /* GLOBAL MODULES */
        global.express=require('express');
        global.bodyParser=require('body-parser');
        global.app = express();
        global.fs=require('fs');
        require('dotenv').config();

        //DATABASE
            global.mongoose=require('mongoose');
            global.mysql=require('mysql');

    /* APP SETTINGS */
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
}

module.exports=new Modules();