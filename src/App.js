'use strict';
require('./lib/Service');

require('./config/Settings');

app.use(require('./middlewares/SetHeader'));

require('./config/Routing').setDir(__dirname);

app.use((req, res)=> {
    res.status(404);
    res.json({status:404,response:'Page not found!'});
});

module.exports=app;