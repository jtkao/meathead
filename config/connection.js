var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,   
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b780b2f71cbafc",
  password: "b18ec129",
  database: "heroku_5284d4c914ea5c8"
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