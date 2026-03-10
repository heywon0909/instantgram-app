import { getUserByUsername } from "@/src/service/sanity/user";
import { NextResponse } from "next/server";
import { withSessionUser } from "@/src/util/session";

export async function GET() {
  return withSessionUser(async (user) => {
    return getUserByUsername(user.username).then((data) => {
      return NextResponse.json(data);
    });
  });
}
