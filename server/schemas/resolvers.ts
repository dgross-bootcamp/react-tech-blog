import { HydratedDocument } from "mongoose";
import Profile, { IProfile } from "../models/Profile";
import { signToken } from "../utils/authMiddleware";

const resolvers = {
  Query: {
    profiles: async function (): Promise<IProfile[]> {
      return Profile.find({});
    },
  },
  Mutation: {
    addProfile: async (_: unknown, { name, email, password }: IProfile) => {
      const profile: HydratedDocument<IProfile> = await Profile.create({
        name,
        email,
        password,
      });
      const token = signToken(profile);

      return { token, profile };
    },
  },
};

export default resolvers;
