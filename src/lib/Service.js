require('./Modules').getAll();

class Service {
    constructor(){
        console.log("Service constructor");
    }
}

module.exports=new Service();