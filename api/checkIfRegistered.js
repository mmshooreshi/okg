//TODO CHECK IF MOBILE IS VALID

function generateVerificationCode() {
  return Math.floor(Math.random() * 9000) + 1000;
}

function checkIfRegistered(req, res) {
  var db = require('../utils/db');

  var user = require('../models/user')(db);
  user.findAll({
    where: {phoneNumber: req.params.phoneNumber}
  }).then(users => {
    if (users.length === 0) {
      //TODO SMS SENDING
      var code = generateVerificationCode();
      var verificationCode = require('../models/verificationCode')(db);
      verificationCode.create({
        verificationCode: code,
        phoneNumber: req.params.phoneNumber
      }).then(() => {
        res.json({status: 'OK', result: false});
      }).catch(e => {
        res.json({status: 'ERROR', error: e});
      });
    } else {
      res.json({status: 'OK', result: true});
    }
  }).catch(e => {
    res.json({status: 'ERROR', error: e});
  });
}

module.exports = checkIfRegistered;
