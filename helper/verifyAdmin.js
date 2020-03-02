module.exports = function(req, res, next) {
  if (req.loggedInUser.role != 1)
    return next({
      err: "not admin"
    });
  next();
};
