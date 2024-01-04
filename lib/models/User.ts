import mongoose, { Document, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export interface SomeUser extends Document {
  _id: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

let UserModel: mongoose.Model<SomeUser>;

try {
  UserModel = mongoose.model<SomeUser>("User");
} catch {
  UserModel = mongoose.model<SomeUser>("User", userSchema);
}

export default UserModel;
