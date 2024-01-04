import Link from "next/link";
import style from "./page.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Main() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <div className={style.container}>
        <Link href="/all" className={style.link}>
          All posts
        </Link>
        <Link href="/comments" className={style.link}>
          Comments
        </Link>
        <Link href="/create" className={style.link}>
          Create new Blog Post
        </Link>
      </div>
    </>
  );
}
