'use strict';

class IndexController{
    Index(req,res){
        console.log(setJson(200,'Home Page'));
        res.render('index',{title:'Home Page'});
    }

    
    /*mysqlTest(req,res,next){
        mysqlDb.query('SELECT * FROM <table_name>', function(err, result) {
            res.json(result);
        });
    }*/
}

module.exports=new IndexController();
