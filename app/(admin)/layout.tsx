import { Exo_2 } from "next/font/google";
import "../globals.css";

const exo2 = Exo_2({ subsets: ["latin"] });

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={exo2.className}>{children}</body>
    </html>
  );
}
