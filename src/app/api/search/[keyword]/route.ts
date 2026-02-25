import { searchUsers } from "@/src/service/sanity/user";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  context: RouteContext<"/api/search/[keyword]">,
) {
  const { keyword } = await context.params;

  return searchUsers(keyword).then((data) => NextResponse.json(data));
}
