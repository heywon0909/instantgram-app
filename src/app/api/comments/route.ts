import { NextRequest, NextResponse } from "next/server";
import { addComment } from "@/src/service/sanity/post";
import { withSessionUser } from "@/src/util/session";

export async function POST(req: NextRequest) {
  withSessionUser(async (user) => {
    const { id, comment } = await req.json();

    if (!id || comment === undefined) {
      return new Response("Bad Request", { status: 400 });
    }

    return addComment(id, user.id, comment) //
      .then((res) => NextResponse.json(res))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
  });
}
