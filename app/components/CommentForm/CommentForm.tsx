"use client";
import { useState } from "react";
import style from "./CommentForm.module.css";
import { useRouter } from "next/navigation";
import { Button } from "../Button/Button";

export const CommentForm = ({ blogId }: { blogId: string }) => {
  const initialFormData = {
    blogId: blogId,
    name: "",
    comment: "",
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
    const res = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      throw new Error("Failed to add comment");
    }

    router.refresh();
    setFormData(initialFormData);
  };

  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div className={style.form}>
            <h1>Add comment</h1>
            <div className={style.content}>
              <div className={style.gap}>
                <label className={style.label} htmlFor="name">
                  Name:
                </label>
                <br />
                <input
                  className={style.input}
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={style.gap}>
                <label className={style.label} htmlFor="comment">
                  Your comment:
                </label>
                <br />
                <textarea
                  className={style.textarea}
                  name="comment"
                  id="comment"
                  placeholder="Your comment here..."
                  value={formData.comment}
                  onChange={handleChange}
                  rows={10}
                  cols={45}
                ></textarea>
              </div>
              <div className={style.btnWrapper}>
                <Button buttonName="Add" buttonStyle="add"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
