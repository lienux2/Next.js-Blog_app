"use client";
import style from "./page.module.css";
import { SignIn } from "@/app/(components)/Signin/Signin";

export default function Login() {
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
            <div>
              <SignIn />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
