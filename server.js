const http = require('http');
const app = require('./app'); //import app
const port = process.env.port || 15000;
const server = http.createServer();
server.listen(port);