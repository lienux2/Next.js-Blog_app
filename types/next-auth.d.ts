// import NextAuth from "next-auth";
// import User from "@/lib/models/User";
// import { JWT } from "next-auth/jwt";

// declare module "next-auth" {
//   interface Session {
//     user: User & DefaultSession["user"];
//   }

//   interface User {
//     _id?: string;
//     username: string;
//     password: string;
//     createdAt: string;
//     updatedAt: string;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     user: User & DefaultSession["user"];
//   }
// }
