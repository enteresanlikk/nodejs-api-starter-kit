import Example from './Example';

module.exports = {
    routes: [
        {
            method: 'GET',
            controller: 'Client/HomeController',
            action: 'Index',
            middleware: 'TestMid1'
        },
        {
            groupUrl: 'client',
            groupRoutes: Example,
            middleware: ['TestMid1','TestMid2']
        }
    ]
}