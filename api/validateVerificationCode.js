function validateVerificationCode(req, res) {
  var db = require('../utils/db');

  var verificationCode = require('../models/verificationCode');
  verificationCode.findAll({
    where: {phoneNumber: req.params.phoneNumber}
  }).then(verificationCodes => {
    if (parseInt(req.params.verificationCode) === verificationCodes[verificationCodes.length - 1].verificationCode) {
      res.json({status: 'OK', result: true});
    } else {
      res.json({status: 'OK', result: false});
    }
  }).catch(e => {
    res.json({status: 'ERROR', error: e});
  });
}

module.exports = validateVerificationCode;
