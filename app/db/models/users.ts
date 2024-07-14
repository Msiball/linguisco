import mongoose, { Schema } from "mongoose";
import { getDefaultAutoSelectFamilyAttemptTimeout } from "net";

const UserSchema = new Schema({
  userID: String,
  email: String,
  dateCreated: { type: Date, default: Date.now },
  firstName: String,
  lastName: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
