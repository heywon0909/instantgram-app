import { getUserByUsername } from "@/src/service/sanity/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log("user", user);

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }
  return getUserByUsername(user.username).then((data) => {
    console.log("에잇", data);
    return NextResponse.json(data);
  });
}
