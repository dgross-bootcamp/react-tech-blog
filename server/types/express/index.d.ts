import { Request } from "express";
import { JwtProfile } from "../types";

declare global {
  namespace Express {
    export interface Request {
      profile: AuthContext;
    }
  }
}
