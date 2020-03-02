const USER_MODEL = require("./users.model");
const PASSWORD_HASH = require("password-hash");

function map_userData(user, data) {
  if (data.userName) user.userName = data.userName;
  if (data.firstName) user.firstname = data.firstname;
  if (data.lastName) user.lastName = data.lastName;
  if (data.contactnumber) user.contactnumber = data.contactnumber;
  if (data.gender) user.gender = data.gender;
  if (data.profession) user.profession = data.profession;
  if (data.email) user.email = data.email;
  if (data.dob) user.dob = data.dob;
  if (data.online) user.online = true;
  if (data.offline) user.online = false;
  if (data.images) user.images = data.images;
  if (data.active) user.active = true;
  if (data.inactive) user.active = false;
  if (data.role) user.role = data.role;
  if (data.tempAddress || data.permanentAddress) {
    if (!user.address) user.address = {};
    if (data.permanentAddress)
      user.address.permanentAddress = data.permanentAddress;
    if (data.tempAddress)
      user.address.tempAddress = data.tempAddress.split(",");
  }
  if (data.password) {
    user.password = PASSWORD_HASH.generate(data.password);
  }
}
function find(condition, options = {}) {
  return USER_MODEL.find(condition)
    .sort({
      _id: -1
    })
    .exec();
}
function update(id, data) {
  return new Promise(function(resolve, reject) {
    USER_MODEL.findById(id)
      .then(function(user) {
        map_userData(user, data);
        resolve(user.save());
      })
      .catch(function(err) {
        err.msg = "user not found";
        reject(err);
      });
  });
}
function insert(data) {
  var newUser = new USER_MODEL({});
  map_userData(newUser, data);
  return newUser.save();
}
function remove(id) {
  return USER_MODEL.findByIdAndRemove(id);
}

module.exports = {
  find,
  update,
  remove,
  insert
};
