const express = require("express");
const router = express.Router();
const users = require("../controller/users");

router.get("/", users.main);
// router.get("/games", users.games);

router.get("/users", users.findAll);
router.post("/users", users.createUsers);
router.post("/auth/login", users.findOne);
router.get("*", (req, res) =>
  res.status(404).json({ message: "404, not found" })
);

module.exports = router;
