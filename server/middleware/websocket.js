const WebSocketServer = require('ws').Server;
const wsHelper = require('../helpers/ws-helper');

function wsListener (server, app) {
    let wss = new WebSocketServer({ server: server });
    
    wss.on('connection', function connection(ws, req) {
        ws.on('message', function incoming(dataReq) {
            let ip;
            //get ip of remote client
            if(req.headers['X-Forwarded-For'] !== undefined) {
                ip = req.headers['X-Forwarded-For'].split(/\s*,\s*/)[0];
            }
            else
            {
                ip = req.connection.remoteAddress;
            }
            console.log(`ip client: ${ip}`);
            wsHelper.wsBroadcast(wss.clients, dataReq, app);
        });

        ws.on('close', function close() {
            console.log('close websocket connection in server.');
        });

        ws.on('error', (error) => {
            console.log(error);
        });
    });
}

module.exports = {
    wsListener: wsListener
};