import style from "./page.module.css";
import { Button } from "@/app/components/Button/Button";
import getAllComments from "@/app/lib/comments/getAllComments";
import Link from "next/link";

type Comment = {
  _id: string;
  blogId: string;
  name: string;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
};

export default async function AllCommentsPage() {
  const allCommentsData: Promise<Comment[]> = getAllComments();
  const comments = await allCommentsData;

  return (
    <>
      <div className={style.navigation}>
        <Link href="/main">
          <Button buttonName="Main page" buttonStyle="navigation" />
        </Link>
        <Link href="/all-posts">
          <Button buttonName="Posts" buttonStyle="navigation" />
        </Link>
        <Link href="/create-post">
          <Button buttonName="Create Post" buttonStyle="navigation" />
        </Link>
      </div>
      <h1 className={style.title}>All comments:</h1>

      <div className={style.container}>
        {comments.length > 0 ? (
          <>
            {comments?.map((comment) => (
              <div key={comment._id} className={style.content}>
                <div className={style.comment}>
                  <h1>From {comment.name}</h1>
                  <p>{comment.comment}</p>
                </div>
                {/* <DeleteComment id={comment._id}/> */}
                <div>
                  <Button buttonName="X" buttonStyle="delete" />
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className={style.content}>
            <h1>No Comments At This Time.</h1>
          </div>
        )}
      </div>
    </>
  );
}
