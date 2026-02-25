import { searchUsers } from "@/src/service/sanity/user";
import { NextResponse } from "next/server";

export async function GET() {
  return searchUsers().then((data) => NextResponse.json(data));
}
