"use client";

import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};

export default function SWRConfigConext({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
