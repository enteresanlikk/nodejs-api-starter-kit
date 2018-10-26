'use strict';

class HomeController{
    Index(req,res){
        res.json({
            data: 'Api Home@Index'
        });
    }
}

module.exports = new HomeController();