
var sequelize = require('sequelize');

function admin(connection) {
    return connection.define('admin', {
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

module.exports = admin;
