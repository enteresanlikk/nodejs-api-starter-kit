'use strict';

const mongoDbConnection=require("./MongoDBConnection");
const {
    APP_PORT,
    DB_HOST,
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD
} = process.env;

class Settings{
    constructor(){
        this.ConnectDb();
    }

    ConnectDb(){
        if(DB_HOST){
            mongoDbConnection.connect(DB_USERNAME,DB_PASSWORD,DB_HOST,DB_NAME);
        }
    }

    getPort(){
        return APP_PORT;
    }

    setUsedFile(){
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
}


module.exports = new Settings();