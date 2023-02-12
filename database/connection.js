const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    name: "adan",
    role: "admin",
    password: "@12334",
  },
  {
    id: uuidv4(),
    name: "john doe",
    role: "developer",
    password: "11234",
  },
  {
    id: uuidv4(),
    name: "riska",
    role: "supervisor",
    password: "@12334",
  },
];

module.exports = users;
