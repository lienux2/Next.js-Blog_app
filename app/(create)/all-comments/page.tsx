"use client"

import { DELETE, getAllComments } from "@/app/api/comment/route";
import style from "./page.module.css";
import { Button } from "@/app/(components)/Button/Button";
import Link from "next/link";
import { AllComments } from "@/app/(components)/AllComments/AllComments";

export default async function Comments() {

  return (
    <>
      <div className={style.navigation}>
        <Link href="/main">
          <Button buttonName="Main page" buttonStyle="navigation" />
        </Link>
        <Link href="/all-posts">
          <Button buttonName="Posts" buttonStyle="navigation" />
        </Link>
        <Link href="/create-post">
          <Button buttonName="Create Post" buttonStyle="navigation" />
        </Link>
      </div>
      <h1 className={style.title}>All comments:</h1>

      <div className={style.container}>
        <AllComments />
      </div>
    </>
  );
}
