import { NextResponse } from "next/server";
import BlogModel from "../models/Blog";
import { connectMongoDB } from "../mongoDB/connect";

export default async function getBlog({ params }: { params: { id: string } }) {
  try {
    await connectMongoDB();
    const id = params.id;
    const blog = await BlogModel.findById({ _id: id });
    const blogData = JSON.parse(JSON.stringify(blog));
    return blogData;
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting blog", error },
      { status: 500 }
    );
  }
}
