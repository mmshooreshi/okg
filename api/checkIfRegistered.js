function generateVerificationCode() {
  return Math.floor(Math.random() * 9000) + 1000;
}

function checkIfRegistered(req, res) {
  var db = require('../utils/db');
  var validator = require('validator');

  var user = require('../models/user')(db);
  user.findAll({
    where: {phoneNumber: req.params.phoneNumber}
  }).then(users => {
    if (users.length === 0) {
      if (!validator.isMobilePhone('+98' + req.params.phoneNumber, 'fa-IR')) {
        res.json({status: 'ERROR', error: 'Phone number is not valid.'});
        return;
      }
      var code = generateVerificationCode();
      var sms = require('../utils/sms');
      var format = require('string-format');
      /*sms.send({
        receptor: req.params.phoneNumber,
        message: format('کد تایید شما: {0}', code)
      });*/
      console.log(code);
      var verificationCode = require('../models/verificationCode')(db);
      verificationCode.create({
        code: code,
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
    console.log(e);
    res.json({status: 'ERROR', error: e});
  });
}

module.exports = checkIfRegistered;
