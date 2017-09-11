
var sequelize = require('sequelize');

function dialogues(connection) {
    var dialogues = connection.define('dialogues', {
        text: sequelize.STRING,
        image: sequelize.STRING,
        dialogueid: sequelize.INTEGER,
    });
    return dialogues;
}

module.exports = dialogues;
