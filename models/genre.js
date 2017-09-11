
var sequelize = require('sequelize');

function genre(connection) {
    return connection.define('genre', {
        title: {
          type: sequelize.STRING,
          allowNull: false
        },
        image: {
          type: sequelize.STRING,
          allowNull: false
        }
    });
}

module.exports = genre;
