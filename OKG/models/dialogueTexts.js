
var sequelize = require('sequelize');

function dialoguetexts(connection) {
    var dialogueText = connection.define('dialogueText', {
        title: sequelize.STRING,
        image: sequelize.STRING,
        genreid: sequelize.INTEGER,
    });
    return dialogueText;
}

module.exports = dialoguetexts;
