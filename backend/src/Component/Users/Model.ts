import sequelize from "../../db/db.config";
import { Model, DataTypes } from "sequelize";

export enum ROLE {
  endor = "VENDOR",
  admin = "ADMIN",
  customer = "CUSTOMER",
}

export enum DEPARTMENT {
  electronics = "ELECTRONICS",
  clothing = "CLOTHING",
  books = "BOOKS",
  sports = "SPORTS",
  home = "HOME",
  general = "GENERAL",
}

export interface UserAttributes {
  id: string;
  email: string;
  password: string;
  role: ROLE;
  department: DEPARTMENT | null;
  createdAt?: Date;
  updatedAt?: Date;
  active: boolean;
  firstName: string;
  lastName: string;
  address: string;
  city: string | null;
  state: string | null;
  zip: string | null;
  phone: string | null;
  isEmployee: boolean;
  resetPasswordExpiration?: number | null;
  resetPasswordStatus?: boolean;
  resetPasswordCode: string | null;
  loginCount: number | null;
  loginRetrival: number | null;
  DateOfBirth: Date | null;
  nameOfEmergencyContact: string | null;
  relationshipWithEmergencyContact: string | null;
  phoneNumberOfEmergencyContact: string | null;
  employeeId: string | null;
  preferredName: string;
  DateOfEmployment: Date | null;
  WorkLocation: string | null;
  salary: string | null;
  workSchedule: string | null;
  bankName: string | null;
  accountNumber: string | null;
  accountName: string | null;
  image: string | null;
}

export class User extends Model<UserAttributes> {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: Object.values(ROLE),
      defaultValue: ROLE.customer,
      allowNull: true,
    },
    department: {
      type: DataTypes.ENUM,
      values: Object.values(DEPARTMENT),
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        is: /^\d{10}$/,
      },
      allowNull: false,
    },
    isEmployee: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    resetPasswordExpiration: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    resetPasswordStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    resetPasswordCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    loginCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    loginRetrival: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    DateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    nameOfEmergencyContact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    relationshipWithEmergencyContact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumberOfEmergencyContact: {
      type: DataTypes.STRING,
      validate: {
        is: /^\d{10}$/, // Assuming a basic phone number validation
      },
      allowNull: true,
    },
    employeeId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    preferredName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DateOfEmployment: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    WorkLocation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salary: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    workSchedule: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bankName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, tableName: "user" }
);
