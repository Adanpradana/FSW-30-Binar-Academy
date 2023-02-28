const express = require("express");
const router = express.Router();
const users = require("../controller/users");

router.post("/auth/login", users.login);
router.get("/auth/logout", users.logOutHandler);

router.get("/", users.main);
router.get("/games", users.games);
router.get("/dashboard", users.dashboard);
router.get("/login", users.loginPage);
router.get("/users", users.findAll);
router.post("/users", users.createUsers);
router.put("/users/:_id", users.editUsers);
router.delete("/users/:_id", users.deleteUsers);

router.get("*", (req, res) =>
  res.status(404).json({ message: "404, not found" })
);

module.exports = router;
