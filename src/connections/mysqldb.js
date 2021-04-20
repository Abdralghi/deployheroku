//? connect sql to nodejs
const mysql = require("mysql");
// const connection = mysql.createConnection({
//   port: 3306,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: "belsql",
// });
const connection = mysql.createConnection({
  host: "db4free.net",
  port: 3306,
  user: "abdralghi",
  password: "abdurgrand8513",
  database: "latdeploybe",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
