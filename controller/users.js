const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
            phone,
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

const logOutHandler = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
module.exports = {
  logOutHandler,
  createUsers,
  findAll,
  login,
  editUsers,
  deleteUsers,
};
