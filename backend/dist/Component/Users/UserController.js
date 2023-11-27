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
exports.loginUsers = exports.registerUsers = void 0;
const uuid_1 = require("uuid");
const Model_1 = require("./Model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const utils_1 = require("../../Utils/utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registerUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, confirmPassword, firstName, phone } = req.body;
        const { error } = utils_1.registerUserSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const existingUser = yield Model_1.User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const userId = (0, uuid_1.v4)();
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        const newUser = yield Model_1.User.create({
            id: userId,
            email,
            password: hashedPassword,
            role: Model_1.ROLE.customer,
            department: null,
            active: true,
            firstName: firstName,
            lastName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: phone,
            isEmployee: false,
            resetPasswordCode: "",
            loginCount: null,
            loginRetrival: null,
            DateOfBirth: null,
            nameOfEmergencyContact: null,
            relationshipWithEmergencyContact: null,
            phoneNumberOfEmergencyContact: null,
            employeeId: null,
            preferredName: "",
            DateOfEmployment: null,
            WorkLocation: null,
            salary: null,
            workSchedule: null,
            bankName: null,
            accountNumber: null,
            accountName: null,
            image: null,
        });
        return res
            .status(200)
            .json({ newUser, message: "User created successfully" });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.registerUsers = registerUsers;
const loginUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const { error } = utils_1.loginUserSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const validUser = (yield Model_1.User.findOne({ where: { email } }));
        if (!validUser) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const validPassword = bcryptjs_1.default.compare(password, validUser.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jsonwebtoken_1.default.sign({ id: validUser.id, role: validUser.role }, process.env.JWT_SECRETS, { expiresIn: "1d" });
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({ token, message: "Login successful" });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.loginUsers = loginUsers;
