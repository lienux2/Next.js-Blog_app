import Image from "next/image";
import style from "./page.module.css";
import { GET } from "@/app/api/blog/route";
import { BlogDeleteButton } from "@/app/(components)/BlogDeleteButton/BlogDeleteButton";
import Link from "next/link";

type Blogs = {
  title: string;
  author: string;
  _id: string;
  image: string;
};

export default async function AllPosts({ params }: { params: { id: string } }) {
  const allBlogs = await GET();
  const id = params.id;
  return (
    <>
      <h1 className={style.heading}>Edit or Delete Posts</h1>

      <div className={style.container}>
        {allBlogs?.map((blog: Blogs) => (
          <div key={blog._id} className={style.content}>
            <div className={style.card}>
              <div className={style.cardContent}>
                <Image
                  src={blog.image}
                  width={400}
                  height={400}
                  alt="post photo"
                />
                <h1 className={style.title}>{blog.title}</h1>
                <p className={style.author}>{blog.author}</p>
              </div>
              <div className={style.btnWrapper}>
                <Link href="/edit">
                  <button className={style.editBtn}>Edit</button>
                </Link>
                <BlogDeleteButton deleteId={id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
