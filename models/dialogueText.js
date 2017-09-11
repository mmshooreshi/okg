
var sequelize = require('sequelize');

function dialogueText(connection) {
    return connection.define('dialogueText', {
        text: sequelize.STRING,
        image: sequelize.STRING,
        dialogueId: {
          type: sequelize.INTEGER,
          allowNull: false
        }
    });
}

module.exports = dialogueText;
