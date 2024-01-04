import Link from "next/link";
import style from "./page.module.css";
import Image from "next/image";
import { getByTag } from "@/app/api/blog/route";

export default async function Exotic({ params }: { params: { tag: string } }) {
  const tag: string = "Exotic";
  const blogByTag = await getByTag({ params: { tag } });
  return (
    <>
      <div className={style.container}>
        <div>
          {blogByTag && blogByTag.length > 0 ? (
            <>
              {blogByTag?.map(
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
                      <h1>{blog.title}</h1>
                      <p>{blog.description}</p>
                      <Link href={`/${blog._id}`}>
                        <button className={style.readMoreBtn}>Read more</button>
                      </Link>
                    </div>
                  </div>
                )
              )}
            </>
          ) : (
            <div className={style.content}>
              <h1>No Posts With this tag yet</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
