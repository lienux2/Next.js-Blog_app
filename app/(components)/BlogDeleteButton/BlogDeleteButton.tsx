"use client";

// import { DELETE } from "@/app/api/blog/route";
import style from "./BlogDeleteButton.module.css";
// import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  blogId: string;
};

export const BlogDeleteButton = ({ deleteId }: { deleteId: string }) => {
  //     console.log(blogId)
  //     const router = useRouter();
  // const {id} = blogId;
  // console.log(id)

  const handleDelete = async (id: string) => {
    alert("Tried deleting post but it has not been implemented yet.");
    // try {
    //     await DELETE({ _id: deleteId});
    // } catch (error) {
    //     console.error('Error deleting comment:', error);
    // }
  };

  return (
    <>
      <button className={style.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
