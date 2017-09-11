
var sequelize = require('sequelize');

function dialogues(connection) {
    return connection.define('dialogue', {
        title: {
          type: sequelize.STRING,
          allowNull: false
        },
        image: {
          type: sequelize.STRING,
          allowNull: false
        },
        genreId: {
          type: sequelize.INTEGER,
          allowNull: false
        }
    });
}

module.exports = dialogues;
