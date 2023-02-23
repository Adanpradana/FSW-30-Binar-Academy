const { Sequelize } = require("sequelize");
require("dotenv").config;

const db = new Sequelize("binar_games", "lenovo", "adan1307", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
