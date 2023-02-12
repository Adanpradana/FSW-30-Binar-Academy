const users = require("../database/connection");
const { v4: uuidv4 } = require("uuid");
function main(req, res) {
  res.sendFile("/");
}

function games() {
  res.sendFile("/games");
}

function createUsers(req, res) {
  const { name, role, password } = req.body;
  const data = {
    id: uuidv4(),
    name,
    role,
    password,
  };
  users.push(data);
  res.status(200).json({ message: "success create users !", data });
}

function findAll(req, res) {
  res.status(200).json({ message: "success get all data!", payload: users });
}

const findOne = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await users.find(
      (user) => user.name === userName && user.password === password
    );
    user
      ? res.status(200).json({ data: user })
      : res.status(200).json({ message: "password doesn't match!" });
  } catch {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { main, createUsers, games, findAll, findOne };
