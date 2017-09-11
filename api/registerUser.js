const db = require('../utils/db')

function registerUser(req, res) {

var User = require('../models/users')(db);

//Applying User Table to database
    db.sync(function (err) {
        if (err) {
            console.log('An error occured while creating table');
        } else {
            console.log('User table created successfully');
        }
    });

    db.sync().then(function () {
        User.create({
            name: req.params.name,
            phone_number: req.params.phone_number,
        }).then(function (data) {
            console.log(data.values)
        })
    });

    /*
    User.find({}).then(function (data,err) {
        console.log(data);
    });
    */
    res.send("salam");
}

module.exports = registerUser;