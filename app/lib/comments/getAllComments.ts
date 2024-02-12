import { NextResponse } from "next/server";
import { connectMongoDB } from "../mongoDB/connect";
import CommentModel from "../models/Comment";

export default async function getAllComments() {
  try {
    await connectMongoDB();
    const allComments = await CommentModel.find().sort({ createdAt: -1 });
    const commentData = JSON.parse(JSON.stringify(allComments));
    return commentData;
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting blogs", error },
      { status: 500 }
    );
  }
}
