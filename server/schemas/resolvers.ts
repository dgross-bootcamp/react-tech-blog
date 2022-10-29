import Book, { IBook } from "../models/Book";
import Profile, { IProfile } from "../models/Profile";

const resolvers = {
  Query: {
    books: async function (): Promise<IBook[]> {
      return Book.find({});
    },
    profiles: async function (): Promise<IProfile[]> {
      return Profile.find({});
    },
  },
};

export default resolvers;
