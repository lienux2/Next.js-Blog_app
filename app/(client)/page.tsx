import Image from "next/image";
import style from "./page.module.css";
import image from "../../public/40-600x500.jpg";
import getAllBlogs from "../lib/blogs/getAllBlogs";
import { Greeting } from "../components/Greeting/Greeting";
import getLatestBlogs from "@/app/lib/blogs/getLatestBlogs";
import Link from "next/link";
import { Button } from "../components/Button/Button";

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

export default async function HomePage() {
  const blogsData: Promise<Blog[]> = getAllBlogs();

  const blogs = await blogsData;

  const latestPostsData: Promise<Blog[]> = await getLatestBlogs();

  const latestPosts = await latestPostsData;

  return (
    <>
      <Greeting />

      <div className={style.container}>
        <div>
          <Image
            src={image}
            className={style.image}
            alt="main_photo"
            priority
          />
        </div>

        <div>
          <h1 className={style.title}>Latest Posts</h1>
          <div>
            {latestPosts?.map((blog) => (
              <div key={blog._id} className={style.latestContainer}>
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
            ))}
          </div>
        </div>
      </div>

      <div className={style.container}>
        <div>
          {blogs?.map(
            (blog: {
              tag: string;
              title: string;
              description: string;
              _id: string;
              image: string;
            }) => (
              <div key={blog._id} className={style.blogsContent}>
                <div>
                  <Image
                    src={blog.image}
                    className={style.blogsImage}
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
}
