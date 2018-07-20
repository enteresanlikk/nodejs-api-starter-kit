class TestMid2 {
    constructor(){
        return function handler(req, res, next) {
            res.setHeader("test","2");
            next();
        };
    }
}
module.exports=new TestMid2();