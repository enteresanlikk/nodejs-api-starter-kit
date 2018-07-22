export default [
    {
        method:'GET',
        controller:'IndexController',
        action:'Index',
        middleware:['TestMid1','TestMid2']
    }
];