const { Sequelize } = require("sequelize");
require("dotenv").config;

const db = new Sequelize("binar_games", "lenovo", "adan1307", {
  host: process.env.HOST,
  dialect: "postgres",
});

module.exports = { db };
