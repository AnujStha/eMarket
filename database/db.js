const MONGOOSE = require("mongoose");
const DB_CONFIG = require("./../configs/db.config");

MONGOOSE.connect(
  DB_CONFIG.connectionURL + "/" + DB_CONFIG.dbName,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(error, connected) {
    if (error) {
      console.log("error in database connection >>" + error);
    } else {
      console.log("database connected");
    }
  }
);
