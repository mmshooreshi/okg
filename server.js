var express = require('express');
var server = express();

server.get('/createTables', require('./api/createTables'));

server.get('/getGenres', require('./api/getGenres'));
server.get('/getDialoguesByGenreId', require('./api/getDialoguesByGenreId'));
server.get('/getDialogueTextsByDialogueId', require('./api/getDialogueTextsByDialogueId'));

server.get('/registerUser/:phoneNumber/:name', require('./api/registerUser'));
server.get('/checkIfRegistered/:phoneNumber', require('./api/checkIfRegistered'));
server.get('/validateVerificationCode/:phoneNumber/:verificationCode', require('./api/validateVerificationCode'));

server.listen(3000);
