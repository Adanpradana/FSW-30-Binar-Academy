const users = require("../model/model");

const main = (req, res) =>
  res.render("pages/index", { title: "What's so special" });
const games = (req, res) => res.render("pages/games");

const createUsers = async (req, res) => {
  const { user_name, password } = req.body;
  try {
    const user = await users.create({
      user_name,
      password,
    });
    res.status(200).json({ message: "success create users !" });
  } catch (error) {
    res.status(500).json({ message: error.errors });
  }
};

const findAll = async (req, res) => {
  try {
    const result = await users.findAll();
    result.length > 0
      ? res
          .status(200)
          .json({ message: "success get all data", payload: result })
      : res.status(200).json({ message: "users is empty!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

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
