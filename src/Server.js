'use strict';
require('./lib/Modules').getAll();
app.set("dir",__dirname);

require('../config/Settings').setUsedFile();

app.use(require('./middlewares/SetHeader'));

app.get("/deneme",require('./middlewares/TestMid1'),(req,res,next)=>{
    res.send("dfsdf");
});

require('../config/Routing');

app.use((req, res)=> {
    res.status(404);
    res.json({status:404,response:'Page not found!'});
});

module.exports=app;