import { InferSchemaType, model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
  { toJSON: { virtuals: true } }
);

profileSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

profileSchema.virtual("gravitron").get(function () {
  const hash: string = crypto
    .createHash("md5")
    .update(this.password)
    .digest("hex");
  return `https://www.gravatar.com/avatar/${hash}`;
});

export type IProfile = InferSchemaType<typeof profileSchema>;

const Profile = model<IProfile>("Profile", profileSchema);

export default Profile;
