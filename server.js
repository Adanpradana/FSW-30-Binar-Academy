const port = 8000;
const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const path = require("path");

app.use(express.static(path.join(__dirname, "/")));

router.get("/", (req, res) => {
  try {
    res.sendFile("/");
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/games", (req, res) => {
  try {
    res.sendFile("/games");
  } catch (error) {
    console.log(error.message);
  }
});
app.listen(port, () => console.log(`running in port ${port}`));

