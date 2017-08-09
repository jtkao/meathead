var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 4200,   
  host: "127.0.0.1",
  user: "root",
  password: "sdfccsdfcc",
  database: "meathead",
  connectionLimit: 5
});

// connect
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
