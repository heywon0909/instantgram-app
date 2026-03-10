"use client";

import { PropagateLoader } from "react-spinners";
import Link from "next/link";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/Scrollable";
import useMe from "../hooks/me";

export default function FollowingBar() {
  const { user, isLoading } = useMe();
  const users = user?.following;

  return (
    <section className="w-full flex justify-center items-center padding-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto relative z-0">
      {isLoading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              href={`/user/${username}`}
              className="flex flex-col items-center w-20"
            >
              <Avatar image={image} highlight />
              <p className="text-sm text-ellipsis text-center overflow-hidden w-full">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
