function createtables(req, res) {

    const db = require('../utils/db');
    var User = require('../models/users')(db);
    var Genre = require('../models/genres')(db);
    var dialogueText = require('../models/dialogueTexts')(db);
    var dialogue = require('../models/dialogues')(db);

    db.sync(function (err) {
        if (err) {
            console.log('An error occured while creating table');
        } else {
            console.log('User table created successfully');
        }
    });

    res.send('tables created');

}

module.exports = createtables;