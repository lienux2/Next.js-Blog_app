import CommentModel from "@/app/lib/models/Comment";
import { connectMongoDB } from "@/app/lib/mongoDB/connect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
      const body = await req.json();
      await connectMongoDB();
      const commentData = body.formData;
      await CommentModel.create(commentData);
  
      return NextResponse.json({ message: "Comment created" }, { status: 201 });
    } catch (error) {
      return NextResponse.json(
        { message: "Error creating blog", error },
        { status: 500 }
      );
    }
  }