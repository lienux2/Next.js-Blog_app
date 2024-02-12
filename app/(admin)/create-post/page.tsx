"use client";

import { useState } from "react";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/Button/Button";
import Link from "next/link";

export default function CreatePostPage() {
  const initialFormData = {
    title: "",
    tag: "",
    author: "",
    largeDescription: "",
    description: "",
    image: "",
    postImage: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const router = useRouter();

  const handleChange = (e: { target: { value: string; name: string } }) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      throw new Error("Failed to create blog");
    }

    router.push("/all-posts");
    router.prefetch("/all-posts");
  };

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
      </div>

      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <h3 className={style.title}>Create new Blog Post</h3>
          <div className={style.centered}>
            <label htmlFor="title">Post Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter Title"
              value={formData.title}
              onChange={handleChange}
              className={`${style.input} ${style.inputTitle}`}
            />
          </div>
          <div className={style.centered}>
            <div className={style.select}>
              <label htmlFor="tag">Post Tag:</label>
              <select
                name="tag"
                id="tag"
                onChange={handleChange}
                value={formData.tag}
                className={style.input}
              >
                <option value="tag">Select tag</option>
                <option value="Health">Health</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Exotic">Exotic</option>
                <option value="Educational">Educational</option>
              </select>
              <label htmlFor="author">Post Author:</label>
              <select
                name="author"
                id="author"
                onChange={handleChange}
                value={formData.author}
                className={style.input}
              >
                <option value="author">Select author</option>
                <option value="Ruby Johnson">Ruby Johnson</option>
                <option value="Emily Smith">Emily Smith</option>
                <option value="John Anderson">John Anderson</option>
                <option value="Robert Williams">Robert Williams</option>
              </select>
              <div className={style.centered}>
                <label htmlFor="description">Post Description (small):</label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Small description about post..."
                  onChange={handleChange}
                  value={formData.description}
                  className={style.input}
                  rows={6}
                  cols={30}
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
                onChange={handleChange}
                value={formData.image}
                className={style.input}
              />
              <label htmlFor="postImage">Post Big Image:</label>
              <input
                type="text"
                name="postImage"
                id="postImage"
                placeholder="Link to posts bigger image..."
                onChange={handleChange}
                value={formData.postImage}
                className={style.input}
              />
            </div>
          </div>

          <div className={style.centered}>
            <label htmlFor="largeDescription">Post Description (large):</label>
            <textarea
              name="largeDescription"
              id="largeDescription"
              placeholder="Enter your text here..."
              onChange={handleChange}
              value={formData.largeDescription}
              className={style.input}
              rows={20}
              cols={80}
            ></textarea>
          </div>

          <div className={style.centered}>
            <Button buttonName="Add Post" buttonStyle="add" />
          </div>
        </form>
      </div>
    </>
  );
}
