const express = require("express");
const db = require("./db");
const api = express.Router();

api.post("/", (req, res) => {
  console.log("Connect");
  let date = new Date().toLocaleDateString("fa-IR");
  let bodyValue = req.body;
  console.log(JSON.stringify(bodyValue));
  let newUserQuery = `INSERT INTO users VALUES (NULL,'${bodyValue.name}','${bodyValue.family}','${bodyValue.username}','${bodyValue.password}','${date}')`;
  db.query(newUserQuery, (error, result) => {
    if (error) {
      console.log("my error 2 : " + error);
      res.send(null);
    } else {
      console.log("success");
      res.send(true);
    }
  });
});

api.get("/all", (req, res) => {
  console.log("Connect");
  let getQueryAllUsers = "SELECT * FROM `users`";
  db.query(getQueryAllUsers, (err, result) => {
    if (err) {
      console.log("my error 4 : " + err);
      res.send(null);
    } else {
      console.log("success");
      res.send(JSON.stringify(result));
    }
  });
});

api.put("/rem/:id", (req, res) => {
  console.log("success");
  console.log(req.params.id);
  let userDeleteQuery = `UPDATE users SET is_deleted=1 WHERE id = ${req.params.id}`;
  db.query(userDeleteQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
      res.send(JSON.stringify(true));
    }
  });
});

module.exports = api;
