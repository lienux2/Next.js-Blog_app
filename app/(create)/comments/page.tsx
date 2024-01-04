import { getAllComments } from "@/app/api/comment/route";
import style from "./page.module.css";
import { CommentButton } from "@/app/(components)/CommentsButton/CommentsButton";

export default async function Comments() {
  const comments = await getAllComments();
  return (
    <>
      <h1 className={style.title}>All comments:</h1>

      <div className={style.container}>
        {comments && comments.length > 0 ? (
          <>
            {comments?.map(
              (comment: { _id: string; name: string; comment: string }) => (
                <div key={comment._id} className={style.content}>
                  <div className={style.comment}>
                    <h1>From {comment.name}</h1>
                    <p>{comment.comment}</p>
                  </div>
                  <div>
                    <CommentButton commentId={comment._id} />
                  </div>
                </div>
              )
            )}
            {console.log("comments:", comments)}
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
