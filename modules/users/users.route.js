const ROUTER = require("express").Router();
const CONTROLLER = require("./users.controller");
const VERIFY_ADMIN = require("./../../helper/verifyAdmin");
ROUTER.get("/", CONTROLLER.get);
ROUTER.get("/all", VERIFY_ADMIN, CONTROLLER.getAll);
module.exports = ROUTER;
