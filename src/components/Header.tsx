'use client';
import Link from 'next/link';
import { BsSearchHeart } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import { RiHome4Line } from 'react-icons/ri';

export default function Header() {
  return (
    <header className="p-2 flex items-center justify-between">
      <Link href="/">
        <h1 className="text-2xl font-bold">Instantgram</h1>
      </Link>
      <nav className="mr-4">
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/me">
              <RiHome4Line size={20} />
            </Link>
          </li>
          <li>
            <Link href="/search">
              <BsSearchHeart size={20} />
            </Link>
          </li>
          <li>
            <Link href="/plus">
              <FaPlus size={20} />
            </Link>
          </li>
          <li>
            <Link href="/login">
              <button className="p-2 border rounded-md" onClick={() => signIn()}>
                Sign in
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
