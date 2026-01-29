import Image from 'next/image';
import { CiHeart } from 'react-icons/ci';
import { BsEmojiSmile } from 'react-icons/bs';

export default function PostCard() {
  return (
    <article className="shadow-md border border-gray-100 rounded-md">
      <section className="flex items-center p-2 gap-2">
        <button className="rounded-full bg-gray-200 w-14 h-14">
          {/* <Image src="/people.png" alt="Instagram Logo" className="rounded-full" width={40} height={30} /> */}
        </button>
        <h1 className="font-bold">dream.coder.ellie</h1>
      </section>
      <Image src="/people.png" alt="Post Image" width={500} height={500} className="w-full max-h-[790px]" />
      <section className="mt-2 p-2 border-b-2 border-gray-300">
        <button>
          <CiHeart size={20} />
        </button>
        <p>100 like</p>
        <span className="w-full flex gap-2">
          <h3 className="font-bold">dream.coder.ellie</h3>
          <p>amazing</p>
        </span>
        <time className="text-gray-500">23 hours ago</time>
      </section>
      <section className="p-2 flex items-center">
        <BsEmojiSmile />
        <input type="text" placeholder="Add a comment..." className="outline-none ml-2 w-full" />
        <button className="text-blue-500">Post</button>
      </section>
    </article>
  );
}
