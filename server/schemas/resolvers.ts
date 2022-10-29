import Book, { IBook } from "../models/Book";
import Profile, { IProfile } from "../models/Profile";
import { signToken } from "../utils/authMiddleware";

const resolvers = {
  Query: {
    books: async function (): Promise<IBook[]> {
      return Book.find({});
    },
    profiles: async function (): Promise<IProfile[]> {
      return Profile.find({});
    },
  },
  Mutation: {
    addProfile: async (
      _: any,
      {
        name,
        email,
        password,
      }: { name: string; email: string; password: string }
    ) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
  },
};

export default resolvers;
