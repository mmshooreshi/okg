function validateVerificationCode(req, res) {
  var db = require('../utils/db');

  var verificationCode = require('../models/verificationCode')(db);
  verificationCode.findAll({
    where: {phoneNumber: req.params.phoneNumber}
  }).then(verificationCodes => {
    if (verificationCodes.length === 0) {
      res.json({status: 'OK', result: false});
      return;
    }
    if (parseInt(req.params.verificationCode) === verificationCodes[verificationCodes.length - 1].code) {
      res.json({status: 'OK', result: true});
    } else {
      res.json({status: 'OK', result: false});
    }
  }).catch(e => {
    res.json({status: 'ERROR', error: e});
  });
}

module.exports = validateVerificationCode;
