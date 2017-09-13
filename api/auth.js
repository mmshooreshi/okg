function auth(req, res) {
  if (req.body.phoneNumber === undefined) {
    res.json({status: 'ERROR', error: 'No phoneNumber in request body.'});
    return;
  }

  var db = require('../utils/db');

  var user = require('../models/user')(db);
  user.findOne({
    where: {phoneNumber: req.body.phoneNumber}
  }).then(user => {
    if (!user || user === undefined) {
      res.json({status: 'OK', result: ''});
    } else {
      var token = generateToken({phoneNumber: user.phoneNumber, roll: 'user'});
      res.json({status: 'OK', result: token});
    }
  }).catch(e => {
    res.json({status: 'ERROR', error: e});
  });
}

function generateToken(data) {
  var jwt = require('jsonwebtoken');
  var config = require('../config');
  return jwt.sign({
    data: data
  }, config.secret);
}

module.exports = auth;
