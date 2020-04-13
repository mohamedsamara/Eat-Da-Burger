require('dotenv').config();

const mysql = require('mysql');

const keys = require('./keys');

let connection;

if (process.env.CLEARDB_DATABASE_URL) {
  connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {
  connection = mysql.createConnection(keys.mysql);
}

connection.connect(function(err) {
  if (err) throw err;
  console.log('MySQL connected!');
});

module.exports = {
  connection
};
