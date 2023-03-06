const express = require("express");
const router = express.Router();
const users = require("../controller/users");
const render = require("../controller/render");

router.get("/api/users", users.findAll);
router.post("/auth/login", users.login);
router.post("/api/users/create", users.createUsers);
router.post("/api/users/remove", users.deleteUsers);
router.post("/api/users/edit", users.editUsers);
router.get("/auth/logout", users.logOutHandler);

router.get("/users/edit/:id", render.renderEdit);
router.get("/", render.main);
router.get("/games", render.games);
router.get("/login", render.loginPage);
router.get("/dashboard", render.dashboard);

router.get("*", (req, res) =>
  res.status(404).json({ message: "404, not found" })
);

module.exports = router;
