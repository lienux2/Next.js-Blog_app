import Image from "next/image";
import style from "./AllBlogs.module.css";
import Link from "next/link";
import { GET } from "@/app/api/blog/route";
import { Button } from "../Button/Button";

export const AllBlogs = async () => {
  const allBlogs = await GET();

  return (
    <>
      <div className={style.container}>
        <div>
          {allBlogs?.map(
            (blog: {
              tag: string;
              title: string;
              description: string;
              _id: string;
              image: string;
            }) => (
              <div key={blog._id} className={style.content}>
                <div>
                  <Image
                    src={blog.image}
                    className={style.image}
                    width={420}
                    height={420}
                    alt="post image"
                  />
                </div>
                <div className={style.info}>
                  <h5 className={style.tag}>{blog.tag}</h5>
                  <h1>{blog.title}</h1>
                  <p>{blog.description}</p>
                  <Link href={`/${blog._id}`}>
                    <Button buttonName="Read more" buttonStyle="readMore" />
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
