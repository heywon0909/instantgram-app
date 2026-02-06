import { defineQuery, groq } from "next-sanity";
import { client } from "./sanity";
import { authOptions } from "@/src/app/api/auth/[...nextauth]/route";

export type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export async function addUser({ id, username, email, name, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getFollowing(username: string) {
  const follwingQuery = defineQuery(
    groq`*[_type == 'user' && username == '${username}']{ following[] -> }`,
  );
  const { following } = (await client.fetch(follwingQuery))?.[0];
  return following;
}
