import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import AuthContext from "../context/AuthContext";
import SWRConfigConext from "../context/SWRConfigContext";

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
        className={`w-full max-w-screen-xl overflow-auto mx-auto ${roboto.className} flex flex-col`}
      >
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b">
            <Navbar />
          </header>
          <main className="w-full flex justify-center bg-neutral-50 grow">
            <SWRConfigConext>{children}</SWRConfigConext>
          </main>
        </AuthContext>
      </body>
    </html>
  );
}
