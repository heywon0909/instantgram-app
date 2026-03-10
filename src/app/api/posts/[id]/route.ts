import { NextRequest, NextResponse } from "next/server";
import { getPost } from "@/src/service/sanity/post";
import { withSessionUser } from "@/src/util/session";

export async function GET(
  request: NextRequest,
  context: RouteContext<"/api/posts/[id]">,
) {
  const { id } = await context.params;
  withSessionUser(async () => {
    return getPost(id).then((data) => NextResponse.json(data));
  });
}
