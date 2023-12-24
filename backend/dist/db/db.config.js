"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize(
// process.env.DATABASE_URL as string,
process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    logging: (msg) => {
        console.log(msg);
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
exports.default = sequelize;
// import dotenv from "dotenv";
// dotenv.config();
// import mysql from "mysql2";
// const connection = mysql.createConnection(process.env.DATABASE_URL);
// console.log("Connected to PlanetScale!");
// connection.end();
// export default connection;
// require("dotenv").config();
// const mysql = require("mysql2");
// // Create the connection to the database
// const connection = mysql.createConnection(process.env.DATABASE_URL);
// // simple query
// connection.query("show tables", function (err, results, fields) {
//   console.log(results); // results contains rows returned by server
//   console.log(fields); // fields contains extra metadata about results, if available
// });
// // Example with placeholders
// connection.query(
//   "select 1 from dual where ? = ?",
//   [1, 1],
//   function (err, results) {
//     console.log(results);
//   }
// );
// connection.end();
