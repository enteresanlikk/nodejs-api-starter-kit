class ApiMid {
    constructor(){
        return function handler(req, res, next) {
            res.setHeader('ApiMid','ApiMid');
            next();
        };
    }
}

module.exports = new ApiMid();