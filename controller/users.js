const { PrismaClient } = require("@prisma/client");
const { user } = require("pg/lib/defaults");
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
    const result = await prisma.user_game.findMany({
      include: {
        biodata: true,
      },
    });
    result.length > 0
      ? res.status(200).json({ message: "success get all data", data: result })
      : res.status(200).json({ message: "users is empty!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const createUsers = async (req, res) => {
  const { name, email, password, gender, address, phone } = req.body;

  try {
    if (!req.body) {
      res.json({ message: "cannot be emtpy" });
    }
    const users = await prisma.user_game.create({
      data: {
        name,
        email,
        password,
        biodata: {
          create: {
            gender,
            address,
            phone: BigInt(phone),
          },
        },
      },
    });
    res.redirect("/dashboard");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { name, password } = req.body;
  try {
    if (name === "admin" && password === "test") {
      req.session.loggedin = true;
      req.session.username = name;
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
  const { id, name, email, password } = req.body;
  try {
    const user = await prisma.user_game.update({
      where: {
        id,
      },
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
const deleteUsers = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await prisma.user_game.delete({
      where: {
        id,
      },
    });
    res.redirect("/dashboard");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const dashboard = async (req, res) => {
  const users = await prisma.user_game.findMany({
    include: {
      biodata: true,
    },
  });
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

const renderEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user_game.findUnique({
      where: {
        id,
      },
    });

    res.render("pages/edit", { user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  renderEdit,
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
