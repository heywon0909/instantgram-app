import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { getPost } from "@/src/service/sanity/post";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(
  request: NextRequest,
  context: RouteContext<"/api/posts/[id]">,
) {
  const { id } = await context.params;
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  return getPost(id).then((data) => NextResponse.json(data));
}
