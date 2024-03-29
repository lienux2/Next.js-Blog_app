import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "../globals.css";
import { Navbar } from "../components/Navbar/Navbar";

const exo2 = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog app",
  description: "Generated by create next app",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={exo2.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
