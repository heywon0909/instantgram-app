"use client";

import useSWR from "swr";
import { SimplePost } from "../model/post";
import { GridLoader } from "react-spinners";
import PostListCard from "./PostListCard";

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR<SimplePost[]>("/api/post");

  return (
    <section>
      {loading && (
        <div>
          <GridLoader color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts &&
            posts.map((post) => <PostListCard post={post} key={post.id} />)}
        </ul>
      )}
    </section>
  );
}
