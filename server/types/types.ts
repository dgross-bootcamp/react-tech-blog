import { JwtPayload } from "jsonwebtoken";
import { HydratedDocument } from "mongoose";
import { IProfile } from "../models/Profile";

export type AuthContext = Pick<
  HydratedDocument<IProfile>,
  "_id" | "name" | "email"
>;

export interface JwtProfile extends JwtPayload {
  data: AuthContext;
}
