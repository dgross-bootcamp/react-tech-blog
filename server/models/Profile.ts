import { InferSchemaType, model, Schema } from "mongoose";

const profileSchema = new Schema({
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
});

export type IProfile = InferSchemaType<typeof profileSchema>;

const Profile = model<IProfile>("Profile", profileSchema);

export default Profile;
