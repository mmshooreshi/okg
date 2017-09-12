var express = require('express');
var server = express();

server.get('/createTables', require('./api/createTables'));

server.get('/addGenre/:title/:image', require('./api/addGenre'));
server.get('/getGenres', require('./api/getGenres'));
server.get('/getDialoguesByGenreId/:genreId', require('./api/getDialoguesByGenreId'));
server.get('/getDialogueTextsByDialogueId/:dialogueId', require('./api/getDialogueTextsByDialogueId'));

server.get('/registerUser/:phoneNumber/:name', require('./api/registerUser'));
server.get('/checkIfRegistered/:phoneNumber', require('./api/checkIfRegistered'));
server.get('/validateVerificationCode/:phoneNumber/:verificationCode', require('./api/validateVerificationCode'));

server.listen(3000);
