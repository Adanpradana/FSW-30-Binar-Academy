const Sequelize = require("sequelize");
const db = require("../database/connection");
const users = db.define("users_games", {
  _id: {
    type: Sequelize.DataTypes.STRING,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    allowNull: true,
    primaryKey: true,
    validate: {
      notEmpty: true,
    },
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "username already exist !",
    },
    validate: {
      min: {
        args: 3,
        msg: "Username must start with a letter, have no spaces, and be at least 3 characters.",
      },
      max: {
        args: 40,
        msg: "Username must start with a letter, have no spaces, and be at less than 40 characters.",
      },
      is: {
        args: /^[A-Za-z][A-Za-z0-9-]+$/i, // must start with letter and only have letters, numbers, dashes
        msg: "Username must start with a letter, have no spaces, and be 3 - 40 characters.",
      },
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
});
users.sync();
console.log("user table sync complete!");
module.exports = users;
