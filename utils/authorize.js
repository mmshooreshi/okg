function authorize(req, res, next) {
  var jwt = require('jsonwebtoken');
  var config = require('../config');
  jwt.verify(req.headers.authorization, config.secret, (err, decoded) => {
    if (err) {
      res.json({status: 'ERROR', error: err});
      return;
    }
    req.decoded = decoded;
  });

  next();
}

module.exports = authorize;
