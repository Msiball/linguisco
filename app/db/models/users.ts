import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkID: {
    type: "string",
    required: true,
    unique: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  firstName: {
    type: "string",
  },
  lastName: {
    type: "string",
  },
  username: {
    type: "string",
    unique: true,
  },
});

const User = models?.User || model("User", UserSchema);
export default User;
