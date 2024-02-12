import Link from "next/link";
import style from "../page.module.css";
import Image from "next/image";
import { Button } from "@/app/components/Button/Button";
import getBlogByTag from "@/app/lib/blogs/getBlogByTag";

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

export default async function EducationalPage({
  params,
}: {
  params: { tag: string };
}) {
  const tag: string = "Educational";

  const blogByTagData: Promise<Blog[]> = getBlogByTag({ params: { tag } })
  const blogs = await blogByTagData;


  return (
    <>
      <div className={style.container}>
        <div>
          {blogs && blogs.length > 0 ? (
            <>
              {blogs?.map(
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
                        <Button buttonName="Read More" buttonStyle="readMore" />
                      </Link>
                    </div>
                  </div>
                )
              )}
            </>
          ) : (
            <div className={style.noContent}>
              <h1>No Posts With this tag yet</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
