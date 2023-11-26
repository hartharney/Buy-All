import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    dialect: "postgres", // Use "postgres" for PostgreSQL
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    // dialectOptions: { // Remove the dialectOptions or customize based on your PostgreSQL setup
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
  }
);

export default sequelize;
