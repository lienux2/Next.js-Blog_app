import { getLatest } from "@/app/api/blog/route";
import style from "./LatestBlogs.module.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button/Button";

export const LatestBlogs = async () => {
  const latestPosts = await getLatest();
  return (
    <>
      <div>
        <h1>Latest Posts</h1>
        <div>
          {latestPosts?.map(
            (blog: { title: string; _id: string; image: string }) => (
              <div key={blog._id} className={style.container}>
                <div className={style.content}>
                  <div>
                    <Image
                      src={blog.image}
                      width={100}
                      height={100}
                      alt="post image"
                    />
                  </div>
                  <div className={style.postInfo}>
                    <h3>{blog.title}</h3>
                    <br />
                    <Link href={`/${blog._id}`}>
                      <Button buttonName="See Post" buttonStyle="seePost" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
