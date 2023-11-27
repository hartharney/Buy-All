import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import { User, DEPARTMENT, ROLE, UserAttributes } from "./Model";
import bcrypt from "bcryptjs";
import { registerUserSchema, loginUserSchema } from "../../Utils/utils";
import jwt from "jsonwebtoken";

export const registerUsers = async (req: Request, res: Response) => {
  try {
    const { email, password, confirmPassword, firstName, phone } = req.body;

    const { error } = registerUserSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const userId = uuidv4();

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      id: userId,
      email,
      password: hashedPassword,
      role: ROLE.customer,
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
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const loginUsers = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const { error } = loginUserSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const validUser = (await User.findOne({ where: { email } })) as unknown as {
      [key: string]: string;
    };

    if (!validUser) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const validPassword = bcrypt.compare(password, validUser.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: validUser.id, role: validUser.role },
      process.env.JWT_SECRETS as string,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ token, message: "Login successful" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
