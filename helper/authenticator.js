const JWT = require("jsonwebtoken");
const CONFIG = require("../configs/app.config");
const USER_MODEL = require("./../modules/users/users.model");
module.exports = function(req, res, next) {
  var token;
  if (req.headers["x-access-token"]) token = req.headers["x-acccess-token"];
  if (req.headers["token"]) token = req.headers["token"];
  if (req.headers["authorization"]) token = req.headers["authorization"];
  if (token) {
    console.log("token");
    JWT.verify(token, CONFIG.secret, function(err, decoded) {
      if (err) return next(err);
      console.log(decoded);
      USER_MODEL.findById(decoded.userId, function(err, user) {
        if (err) return next(err);
        if (!user) {
          return next({
            err: "user not found"
          });
        }
        req.loggedInUser = user;
        next();
      });
    });
  } else {
    return next({
      err: "token not found"
    });
  }
};
