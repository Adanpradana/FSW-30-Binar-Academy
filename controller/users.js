const users = require("../model/model");

const main = (req, res) =>
  res.render("pages/index", { title: "What's so special" });
const games = (req, res) => {
  try {
    if (req.session.loggedin)
      res.render("pages/games", {
        message: req.session.username,
      });
    else {
      res.redirect("/login");
    }
  } catch (error) {
    res.send({ message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const result = await users.findAll();
    result.length > 0
      ? res.status(200).json({ message: "success get all data", data: result })
      : res.status(200).json({ message: "users is empty!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const createUsers = async (req, res) => {
  const { user_name, password } = req.body;
  try {
    const user = await users.create({
      user_name,
      password,
    });
    res.status(200).json({ message: "success create users !" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const editUsers = async (req, res) => {
  const { _id } = req.params;
  const { user_name, password } = req.body;
  try {
    const user = await users.update(
      {
        user_name,
        password,
      },
      {
        where: {
          _id,
        },
      }
    );
    res.status(200).json({ message: "success update users", data: user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const deleteUsers = async (req, res) => {
  const { _id } = req.params;
  try {
    const user = await users.destroy({
      where: {
        _id,
      },
    });
    res.status(200).json({ message: "users deleted !" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { user_name, password } = req.body;
  try {
    const user = await users.findOne({
      where: {
        user_name,
        password,
      },
    });
    if (user) {
      req.session.loggedin = true;
      req.session.username = user_name;
      res.redirect("/games");
    } else {
      res.redirect("/login", { message: "incorrect uname & password" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const dashboard = (req, res) => {
  if (req.session.loggedin)
    res.render("pages/dashboard", {
      message: req.session.username,
    });
  else {
    res.redirect("/login");
  }
};
const loginPage = (req, res) => {
  res.render("pages/login");
};
const logOutHandler = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
module.exports = {
  logOutHandler,
  main,
  loginPage,
  dashboard,
  createUsers,
  games,
  findAll,
  login,
  editUsers,
  deleteUsers,
};
