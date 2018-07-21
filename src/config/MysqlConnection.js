'use strict';

let con;
export function connect(user,password,host,database){
    con = mysql.createConnection({
        host,
        user,
        password,
        database
      });
    
    con.connect((err)=>{
        if(err) console.log("Mysql: "+err);
        else console.log("Mysql: Connected");
    });
    return con;
}