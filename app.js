const EXPRESS = require("express");
const CONFIG = require("./configs/app.config");
const API = require("./routes/api.route");
const APP = EXPRESS();

//database connection
require("./database/db");
//parser
APP.use(EXPRESS.json());
APP.use(
  EXPRESS.urlencoded({
    extended: true
  })
);
APP.use("/api", API);

APP.use(function(error, request, response, next) {
  console.log(error);
  response.json({
    msg: "error>>" + error,
    error: error,
    status: error.status
  });
});
APP.listen(CONFIG.port, function(error, done) {
  if (error) {
    console.log("error in listening");
  } else {
    console.log("listening at port >>" + CONFIG.port);
  }
});
