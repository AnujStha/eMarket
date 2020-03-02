const mongoClient = require("mongodb").MongoClient;
module.exports = {
  connectionURL: "mongodb://localhost:27017",
  mongoClient: mongoClient,
  dbName: "eMarket"
};
