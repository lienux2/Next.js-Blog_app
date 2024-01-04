import { connectMongoDB } from "@(lib)/mongo/connect";
import BlogModel from "@/lib/models/Blog";
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

export async function GET() {
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

export async function getOne({ params }: { params: { id: string } }) {
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

export async function getLatest() {
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

export async function getByTag({ params }: { params: { tag: string } }) {
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

export async function DELETE({ params }: { params: { id: string } }) {
  try {
    await connectMongoDB();
    await BlogModel.findByIdAndDelete({ params: params.id });
    return NextResponse.json({ message: "Post deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting blogs", error },
      { status: 500 }
    );
  }
}

// export async function PUT() {
//     try {
//         const blogs = await BlogModel.find();

//         return NextResponse.json({ blogs }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ message: "Error", error }, { status: 500 });
//     }
// }
