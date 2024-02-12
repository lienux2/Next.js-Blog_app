import { NextResponse } from "next/server";
import BlogModel from "../models/Blog";
import { connectMongoDB } from "../mongoDB/connect";

export default async function getLatestBlogs() {
  try {
    await connectMongoDB();
    const latestBlogs = await BlogModel.find().sort({ createdAt: -1 }).limit(3);
    const blogData = JSON.parse(JSON.stringify(latestBlogs));
    return blogData;
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting blog", error },
      { status: 500 }
    );
  }
}
