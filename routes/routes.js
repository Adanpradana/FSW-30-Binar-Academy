const express = require("express");
const router = express.Router();
const users = require("../controller/users");

router.post("/auth/login", users.login);
router.get("/auth/logout", users.logOutHandler);
router.post("/api/users/create", users.createUsers);
router.post("/api/users/remove", users.deleteUsers);
router.get("/api/users", users.findAll);
router.put("/api/users/", users.editUsers);

router.get("/users/edit/:id", users.renderEdit);
router.get("/", users.main);
router.get("/games", users.games);
router.get("/login", users.loginPage);
router.get("/dashboard", users.dashboard);

router.get("*", (req, res) =>
  res.status(404).json({ message: "404, not found" })
);

module.exports = router;
