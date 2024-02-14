"use client";
import Link from "next/link";
import style from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/entertainment", label: "Entertainment" },
    { href: "/exotic", label: "Exotic" },
    { href: "/health", label: "Health" },
    { href: "/educational", label: "Educational" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <nav className={style.navigation}>
        <div className={style.navigationLarge}>
          {menuLinks.map((link) => (
            <h3 key={link.href} className={style.navigationOption}>
              <Link href={link.href}>{link.label}</Link>
            </h3>
          ))}
        </div>

        <div className={style.navigationMobile}>
          <div className={style.menuIcon}>
            <FaBars onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
          <br />
          <ul
            className={`${style.menuLinks} ${
              isMenuOpen ? style.showMenu : style.hideMenu
            }`}
          >
            {menuLinks.map((link) => (
              <h3 key={link.href} className={style.navigationOption}>
                <Link className={style.navLink} href={link.href}>
                  {link.label}
                </Link>
              </h3>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
