const users = require("../database/connection");
const { v4: uuidv4 } = require("uuid");

const main = (req, res) =>
  res.render("pages/index", { title: "What's so special" });
const games = (req, res) => res.render("pages/games");

const createUsers = async (req, res) => {
  const { name, role, password } = req.body;
  const data = {
    id: uuidv4(),
    name,
    role,
    password,
  };
  try {
    const user = await users.find(
      (user) => user.name === name && user.password === password
    );
    if (user) {
      return res.json({ message: "username already exist" });
    }
    users.push(data);
    res.status(200).json({ message: "success create users !", data });
  } catch {
    res.status(500).json({ message: "internal server error!" });
  }
};

function findAll(req, res) {
  res.status(200).json({ message: "success get all data!", payload: users });
}

const findOne = async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await users.find(
      (user) => user.name === name && user.password === password
    );
    user
      ? res.status(200).json({ message: "login success !", data: user })
      : res.status(200).json({ message: "password doesn't match!" });
  } catch {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { main, createUsers, games, findAll, findOne };
