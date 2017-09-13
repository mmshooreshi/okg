var express = require('express');
var server = express();

var bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(require('./middlewares/jwtParser'));

var isUser = require('./middlewares/isUser');
var isAdmin = require('./middlewares/isAdmin');

server.get('/createTables', require('./api/createTables'));

server.get('/addGenre/:title/:image', require('./api/addGenre'));
server.get('/getGenres', isUser, require('./api/getGenres'));
server.get('/getDialoguesByGenreId/:genreId', isUser, require('./api/getDialoguesByGenreId'));
server.get('/getDialogueTextsByDialogueId/:dialogueId', isUser, require('./api/getDialogueTextsByDialogueId'));
server.get('/registerAdmin/:phoneNumber/:name',isAdmin, require('./api/registerAdmin'));
server.get('/registerUser/:phoneNumber/:name', require('./api/registerUser'));
server.get('/checkIfRegistered/:phoneNumber', require('./api/checkIfRegistered'));
server.get('/validateVerificationCode/:phoneNumber/:verificationCode', require('./api/validateVerificationCode'));

server.post('/auth', require('./api/auth'));

server.listen(3000);
