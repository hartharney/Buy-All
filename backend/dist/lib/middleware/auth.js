"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Model_1 = require("../../Component/Users/Model");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies("token");
        if (!token)
            return res.status(401).json({ message: "Access Denied" });
        const verified = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        if (!verified)
            return res.status(401).json({ message: "Access denied, invalid token" });
        const { id } = verified;
        const user = yield Model_1.User.findOne({ where: { id: id } });
        if (!user)
            return res.status(401).json({ message: "Kindly sign up as a user" });
        req.user = user;
        next();
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.verifyToken = verifyToken;
