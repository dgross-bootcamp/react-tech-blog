import { JwtPayload } from "jsonwebtoken";

export interface JwtProfile extends JwtPayload {
  data: {
    name: string;
    email: string;
  };
}
