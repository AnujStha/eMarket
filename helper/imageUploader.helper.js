const MULTER = require("multer");
const PATH = require("path");

var storage = MULTER.diskStorage({
  destination: function(req, file, cb) {
    cb(null, PATH.join(process.cwd(), "uploads/images"));
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.filename);
  }
});
function fileFilter(req, file, cb) {
  if (file.mimetype.split("/")[0] == "image") cb(null, true);
  else {
    req.err = "invalid File";
    cb(null, false);
  }
}
var upload = MULTER({
  fileFilter: fileFilter,
  Storage: storage
});
module.exports = upload;
