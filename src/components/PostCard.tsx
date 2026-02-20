import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { Post } from "../service/post";
import { urlFor } from "../service/sanity/image";

type Props = Post;

export default function PostCard({ author, likes, photo, comments }: Props) {
  return (
    <article className="shadow-md border border-gray-100 rounded-md">
      <section className="flex items-center p-2 gap-2">
        <button className="rounded-full bg-gray-200 w-14 h-14">
          <Image
            src={author.image ?? ""}
            alt="Instagram Logo"
            className="rounded-full"
            width={40}
            height={30}
          />
        </button>
        <h1 className="font-bold">{author.name}</h1>
      </section>
      <Image
        src={urlFor(photo).width(800).height(600).url()}
        alt="Post Image"
        width={500}
        height={500}
        className="w-full "
      />
      <section className="mt-2 p-2 border-b-2 border-gray-300">
        <input type="text" disabled />
        <button>
          <CiHeart size={20} />
        </button>
        <p> {likes?.length ?? 0} like</p>
        <span className="w-full flex gap-2">
          <h3 className="font-bold">dream.coder.ellie</h3>
          <p>amazing</p>
        </span>
        <time className="text-gray-500">23 hours ago</time>
      </section>
      <section className="p-2 flex items-center">
        <BsEmojiSmile />
        <input
          type="text"
          placeholder="Add a comment..."
          className="outline-none ml-2 w-full"
        />
        <button className="text-blue-500">Post</button>
      </section>
    </article>
  );
}
