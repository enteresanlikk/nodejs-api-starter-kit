import './Modules';

class Service{
    constructor(){
        global.setJson=(status,response)=>{
            return  {
                status,
                response
            }
        }
    }
}

export default new Service();