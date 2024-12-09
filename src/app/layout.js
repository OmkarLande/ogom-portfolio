import { Raleway } from "next/font/google";
import "./globals.css";
import { Menu } from "@/components/Menu";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Omkar Lande",
  description: "Omkar Lande Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-bg-color">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={raleway.className}>
        {/* <NavBar /> */}
        <Menu />
        {children}
      </body>
    </html>
  );
}
