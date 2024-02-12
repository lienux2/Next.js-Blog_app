import { NextResponse } from "next/server";
import BlogModel from "../models/Blog";
import { connectMongoDB } from "../mongoDB/connect";

export default async function getAllBlogs() {
  try {
    await connectMongoDB();
    const blogs = await BlogModel.find();
    const blogData = JSON.parse(JSON.stringify(blogs));
    return blogData;
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting blogs", error },
      { status: 500 }
    );
  }
}
