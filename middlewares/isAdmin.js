function isAdmin(req, res, next) {
  if (req.jwt == null || req.jwt.data.roll !== 'admin')
    res.sendStatus(403);
  else
    next();
}

module.exports = isAdmin;
