class Modules {
    getAll(){
        global.express=require("express");
        global.bodyParser=require("body-parser");
        global.app = express();
        global.router = express.Router();
        global.mongoose=require('mongoose');

        require('dotenv').config();
    }
}

module.exports = new Modules();