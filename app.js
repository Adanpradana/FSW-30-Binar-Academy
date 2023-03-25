const userRoutes = require("./src/routes/routes");
const createLog = require("./middleware/logging");
const session = require("express-session");
const express = require("express");
const flash = require("req-flash");
const path = require("path");
const app = express();
const port = 8000;

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    maxAge: 3600000000,
  })
);
app.use(flash());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(userRoutes);
app.use(createLog);

app.listen(port, () => console.log(`running in port ${port}`));
