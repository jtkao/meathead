var mysql = require("mysql");


var pool = mysql.createPool({
  connectionLimit: 10,
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b780b2f71cbafc",
  password: "b18ec129",
  database: "heroku_5284d4c914ea5c8"
});

pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

module.exports = pool;