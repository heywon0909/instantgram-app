import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full max-w-screen-xl overflow-auto mx-auto ${roboto.className}`}
      >
        <header className="sticky top-0 bg-white z-10 border-b">
          <Navbar />
        </header>
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
