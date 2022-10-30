import db from "../config/connection";
import Profile, { IProfile } from "../models/Profile";

const profiles: IProfile[] = [
  {
    name: "Ross",
    email: "r@ross.gov",
    password: "password",
  },
  {
    name: "Dang Ross",
    email: "dgross@instructors.2u.com",
    password: "chartreuse",
  },
];

db.once("open", async function () {
  try {
    await Profile.deleteMany({});
    await Profile.create(profiles);

    console.log("🌱 Database Seeded! 🌱");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
});
