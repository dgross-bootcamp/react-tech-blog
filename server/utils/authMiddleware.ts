import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { IProfile } from "../models/Profile";
import { JwtProfile } from "../types/types";

const secret = process.env.SECRET_KEY;

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req?.headers?.["authorization"];

  if (!authHeader) {
    return req;
  }

  const token = authHeader.split(" ")[1].trim();

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret!, { maxAge: "2h" }) as JwtProfile;
    req.profile = data;
  } catch (error) {
    console.log("Invalid token");
  }

  return req;
}

export function signToken(profileData: IProfile) {
  return jwt.sign(
    {
      data: { name: profileData.name, email: profileData.email },
    },
    secret!,
    { expiresIn: "2h" }
  );
}

export default authMiddleware;
