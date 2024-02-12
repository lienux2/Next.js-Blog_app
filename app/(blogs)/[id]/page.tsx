import { getOne } from "@/app/api/blog/route";
import style from "./page.module.css";
import { CommentForm } from "@/app/(components)/CommentForm/CommentForm";
import { GET } from "@/app/api/comment/route";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/(components)/Button/Button";
import { format } from "date-fns";

type Blog = {
  tag: string;
  title: string;
  description: string;
  _id: string;
  author: string;
  largeDescription: string;
  image: string;
};

type Comments = {
  _id: string;
  blogId: string;
  name: string;
  comment: string;
  createdAt: string;
};

export default async function PostByID({ params }: { params: { id: string } }) {
  const id: string = params.id;
  const blogById = await getOne({ params: { id } });
  const comments = await GET({ params: { id } });

  return (
    <>
      <div className={style.container}>
        {blogById ? (
          <>
            <div key={blogById._id} className={style.content}>
              <div className={style.contentInfo}>
                <div>
                  <Image
                    src={blogById.image}
                    width={420}
                    height={420}
                    alt="blog image"
                  />
                </div>

                <div className={style.info}>
                  <h1>{blogById.title}</h1>
                  <Link href={`${blogById.tag}`}>
                    <h3>{blogById.tag}</h3>
                  </Link>
                  <h6>Written by {blogById.author}</h6>
                  <div>
                    <p className={style.commentTime}>
                      <span>Created at: </span>
                      {format(
                        new Date(blogById.createdAt),
                        "d MMMM, yyyy // h:mm a"
                      )}
                    </p>
                    <p className={style.commentTime}>
                      <span>Last updated: </span>
                      {format(
                        new Date(blogById.updatedAt),
                        "d MMMM, yyyy // h:mm a"
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className={style.paragraph}>
                <p>{blogById.largeDescription}</p>
              </div>
            </div>

            <div className={style.content}>
              <Link href={"/"}>
                <Button buttonName="All Posts" buttonStyle="allPosts" />
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <div>
                <p>No Data available</p>
              </div>
            </div>
          </>
        )}

        <hr />
        <CommentForm blogId={id} />
        <hr />

        <div className={style.commentSection}>
          {comments && comments.length > 0 ? (
            <>
              <div className={style.comments}>
                <div className={style.title}>
                  <h1>All comments:</h1>
                </div>
                {comments?.map((comment: Comments) => (
                  <div key={comment._id} className={style.commentInfo}>
                    <p className={style.commentTime}>
                      {format(
                        new Date(comment.createdAt),
                        "d MMMM, yyyy // h:mm a"
                      )}
                    </p>

                    <h3>
                      <span className={style.name}>{comment.name}</span> says:
                    </h3>
                    <p className={style.comment}>{comment.comment}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={style.content}>
              <h1>No Comments</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
