class TestMid1 {
    constructor(){
        return function handler(req, res, next) {
            console.log("dfsdsdf");
            res.setHeader("bilal","test");
            next();
        };
    }
}
module.exports=new TestMid1();