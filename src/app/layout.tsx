import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${roboto.className}`}>
        <Header />
        <main className="grow mx-auto w-full md:w-1/3">{children}</main>
      </body>
    </html>
  );
}
