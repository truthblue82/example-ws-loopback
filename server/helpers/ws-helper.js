const WebSocket = require('ws');
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const specialModel = require('../constants/special-model');
const parser = require('url-parse');

let urlParser = function(url) {
    url = new parser(url);
    let parsedUrl = url.pathname.replace('/api/', '').split('/');
    
    //process model
    //process method

    return parsedUrl;
}

let requestDataConverter = function(reqData) {
    let {path, method, data} = JSON.parse(reqData);
    let [modelName, func] = this.urlParser(path);

    return [modelName, func, method, data];
}

let wsBroadcast = async((clients, reqData, app) => {
    let [modelName, func, method, data] = this.requestDataConverter(reqData);
    let result = await(app.models[modelName][func](...data));

    clients.forEach((client) => {
        if(client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(result));
        }
    });
})

module.exports = {
    urlParser: urlParser,
    requestDataConverter: requestDataConverter,
    wsBroadcast: wsBroadcast
}