const authorization = (req, res, next) => {
  // if there is no user type, set authorization to false and
  // finish middleware
  if (!req.user.dataValues.type) {
    req.authorization = false;
    next();
  }

  req.authorization = req.user.dataValues.type;
  next();

}

module.exports = authorization;