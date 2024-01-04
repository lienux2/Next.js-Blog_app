"use client";
import { useState } from "react";
import style from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Create() {
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

    router.refresh();
    router.push("/main");
  };

  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <h3 className={style.title}>Create new Blog Post</h3>
          <div className={style.centered}>
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
              <select
                name="tag"
                id="tag"
                onChange={handleChange}
                value={formData.tag}
                className={style.input}
              >
                <option value="tag">Select tag</option>
                <option value="health">Health</option>
                <option value="entertainment">Entertainment</option>
                <option value="exotic">Exotic</option>
                <option value="educational">Educational</option>
              </select>
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
              <div>
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
            <div className={style.imagePlace}>
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Link to image..."
                onChange={handleChange}
                value={formData.image}
                className={style.input}
              />
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
            <button type="submit" formMethod="POST">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
