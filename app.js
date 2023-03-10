const port = 8000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const userRoutes = require("./routes/routes");
const createLog = require("./middleware/logging");
const session = require("express-session");
const flash = require("req-flash");
app.use(express.static("public"));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    maxAge: 3600000000,
  })
);
app.use(flash());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "/views")));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.json());
app.use(createLog);
app.use(userRoutes);

app.listen(port, () => console.log(`running in port ${port}`));
