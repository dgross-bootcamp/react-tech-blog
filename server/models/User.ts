import bcrypt from "bcrypt";
import crypto from "crypto";
import { model, Schema } from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
  bio: string;
  image: string;
  // Provided by Mongoose
  _id: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  // Methods
  passwordIsCorrect: (password: string) => Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    username: {
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
      minlength: 8,
    },
    bio: {
      type: String,
    },
    image: {
      type: String,
      default: function () {
        const hash: string = crypto
          .createHash("md5")
          .update(this.email.toLowerCase())
          .digest("hex");
        return `https://www.gravatar.com/avatar/${hash}`;
      },
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

userSchema.methods.passwordIsCorrect = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

const User = model<IUser>("User", userSchema);

export default User;
