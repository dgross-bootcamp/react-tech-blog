import Book, { IBook } from "../models/Book";

const resolvers = {
  Query: {
    books: async function (): Promise<IBook[]> {
      const books = await Book.find({});
      return Promise.resolve(books);
    },
  },
};

export default resolvers;
