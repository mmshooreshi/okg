var express = require('express');
var server = express();

server.get('/newuser/:name/:phone_number', require('./api/registerUser'));

server.listen(3000);
