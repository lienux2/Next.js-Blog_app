import { compare } from "bcrypt";
import { connectMongoDB } from "@(lib)/mongo/connect";
import UserModel, { SomeUser } from "@(lib)/models/User";

interface UserLoginData {
  username: string;
  password: string;
}

export const loginUser = async ({
  username,
  password,
}: UserLoginData): Promise<SomeUser | null> => {
  await connectMongoDB();

  if (!username || !password) {
    throw new Error("Username or password not entered");
  }

  const user: SomeUser | null = await UserModel.findOne({
    username,
  });

  if (!user) {
    throw new Error("This username does not exist");
  }

  if (user.password) {
    const isValid = await compare(password, user.password);
    console.log(user.password);

    if (!isValid) {
      throw new Error("This password is not correct");
    }
  } else {
    throw new Error("Please check again your username and password.");
  }

  return user;
};
