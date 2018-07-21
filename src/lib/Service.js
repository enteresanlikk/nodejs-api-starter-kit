require('./Modules');

const Service=()=>{
    
    global.setJson=(status,response)=>{
        return  {
            status,
            response
        }
    }

}

module.exports= new Service();