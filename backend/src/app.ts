import express, { Request, Response } from "express";

import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
// import session from "express-session";
import logger from "morgan";
// import passport from "passport";
// const sequelize = require("../src/db/db.config");
import sequelize from "./db/db.config";
// import connection from "./db/db.config";

import router from "./Routes/index";

const app = express();

sequelize
  .sync()
  .then(() => console.log("database connected successfully"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger("dev"));
app.use(helmet());
app.use(cors());
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false
// }));
app.use("/", router);
export default app;
