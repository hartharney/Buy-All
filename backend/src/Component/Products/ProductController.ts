import { Request, Response, NextFunction } from "express";

export const getAllProducts = (req: Request, res: Response) => {
  res.status(200).json({ message: "SUCCESS" });
};
