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
        this.setAppUse();
        this.ConnectDb();
        this.setPort(APP_PORT);
    }

    ConnectDb=()=>{
        switch(DB_TYPE){
            case 'mongo': MongoDBConnect(DB_USERNAME,DB_PASSWORD,DB_HOST,DB_NAME); break;
            case 'mysql': global.mysqlDb=MysqlConnection(DB_USERNAME,DB_PASSWORD,DB_HOST,DB_NAME); break;
        }
    }

    setPort=(port)=>{
        app.set('port', port || 3000);
    }

    setAppUse=()=>{
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(cookieParser());

        app.set('views', path.join(__dirname+"/..", 'views'));
        app.set('view engine', 'pug');
        app.use(express.static(path.join(__dirname+"/..", 'public')));
    }
}


export default new Settings();