const http = require('http');
const app = require('./app'); //import app
const port = process.env.PORT || 4000;
const server = http.createServer();
server.listen(port);