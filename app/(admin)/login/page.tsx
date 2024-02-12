"use client";
import { Button } from "@/app/components/Button/Button";
import style from "./page.module.css";

export default function LoginPage() {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <form className={style.form}>
            <div>
              <label className={style.label} htmlFor="username">
                Username:
              </label>
              <br />
              <input
                className={style.input}
                type="text"
                placeholder="Username..."
              />
            </div>
            <div>
              <label className={style.label} htmlFor="Password">
                Password:
              </label>
              <br />
              <input
                className={style.input}
                type="password"
                placeholder="Password..."
              />
            </div>
            <div className={style.btnWrapper}>
              <Button buttonName="Login" buttonStyle="add" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
