"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.registerUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerUserSchema = joi_1.default.object().keys({
    email: joi_1.default.string().trim().lowercase().email().required(),
    firstName: joi_1.default.string().required(),
    password: joi_1.default.string()
        .trim()
        .regex(/^[a-zA-Z0-9]{3,18}$/)
        .required(),
    confirmPassword: joi_1.default.any()
        .equal(joi_1.default.ref("password"))
        .required()
        .label("Confirm password")
        .messages({ "any.only": "{{#label}} does not match" }),
    phone: joi_1.default.string().required(),
});
exports.loginUserSchema = joi_1.default.object().keys({
    email: joi_1.default.string().trim().lowercase().email().required(),
    password: joi_1.default.string()
        .trim()
        .regex(/^[a-zA-Z0-9]{3,18}$/)
        .required(),
});
