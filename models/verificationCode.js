var sequelize = require('sequelize');

function verificationCode(connection) {
    return connection.define('verificationCode', {
        code: {
          type: sequelize.INTEGER,
          allowNull: false
        },
        phoneNumber: {
          type: sequelize.STRING(10),
          allowNull: false
        }
    });
}

module.exports = verificationCode;
