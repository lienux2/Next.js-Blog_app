import Image from "next/image";

import style from "./page.module.css";
import image from "../../public/40-600x500.jpg";
import { Greeting } from "../(components)/Greeting/Greeting";
import { LatestBlogs } from "../(components)/LatestBlogs/LatestBlogs";
import { AllBlogs } from "../(components)/AllBlogs/AllBlogs";

export default async function Home() {

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
        <LatestBlogs />
      </div>

      <AllBlogs />
    </>
  );
}
