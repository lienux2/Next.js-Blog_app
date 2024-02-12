import { NextResponse } from "next/server";
import BlogModel from "../models/Blog";
import { connectMongoDB } from "../mongoDB/connect";

export default async function getBlogByTag({
  params,
}: {
  params: { tag: string };
}) {
  try {
    await connectMongoDB();
    const tag = params.tag;
    const postsByTag = await BlogModel.find({ tag });
    const blogData = JSON.parse(JSON.stringify(postsByTag));
    return blogData;
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting blogs", error },
      { status: 500 }
    );
  }
}
