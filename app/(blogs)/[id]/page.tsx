import { getOne } from "@/app/api/blog/route";
import style from "./page.module.css";
import { CommentForm } from "@/app/(components)/CommentForm/CommentForm";
import { GET } from "@/app/api/comment/route";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  tag: string;
  title: string;
  description: string;
  _id: string;
  author: string;
  largeDescription: string;
  image: string;
}

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
            <div className={style.back}>
              <Link href="/">
                <button className={style.backBtn}>Back</button>
              </Link>
            </div>
            <div key={(blogById as Blog)._id} className={style.content}>
              <div className={style.contentInfo}>
                <div>
                  <Image
                    src={(blogById as Blog).image}
                    width={420}
                    height={420}
                    alt="blog image"
                  />
                </div>

                <div className={style.info}>
                  <h1>{(blogById as Blog).title}</h1>
                  <Link href={`${(blogById as Blog).tag}`}>
                    <h3>{(blogById as Blog).tag}</h3>
                  </Link>
                  <h6>Written by {(blogById as Blog).author}</h6>
                </div>
              </div>

              <div className={style.paragraph}>
                <p>{(blogById as Blog).largeDescription}</p>
              </div>
            </div>

            <div className={style.content}>
              <Link href={"/"}>
                <button className={style.allBtn}>All posts</button>
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
                  <div key={comment._id}>
                    <h3>
                      <span className={style.name}>{comment.name}</span> says:
                    </h3>
                    <p className={style.comment}>{comment.comment}</p>
                    {/* <p>{comment.createdAt}</p> */}
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
