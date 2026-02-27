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

export const metadata: Metadata = {
  title: {
    default: "Instantgram",
    template: "Instantgram | %s",
  },
  description: "Instantgram Photos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={`w-full bg-neutral-50 overflow-auto`}>
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b">
            <div className="max-w-screen-xl mx-auto">
              <Navbar />
            </div>
          </header>
          <main className="w-full flex justify-center bg-neutral-50 max-w-screen-xl mx-auto">
            <SWRConfigConext>{children}</SWRConfigConext>
          </main>
        </AuthContext>
        <div id="portal" />
      </body>
    </html>
  );
}
