"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Router_1 = __importDefault(require("./Products/Router"));
const Router_2 = __importDefault(require("./Users/Router"));
module.exports = {
    Products: {
        routes: Router_1.default,
    },
    Users: {
        routes: Router_2.default,
    },
};
