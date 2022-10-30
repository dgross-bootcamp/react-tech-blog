import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { HydratedDocument } from "mongoose";
import { IProfile } from "../models/Profile";
import { AuthContext, JwtProfile } from "../types/types";

const secret = process.env.SECRET_KEY;
const TOKEN_EXPIRATION = "2h";

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
    const { data } = jwt.verify(token, secret!, {
      maxAge: TOKEN_EXPIRATION,
    }) as JwtProfile;
    req.profile = data;
  } catch (error) {
    console.log("Invalid token");
  }

  return req;
}

export function signToken({ _id, name, email }: HydratedDocument<IProfile>) {
  const authContext: AuthContext = { _id, name, email };
  return jwt.sign({ data: authContext }, secret!, {
    expiresIn: TOKEN_EXPIRATION,
  });
}

export default authMiddleware;
