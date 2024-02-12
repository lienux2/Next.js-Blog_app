import Link from "next/link";
import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <nav className={style.navigation}>
        <Link href="/">
          <h3 className={style.navigationOption}>Home</h3>
        </Link>
        <Link href="/entertainment">
          <h3 className={style.navigationOption}>Entertainment</h3>
        </Link>
        <Link href="/exotic">
          <h3 className={style.navigationOption}>Exotic</h3>
        </Link>
        <Link href="/health">
          <h3 className={style.navigationOption}>Health</h3>
        </Link>
        <Link href="/educational">
          <h3 className={style.navigationOption}>Educational</h3>
        </Link>
        <Link href="/about">
          <h3 className={style.navigationOption}>About</h3>
        </Link>
      </nav>
    </>
  );
};
