var express = require('express');
var server = express();

server.get('/createtables', require('./api/createTables'));
server.get('/registerUser/:name/:phone_number', require('./api/registerUser'));
server.get('/checkIfRegistered/:phone_number', require('./api/checkIfRegistered'));

server.listen(3000);
