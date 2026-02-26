import {
  getLikedPostOf,
  getPostOf,
  getSavedPostOf,
} from "@/src/service/sanity/post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  context: RouteContext<"/api/users/[...slug]">,
) {
  const { slug } = await context.params;
  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const [username, query] = slug;
  let request = getPostOf;
  if (query === "saved") {
    request = getSavedPostOf;
  } else if (query === "liked") {
    request = getLikedPostOf;
  }

  return request(username).then((data) => NextResponse.json(data));
}
