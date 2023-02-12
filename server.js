const port = 8000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const users = require("./controller/users");

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/")));
app.use(bodyParser.json());

app.get("/", users.main);
app.get("/games", users.games);
app.get("/users", users.findAll);
app.post("/users", users.createUsers);
app.post("/auth/login", users.findOne);

app.listen(port, () => console.log(`running in port ${port}`));
