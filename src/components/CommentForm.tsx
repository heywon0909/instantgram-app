"use client";
import { useState } from "react";
import SmileIcon from "./ui/icons/SmileIcon";

type Props = {
  onPostComment: (comment: string) => void;
};
export default function CommentForm({ onPostComment }: Props) {
  const [comment, setComment] = useState("");
  const buttonDisabled = comment.length === 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPostComment(comment);
    setComment("");
  };

  return (
    <form
      className="flex items-center px-3 border-t border-neutral-300"
      onSubmit={handleSubmit}
    >
      <SmileIcon />
      <input
        type="text"
        value={comment}
        placeholder="Add a comment..."
        className="w-full ml-2 border-none outline-none p-3"
        required
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className={`font-bold text-sky-500 ml-2 ${buttonDisabled ? "text-sky-300" : "text-sky-500"}`}
        disabled={buttonDisabled}
      >
        comment
      </button>
    </form>
  );
}
