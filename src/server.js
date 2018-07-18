'use strict';

require('./lib/Modules').getAll();

require('../config/Settings').setUsedFile();

app.use(require('./middlewares/SetHeader').apply());

const todo=require("./routes/todo");
app.use("/api/todo",todo);

app.use((req, res)=> {
    res.status(404);
    res.json({status:404,response:'Page not found!'});
});

module.exports=app;