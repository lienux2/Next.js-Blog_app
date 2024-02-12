import { NextResponse } from "next/server";
import CommentModel from "../models/Comment";
import { connectMongoDB } from "../mongoDB/connect";

export default async function getBlogComments({
  params,
}: {
  params: { id: string };
}) {
  try {
    await connectMongoDB();
    const id = params.id;
    const comments = await CommentModel.find({ blogId: id }).sort({
      createdAt: -1,
    });
    const commentData = JSON.parse(JSON.stringify(comments));
    return commentData;
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting comments", error },
      { status: 500 }
    );
  }
}
