'use strict';

import {connect as MongoDBConnect} from './MongoDBConnection';
import {connect as MysqlConnection} from './MysqlConnection';
let {
    APP_PORT,
    DB_TYPE,
    DB_HOST,
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD
} = process.env;

class Settings{
    constructor(){
        this.ConnectDb();
        this.setPort(APP_PORT);
    }

    ConnectDb=()=>{
        if(DB_TYPE){
            switch(DB_TYPE){
                case 'mongo': MongoDBConnect(DB_USERNAME,DB_PASSWORD,DB_HOST,DB_NAME); break;
                case 'mysql': global.mysqlDb=MysqlConnection(DB_USERNAME,DB_PASSWORD,DB_HOST,DB_NAME); break;
            }
        }
    }

    setPort=(port)=>{
        app.set('port', port || 3000);
    }
}


export default new Settings();