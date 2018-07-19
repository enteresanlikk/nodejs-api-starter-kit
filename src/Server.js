'use strict';

require('./lib/Modules').getAll();

require('../config/Settings').setUsedFile();

app.use(require('./middlewares/SetHeader').apply());

require('./Routing').List(app);

app.use((req, res)=> {
    res.status(404);
    res.json({status:404,response:'Page not found!'});
});

module.exports=app;