function jwtParser(req, res, next) {
  var jwt = require('jsonwebtoken');
  var config = require('../config');
  jwt.verify(req.headers.authorization, config.secret, (err, decoded) => {
    if (!err)
      req.jwt = decoded;
  });

  next();
}

module.exports = jwtParser;
