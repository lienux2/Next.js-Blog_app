import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    blogId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export interface SomeComment extends Document {
  _id?: string;
  name: string;
  comment: string;
  blogId: string;
  createdAt: string;
  updatedAt: string;
}

let CommentModel: mongoose.Model<SomeComment>;

try {
  CommentModel = mongoose.model<SomeComment>("Comment");
} catch {
  CommentModel = mongoose.model<SomeComment>("Comment", commentSchema);
}

export default CommentModel;
