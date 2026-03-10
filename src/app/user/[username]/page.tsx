import UserPost from "@/src/components/UserPost";
import UserProfile from "@/src/components/UserProfile";
import { getUserForProfile } from "@/src/service/sanity/user";
import { notFound } from "next/navigation";
import { cache } from "react";

type Props = {
  params: Promise<{ username: string }>;
};

const getUser = cache(async (username: string) => getUserForProfile(username));

export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const user = await getUser(username);

  if (!user) notFound();

  return (
    <section className="w-full">
      <UserProfile user={user} />
      <UserPost user={user} />
    </section>
  );
}

export async function generateMetadata({ params }: Props) {
  const { username } = await params;
  const user = await getUser(username);

  return {
    title: `${user?.name} (@${user?.username}) Instantgram Photos`,
    description: `${user?.name}'s all Instantgram posts`,
  };
}
