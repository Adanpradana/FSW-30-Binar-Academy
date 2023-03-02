const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
    const result = await prisma.user_game.findMany();
    result.length > 0
      ? res.status(200).json({ message: "success get all data", data: result })
      : res.status(200).json({ message: "users is empty!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const createUsers = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const users = await prisma.user_game.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.redirect("/dashboard");
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const login = async (req, res) => {
  const { name, password } = req.body;
  try {
    // const user = await prisma.user_game.findMany({
    //   where: {
    //     name,
    //     password,
    //   },
    // });
    // if (user) {

    if (name === "admin" && password === "test") {
      req.session.loggedin = true;
      req.session.username = name;
      // req.session.password = password;
      req.flash("successMessage", "login success !");
      res.redirect("/dashboard");
    } else {
      req.flash("errorMessage", "wrong username & password!");
      res.redirect("/login");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
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

const dashboard = async (req, res) => {
  const users = await prisma.user_game.findMany();
  if (req.session.loggedin) {
    res.render("pages/dashboard", {
      message: req.session.username,
      data: {
        users,
        alert: req.flash("successMessage"),
      },
    });
  } else {
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

const renderCreate = (req, res) => {
  if (req.session.loggedin) res.render("pages/create");
};
module.exports = {
  renderCreate,
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
