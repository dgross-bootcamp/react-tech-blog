import db from "../config/connection";
import Book, { IBook } from "../models/Book";
import Profile, { IProfile } from "../models/Profile";

const books: IBook[] = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const profiles: IProfile[] = [
  {
    name: "Ross",
    email: "r@ross.gov",
    password: "password",
  },
];

db.once("open", async function () {
  try {
    await Book.deleteMany({});
    await Profile.deleteMany({});

    await Book.create(books);
    await Profile.create(profiles);

    console.log("🌱 Database Seeded! 🌱");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
});
