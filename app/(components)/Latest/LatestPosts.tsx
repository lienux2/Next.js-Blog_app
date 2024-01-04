import { getLatest } from "@/app/api/blog/route";
import style from "./LatestPosts.module.css";
import Link from "next/link";
import Image from "next/image";

export const LatestPosts = async () => {
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
                  <div>
                    <h3>{blog.title}</h3>
                    <br />
                    <Link href={`/${blog._id}`}>
                      <button className={style.latestBtn}>See Post</button>
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
