function registerUser(req, res) {
  var db = require('../utils/db');

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
