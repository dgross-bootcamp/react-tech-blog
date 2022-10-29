import { NextFunction, Request } from "express";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET_KEY;

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return req;
  }

  const token = authHeader.split(" ")[1].trim();

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret!, { maxAge: "2h" });
    req.profile = data;
  } catch (error) {
    console.log("Invalid token");
  }

  return req;
}

export default authMiddleware;
