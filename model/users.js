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
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
});
// users.sync({ force: true });
console.log("user table sync complete!");
module.exports = users;
