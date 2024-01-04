import Link from "next/link";
import style from "./Nav.module.css";

export const Nav = () => {
  return (
    <>
      <nav className={style.navigation}>
        <Link href="/">
          <h3 className={style.hover}>Home</h3>
        </Link>
        <Link href="/entertainment">
          <h3 className={style.hover}>Entertainment</h3>
        </Link>
        <Link href="/exotic">
          <h3 className={style.hover}>Exotic</h3>
        </Link>
        <Link href="/health">
          <h3 className={style.hover}>Health</h3>
        </Link>
        <Link href="/educational">
          <h3 className={style.hover}>Educational</h3>
        </Link>
        <Link href="/about">
          <h3 className={style.hover}>About</h3>
        </Link>
      </nav>
    </>
  );
};
