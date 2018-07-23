module.exports=[
    {
        method:'GET',
        controller:'IndexController',
        action:'Index',
        middleware:['TestMid1','TestMid2'] // or 'TestMid1'
    }
];