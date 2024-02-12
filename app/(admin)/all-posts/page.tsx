import Image from "next/image";
import style from "./page.module.css";
import Link from "next/link";
import { Button } from "@/app/components/Button/Button";
import getAllBlogs from "@/app/lib/blogs/getAllBlogs";

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

export default async function AllPostsPage() {

  const allBlogsData: Promise<Blog[]> = getAllBlogs();
  const allBlogs = await allBlogsData;

  return (
    <>
      <div className={style.navigation}>
        <Link href="/main">
          <Button buttonName="Main page" buttonStyle="navigation" />
        </Link>
        <Link href="/all-comments">
          <Button buttonName="Comments" buttonStyle="navigation" />
        </Link>
        <Link href="/create-post">
          <Button buttonName="Create Post" buttonStyle="navigation" />
        </Link>
      </div>
      <h1 className={style.heading}>Edit or Delete Posts</h1>

      <div className={style.container}>
        {allBlogs.map((blog) => (
          <div key={blog._id} className={style.content}>
            <div className={style.card}>
              <div className={style.cardContent}>
                <Image
                  src={blog.image}
                  className={style.image}
                  width={400}
                  height={400}
                  alt="post photo"
                />
                <h1 className={style.title}>{blog.title}</h1>
                <p className={style.author}>{blog.author}</p>
              </div>
              <div className={style.btnWrapper}>
                <Link href={`/all-posts/${blog._id}`}>
                  <Button buttonName="Edit" buttonStyle="edit" />
                </Link>
                <Button buttonName="Delete" buttonStyle="delete" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
