import { JwtPayload } from "jsonwebtoken";
import { IUser } from "../models/User";

export type AuthContext = Pick<IUser, "_id" | "username" | "email">;

export interface JwtProfile extends JwtPayload {
  data: AuthContext;
}

export interface UserDTO {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}
