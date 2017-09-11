var sequelize = require('sequelize');
var con = require('./config/config')
//Setting up the config
var db = new sequelize(con.db.database, con.db.user, con.db.pass, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

module.exports = db;