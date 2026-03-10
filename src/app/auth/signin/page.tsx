import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import Signin from "@/src/components/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin",
  description: "Signup or Login to Instantgram",
};

type Props = {
  searchParams: Promise<{ callbackUrl: string }>;
};

export default async function SigninPage({ searchParams }: Props) {
  const session = await getServerSession(authOptions);
  const callbackUrl = (await searchParams).callbackUrl;

  if (session) {
    return redirect("/");
  }
  const providers = (await getProviders()) ?? {};
  console.log("providers", providers);

  return (
    <section className="flex justify-center mt-24">
      <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}
