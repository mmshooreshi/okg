function isUser(req, res, next) {
  if (req.jwt == null || req.jwt.data.roll !== 'user')
    res.sendStatus(403);
  else
    next();
}

module.exports = isUser;
