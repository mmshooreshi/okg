var sequelize = require('sequelize');

function verificationCode(connection) {
    return connection.define('verificationCode', {
        verificationCode: {
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
