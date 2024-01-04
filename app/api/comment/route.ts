import CommentModel from "@/lib/models/Comment";
import { connectMongoDB } from "@/lib/mongo/connect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectMongoDB();
    const commentData = body.formData;
    await CommentModel.create(commentData);

    return NextResponse.json({ message: "Blog created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating blog", error },
      { status: 500 }
    );
  }
}

export async function GET({ params }: { params: { id: string } }) {
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

export async function getAllComments() {
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

export async function DELETE(id: string) {
  try {
    await connectMongoDB();
    const deletedComment = await CommentModel.findByIdAndDelete(id);

    if (!deletedComment) {
      console.log("Comment not found for deletion");
      return NextResponse.json(
        { message: "Comment not found" },
        { status: 404 }
      );
    }

    console.log("Comment deleted successfully");
    return deletedComment;
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting comment", error },
      { status: 500 }
    );
  }
}

// export async function GETCOUNT({ params }: { params: { id: string } }) {
//     try {
//         await connectMongoDB();
//         const id = params.id
//         const comments = await CommentModel.find({blogId: id}).countDocuments();
//         return NextResponse.json({ comments }, { status: 500 });

//     } catch (error) {
//         return NextResponse.json({ message: "Error getting blogs", error }, { status: 500 });
//     }
// }
