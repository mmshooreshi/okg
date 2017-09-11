var Sequelize = require('sequelize');
var con=require('./config/config')
//Setting up the config
var sequelize = new Sequelize(con.db.database, con.db.user, con.db.pass, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

module.exports=sequelize;