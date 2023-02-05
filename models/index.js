require("dotenv").config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true,
      },
    },
    operatorsAliases: false,
    // logging: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sensors = require("./sensor.model.js")(sequelize, Sequelize);

module.exports = db;
