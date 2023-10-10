const mysql = require("mysql");

const config = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "login",
});

module.exports = config;
