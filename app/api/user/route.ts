// import { NextRequest, NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]/route";
// import { hash } from "bcrypt";
// import { connectMongoDB } from "@/lib/mongo/connect";
// import UserModel from "@/lib/models/User";

// export async function GET(req: NextRequest) {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return NextResponse.json({
//       message: "You are not authorized to view this page",
//     });
//   }
//   return NextResponse.json({
//     message: "Hello",
//   });
// }

// export async function POST() {
//   try {
//     await connectMongoDB();
//     const passwordHash = await hash("adminpassword", 10);

//     const adminUser = await UserModel.create({
//       username: "admin",
//       password: passwordHash,
//     });
//     console.log("User created succesfully");
//     return NextResponse.json({
//       adminUser,
//     });
//   } catch (error) {
//     return NextResponse.json({
//       message: "Something went wrong",
//     });
//   }
// }
