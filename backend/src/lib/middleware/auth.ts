import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../../Component/Users/Model";

interface AuthenticatedRequest extends Request {
  user?: User;
}
export const verifyToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies("token");
    if (!token) return res.status(401).json({ message: "Access Denied" });
    const verified = jwt.verify(token, process.env.TOKEN_SECRET as string);
    if (!verified)
      return res.status(401).json({ message: "Access denied, invalid token" });

    const { id } = verified as unknown as { [key: string]: string };
    const user = await User.findOne({ where: { id: id } });
    if (!user)
      return res.status(401).json({ message: "Kindly sign up as a user" });
    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
