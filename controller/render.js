const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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

module.exports = {
  dashboard,
  renderEdit,
  loginPage,
  main,
  games,
};
