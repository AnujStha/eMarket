const ROUTER = require("express").Router();
const PATH = require("path");
const AUTHENTICATE = require("./../helper/authenticator");
const USER_ROUTE = require("./../modules/users/users.route");
const AUTH_ROUTE = require("./../modules/auth/auth.route");
ROUTER.use("/auth", AUTH_ROUTE);
ROUTER.use("/user", AUTHENTICATE, USER_ROUTE);

module.exports = ROUTER;
