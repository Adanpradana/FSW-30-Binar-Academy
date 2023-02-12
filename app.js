const port = 8000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const userRoutes = require("./routes/routes");
const createLog = require("./middleware/logging");

app.use(express.static(path.join(__dirname, "/")));
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());
app.use(createLog);
app.use(userRoutes);

app.listen(port, () => console.log(`running in port ${port}`));
