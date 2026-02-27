"use client";

import Image from "next/image";
import { SimplePost } from "../model/post";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";
import PostUserAvatar from "./PostUserAvatar";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const { userImage, username, image } = post;
  return (
    <>
      <article className="rounded-lg shadow-md border border-gray-200">
        <PostUserAvatar image={userImage} username={username} />
        <Image
          src={image}
          className="w-full object-cover aspect-square"
          alt={`photo by ${username}`}
          width={500}
          height={500}
          loading={priority ? "eager" : "lazy"}
          onClick={() => setOpenModal(true)}
        />
        <ActionBar post={post} />
        <CommentForm />
        {openModal && (
          <ModalPortal>
            <PostModal onClose={() => setOpenModal(false)}>
              <PostDetail post={post} />
            </PostModal>
          </ModalPortal>
        )}
      </article>
    </>
  );
}
