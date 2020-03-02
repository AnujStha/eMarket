const USER_QUERY = require("./users.query");
const UPLOADER = require("./../../helper/imageUploader.helper");
function get(req, res, next) {
  USER_QUERY.find({ _id: req.loggedInUser._id })
    .then(function(user) {
      res.json(user);
    })
    .catch(function(err) {
      return next(err);
    });
}
function getAll(req, res, next) {
  USER_QUERY.find({})
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      return next(err);
    });
}
module.exports = {
  get,
  getAll
};
