import Link from "next/link";
import style from "./page.module.css";

export default async function MainPage() {
  return (
    <>
      <div className={style.container}>
        <Link href="/all-posts" className={style.link}>
          All posts
        </Link>
        <Link href="/all-comments" className={style.link}>
          Comments
        </Link>
        <Link href="/create-post" className={style.link}>
          Create new Blog Post
        </Link>
      </div>
    </>
  );
}
