
var sequelize = require('sequelize');

function users(connection) {
    var User = connection.define('User', {
        name: sequelize.STRING,
        phone_number: sequelize.STRING(10),
    });
return User;
}

module.exports = users;