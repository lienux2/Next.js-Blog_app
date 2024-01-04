"use client";
import { DELETE } from "@/app/api/comment/route";
import style from "./CommentsButton.module.css";
import { useRouter } from "next/navigation";

export const CommentButton = ({ commentId }) => {
  const router = useRouter();
  console.log("commentIdthis", commentId);
  const handleDelete = async () => {
    console.log("commentIdthat", commentId);
    try {
      await DELETE(commentId);
      router.refresh();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <>
      <button className={style.btnDelete} onClick={handleDelete}>
        X
      </button>
    </>
  );
};
