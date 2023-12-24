import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  // process.env.DATABASE_URL as string,
  process.env.DB_DATABASE as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    logging: (msg) => {
      console.log(msg);
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

export default sequelize;

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
