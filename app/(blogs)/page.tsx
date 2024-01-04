import Link from "next/link";
import { LatestPosts } from "../(components)/Latest/LatestPosts";
import style from "./page.module.css";
import { GET } from "../api/blog/route";
import Image from "next/image";

export default async function Home() {
  const allBlogs = await GET();
  console.log("allBlogs:", allBlogs);
  console.log("Type of allBlogs:", typeof allBlogs);
  return (
    <>
      <div className={style.welcomeMessage}>
        <h1 className={style.title}>Welcome to Paw in Hand!</h1>
        <p className={style.message}>
          Just as people find connection hand in hand, we believe in forging
          bonds with our pets, <br /> going
          <span className={style.brandName}>Paw in Hand</span> on the journey of
          companionship and joy.
        </p>
      </div>
      <div className={style.container}>
        <h1></h1>
        <div>
          <Image
            src="https://picsum.photos/id/40/600/500"
            width={600}
            height={500}
            alt="main_photo"
            priority
          />
        </div>
        <LatestPosts />
      </div>

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
                    width={420}
                    height={420}
                    alt="post image"
                  />
                </div>
                <div className={style.info}>
                  <h5 className={style.tag}>{blog.tag}</h5>
                  <h1>
                    {blog.title} <span className={style.commentCount}></span>
                  </h1>
                  <p>{blog.description}</p>
                  <Link href={`/${blog._id}`}>
                    <button className={style.readMoreBtn}>Read more</button>
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
