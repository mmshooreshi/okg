
var sequelize = require('sequelize');

function user(connection) {
    return connection.define('user', {
        name: {
          type: sequelize.STRING,
          allowNull: false
        },
        phoneNumber: {
          type: sequelize.STRING(10),
          allowNull: false,
          unique: true
        }
    });
}

module.exports = user;
