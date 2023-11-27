"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import session from "express-session";
const morgan_1 = __importDefault(require("morgan"));
// import passport from "passport";
// const sequelize = require("../src/db/db.config");
const db_config_1 = __importDefault(require("./db/db.config"));
const index_1 = __importDefault(require("./Routes/index"));
const app = (0, express_1.default)();
db_config_1.default
    .sync()
    .then(() => console.log("database connected successfully"))
    .catch((err) => {
    console.log(err);
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false
// }));
app.use("/", index_1.default);
exports.default = app;
