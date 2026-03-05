"use server";

import { revalidatePath } from "next/cache";

export async function revalidateProfileUser(username: string) {
  revalidatePath(`/user/${username}`);
}
