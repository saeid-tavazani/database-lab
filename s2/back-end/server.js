const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const userApi = require("./api");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/user", userApi);
app.listen(3000);
