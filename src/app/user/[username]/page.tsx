import UserPost from "@/src/components/UserPost";
import UserProfile from "@/src/components/UserProfile";
import { getUserForProfile } from "@/src/service/sanity/user";
import { notFound } from "next/navigation";

export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const user = await getUserForProfile(username);

  if (!user) notFound();

  return (
    <section className="w-full">
      <UserProfile user={user} />
      <UserPost user={user} />
    </section>
  );
}
