export default new class Tools{
    constructor(){
        
    }

    TrimJSON(data){
        let keys=Object.keys(data);
        keys.forEach((item)=>{
            if(typeof data[item] === 'object'){
                this.TrimJSON(data[item]);
            }else{
                data[item]=data[item].trim().replace(/\s+/g,' ');
                if(data[item]=='')
                    data[item]=null;
            }
        });
        return data;
    }

    ReverseString(data){
        data = data.split('');
        data.reverse();
        data = data.join('');
        return data;
    }
}