import style from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/Button/Button";
import { format } from "date-fns";
import getBlog from "@/app/lib/blogs/getBlog";
import getBlogComments from "@/app/lib/comments/getBlogComments";
import { CommentForm } from "@/app/components/CommentForm/CommentForm";

type Blog = {
  _id: string;
  title: string;
  tag: string;
  author: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  largeDescription: string;
  image: string;
  postImage: string;
};

type Comment = {
  _id: string;
  blogId: string;
  name: string;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
};

export default async function BlogPage({ params }: { params: { id: string } }) {
  const id: string = params.id;

  const blogData: Promise<Blog> = getBlog({ params: { id } });
  const blog = await blogData;

  const commentsData: Promise<Comment[]> = getBlogComments({ params: { id } });
  const comments: Comment[] = await commentsData;

  return (
    <>
      <div className={style.container}>
        {blog ? (
          <>
            <div key={blog._id} className={style.content}>
              <div className={style.contentInfo}>
                <div>
                  <Image
                    src={blog.image}
                    className={style.image}
                    width={600}
                    height={600}
                    alt="blog image"
                  />
                </div>

                <div className={style.info}>
                  <h1>{blog.title}</h1>
                  <Link href={`${blog.tag}`}>
                    <h3>{blog.tag}</h3>
                  </Link>
                  <h6>Written by {blog.author}</h6>
                  <div>
                    <p className={style.commentTime}>
                      <span>Created at: </span>
                      {format(
                        new Date(blog.createdAt),
                        "d MMMM, yyyy // h:mm a"
                      )}
                    </p>
                    <p className={style.commentTime}>
                      <span>Last updated: </span>
                      {format(
                        new Date(blog.updatedAt),
                        "d MMMM, yyyy // h:mm a"
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className={style.paragraph}>
                <p>{blog.largeDescription}</p>
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
                {comments?.map((comment) => (
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
