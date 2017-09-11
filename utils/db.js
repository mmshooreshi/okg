var sequelize = require('sequelize');
var config = require('../config/config')
//Setting up the config
var db = new sequelize(config.db.database, config.db.user, config.db.pass, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

module.exports = db;
