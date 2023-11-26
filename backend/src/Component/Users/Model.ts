import sequelize from "../../../db";
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
