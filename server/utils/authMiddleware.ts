import { Request } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../models/User";
import { JwtProfile } from "../types/types";

const secret = process.env.SECRET_KEY;
const TOKEN_EXPIRATION = "2h";

function authMiddleware({ req }: { req: Request }) {
  const authHeader = req.headers["authorization"];

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
    req.user = data;
  } catch (error) {
    console.log("Invalid token");
  }

  return req;
}

export function signToken({ _id, username, email }: IUser) {
  const payload: Pick<JwtProfile, "data"> = {
    data: {
      username,
      _id,
      email,
    },
  };
  return jwt.sign(payload, secret!, {
    expiresIn: TOKEN_EXPIRATION,
  });
}

export default authMiddleware;
