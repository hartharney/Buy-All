"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    // dialectOptions: { // Remove the dialectOptions or customize based on your PostgreSQL setup
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
});
exports.default = sequelize;
