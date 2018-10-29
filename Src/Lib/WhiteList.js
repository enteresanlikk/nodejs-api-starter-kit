let WhiteList = [
    'http://localhost:3030'
];

if(process.env.NODE_ENV.trim() == 'dev'){
    WhiteList.push('chrome-extension://coohjcphdfgbiolnekdpbcijmhambjff');
}

module.exports = WhiteList;