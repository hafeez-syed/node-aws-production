/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 
 Author: Hafeez Syed
 File: server.js
 Created on 05/02/2017 4:33 PM
 Project: FEM-Node-AWS-Production
 Description: < Description here >
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

'use strict';

const http = require('http');
const log = require('../src/shared/logs');

let server = http.createServer(app);
let io = require('socket.io')(server);
sockets.init(io);

server.listen(config.port, () => {
    log(`Express server listening on port *:${config.port}`);
});
