function registerUser(req, res) {
  var db = require('../utils/db');
  var validator = require('validator');

  if (!validator.isMobilePhone('+98' + req.params.phoneNumber)) {
    res.json({status: 'ERROR', error: 'MOBILE PHONE IS NOT VALID'});
    return;
  }

  var user = require('../models/user')(db);
  user.create({
    name: req.params.name,
    phoneNumber: req.params.phoneNumber,
  }).then(() => {
    res.json({status: 'OK'});
  }).catch(e => {
    res.json({status: 'ERROR', error: e});
  });
}

module.exports = registerUser;
