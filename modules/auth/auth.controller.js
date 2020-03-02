const USER_QUERY = require("./../users/users.query");
const UPLOADER = require("./../../helper/imageUploader.helper");
const PASSWORD_HASH = require("password-hash");
const CONFIG = require("./../../configs/app.config");
const JWT = require("jsonwebtoken");
function createToken(user) {
  return JWT.sign({ userId: user._id }, CONFIG.secret);
}

function register(req, res, next) {
  if (req.err) return next(req.err);
  USER_QUERY.insert(req.body)
    .then(function(user) {
      res.json({
        user: user,
        token: createToken(user)
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
function login(req, res, next) {
  USER_QUERY.find({ userName: req.body.userName })
    .then(function(user) {
      if (!PASSWORD_HASH.verify(req.body.password, user[0].password)) {
        return next("password invalid");
      }
      res.json({
        user: user,
        token: createToken(user)
      });
    })
    .catch(function(err) {
      err.msg = "user not found";
      return next(err);
    });
}
module.exports = {
  register,
  login
};
