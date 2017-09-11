
var sequelize = require('sequelize');

function genres(connection) {
    var Genre = connection.define('Genre', {
        title: sequelize.STRING,
        image: sequelize.STRING,
    });
    return Genre;
}

module.exports = genres;
