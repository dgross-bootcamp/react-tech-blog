import db from "../config/connection";
import Book from "../models/Book";

type Book = {
  title: string;
  author: string;
};

export const books: Book[] = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

db.once("open", async function () {
  try {
    await Book.deleteMany({});
    await Book.create(books);
    console.log("🌱 Database Seeded! 🌱");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
});
