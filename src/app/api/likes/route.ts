import { NextRequest, NextResponse } from "next/server";
import { dislikePost, likePost } from "@/src/service/sanity/post";
import { withSessionUser } from "@/src/util/session";

export async function PUT(req: NextRequest) {
  withSessionUser(async (user) => {
    const { id, like } = await req.json();

    if (!id || like === undefined) {
      return new Response("Bad Request", { status: 400 });
    }

    const request = like ? likePost : dislikePost;

    return request(id, user.id) //
      .then((res) => NextResponse.json(res))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
  });
}
