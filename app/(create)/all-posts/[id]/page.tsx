// "use client"

import { GETONE } from "@/app/api/blog/route";
import style from "./page.module.css";
import { Button } from "@/app/(components)/Button/Button";
import Link from "next/link";
import Image from "next/image";


type Blog = {
  _id: string;
  author: string;
  image: string;
  title: string;
  tag: string;
  description: string;
  largeDescription: string;
};

export default async function EditPage({ params }: { params: { id: string } }) {
  const id: string = params.id;
  const blogById = await GETONE({ params: { id } });

  return (
    <>
      <div className={style.navigation}>
        <Link href="/main">
          <Button buttonName="Main page" buttonStyle="navigation" />
        </Link>
        <Link href="/all-posts">
          <Button buttonName="Posts" buttonStyle="navigation" />
        </Link>
        <Link href="/all-comments">
          <Button buttonName="Comments" buttonStyle="navigation" />
        </Link>
        <Link href="/create-post">
          <Button buttonName="Create Post" buttonStyle="navigation" />
        </Link>
      </div>
      {blogById ? (
        <>
          <div className={style.container}>
            <form>
              <h3 className={style.title}>Edit Blog Post</h3>
              <div className={style.centered}>
              <label htmlFor="title">Post Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter Title"
                  className={`${style.input} ${style.inputTitle}`}
                  value={blogById.title}
                />
              </div>
              <div className={style.centered}>
                <div className={style.select}>
                <label htmlFor="tag">Post Tag:</label>
                  <select name="tag" id="tag" className={style.input}>
                    <option value="">{blogById.tag}</option>
                    <option value="health">Health</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="exotic">Exotic</option>
                    <option value="educational">Educational</option>
                  </select>
                  <label htmlFor="author">Post Author:</label>
                  <select name="author" id="author" className={style.input}>
                    <option value="">{blogById.author}</option>
                    <option value="Ruby">Ruby Johnson</option>
                    <option value="Emily">Emily Smith</option>
                    <option value="John">John Anderson</option>
                    <option value="Robert">Robert Williams</option>
                  </select>
                  <div>
                  <label htmlFor="description">Post Small Description:</label>
                    <textarea
                      name="description"
                      id="description"
                      placeholder="Small description about post..."
                      className={style.input}
                      rows={6}
                      cols={30}
                      value={blogById.description}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className={style.centered}>
                <div className={style.imagePlace}>
                  <label htmlFor="image">Post Small Image:</label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    placeholder="Link to image..."
                    value={blogById.image}
                    className={style.input}
                  />
                  <div className={style.imagePreview}>
                    <Image src={blogById.image} width={320} height={320} alt="image_preview"/>
                  </div>
                  <label htmlFor="postImage">Post Big Image:</label>
                  <input
                    type="text"
                    name="postImage"
                    id="postImage"
                    placeholder="Link to posts bigger image..."
                    value={blogById.postImage}
                    className={style.input}
                  />
                  <div className={style.imagePreview}>
                  <Image src={blogById.postImage} width={1000} height={400} alt="image_preview"/>
                  </div>
                </div>
              </div>

              <div className={style.centered}>
              <label htmlFor="largeDescription">Post Description (large):</label>
                <textarea
                  name="text"
                  id="largeDescription"
                  placeholder="Enter your text here..."
                  className={style.input}
                  rows={20}
                  cols={80}
                  value={blogById.largeDescription}
                ></textarea>
              </div>

              <div className={style.centered}>
                <Button buttonName="Edit Post" buttonStyle="edit" />
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div>
            <div>
              <p>No Data available</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
