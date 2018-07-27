class Modules{
    constructor(){
        /* GLOBAL MODULES */
        global.express=require('express');
        global.app = express();
        global.bodyParser=require('body-parser');
        global.cookieParser=require('cookie-parser');
        global.path=require('path');
        global.fs=require('fs');
        require('dotenv').config();

        //Dynamic Route
        global.DynamicRoute=require("express-dynamic-router-creator")

        //DATABASE
            global.mongoose=require('mongoose');
            global.mysql=require('mysql');
    }
}

export default new Modules();