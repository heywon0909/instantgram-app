"use client";
import { ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";
import { BuiltInProviderType } from "next-auth/providers/index";

type Props = {
  providers:
    | Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider>
    | object;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          key={id}
          text={`Sign In with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
          size="big"
        />
      ))}
    </>
  );
}
