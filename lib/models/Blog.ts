import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
    },
    tag: {
      type: String,
    },
    author: {
      type: String,
    },
    largeDescription: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    postImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export interface SomeBlog extends Document {
  _id?: string;
  title: string;
  tag: string;
  author: string;
  image: string;
  largeDescription: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  postImage: string;
}

let BlogModel: mongoose.Model<SomeBlog>;

try {
  BlogModel = mongoose.model<SomeBlog>("Blog");
} catch {
  BlogModel = mongoose.model<SomeBlog>("Blog", blogSchema);
}

export default BlogModel;
