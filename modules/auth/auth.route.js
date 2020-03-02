const ROUTER = require("express").Router();
const AUTH_CONTROLLER = require("./auth.controller");
const UPLOAD = require("./../../helper/imageUploader.helper");
ROUTER.route("/register").post(UPLOAD.single("img"), AUTH_CONTROLLER.register);
ROUTER.route("/login").post(AUTH_CONTROLLER.login);
module.exports = ROUTER;
