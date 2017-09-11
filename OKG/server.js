const sequelize=require('./mysqlclient')
var Sequelize = require('sequelize');
var express = require('express');
var server =  express();

server.get('/newuser/:name/:description', function (req, res) {


    var Item = sequelize.define('Item', {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: 1
        },
        name:Sequelize.STRING,
        description: Sequelize.STRING,
        qty: Sequelize.INTEGER
    });

//Applying Item Table to database
    sequelize.sync(function (err) {
        if(err){
            console.log('An error occured while creating table');
        }else{
            console.log('Item table created successfully');
        }
    });



    sequelize.sync().then(function () {
        Item.create({
            name:req.params.name,
            description: req.params.description,
            qty: 50
        }).then(function (data) {
            console.log(data.values)
        })
    });

    /*
    Item.find({}).then(function (data,err) {
        console.log(data);
    });
    */

    res.send("salam");

});

server.listen(3000);

