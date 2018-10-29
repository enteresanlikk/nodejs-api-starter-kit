'use strict';

class HomeController{
    Index(req,res){
        res.render(
            'Home/Index',
            {
                title: 'Home'
            }
        );
    }
}

module.exports = new HomeController();