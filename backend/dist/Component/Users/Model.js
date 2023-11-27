"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.DEPARTMENT = exports.ROLE = void 0;
const db_config_1 = __importDefault(require("../../db/db.config"));
const sequelize_1 = require("sequelize");
var ROLE;
(function (ROLE) {
    ROLE["endor"] = "VENDOR";
    ROLE["admin"] = "ADMIN";
    ROLE["customer"] = "CUSTOMER";
})(ROLE || (exports.ROLE = ROLE = {}));
var DEPARTMENT;
(function (DEPARTMENT) {
    DEPARTMENT["electronics"] = "ELECTRONICS";
    DEPARTMENT["clothing"] = "CLOTHING";
    DEPARTMENT["books"] = "BOOKS";
    DEPARTMENT["sports"] = "SPORTS";
    DEPARTMENT["home"] = "HOME";
    DEPARTMENT["general"] = "GENERAL";
})(DEPARTMENT || (exports.DEPARTMENT = DEPARTMENT = {}));
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.ENUM,
        values: Object.values(ROLE),
        defaultValue: ROLE.customer,
        allowNull: true,
    },
    department: {
        type: sequelize_1.DataTypes.ENUM,
        values: Object.values(DEPARTMENT),
        allowNull: true,
    },
    active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    zip: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            is: /^\d{10}$/,
        },
        allowNull: false,
    },
    isEmployee: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
    },
    resetPasswordExpiration: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    resetPasswordStatus: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
    },
    resetPasswordCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    loginCount: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
    },
    loginRetrival: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
    },
    DateOfBirth: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    nameOfEmergencyContact: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    relationshipWithEmergencyContact: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    phoneNumberOfEmergencyContact: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            is: /^\d{10}$/, // Assuming a basic phone number validation
        },
        allowNull: true,
    },
    employeeId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    preferredName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    DateOfEmployment: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    WorkLocation: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    salary: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    workSchedule: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    bankName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    accountNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    accountName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, { sequelize: db_config_1.default, tableName: "user" });
