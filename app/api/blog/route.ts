import BlogModel from "@/app/lib/models/Blog";
import { connectMongoDB } from "@/app/lib/mongoDB/connect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectMongoDB();
    const blogData = body.formData;
    await BlogModel.create(blogData);

    return NextResponse.json({ message: "Blog created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating blog", error },
      { status: 500 }
    );
  }
}
