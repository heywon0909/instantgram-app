import { addUser } from "@/src/service/sanity/user";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { Provider } from "next-auth/providers/index";

const providers: Provider[] = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  }),
];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const fuc: () => { id: string; name: string } = provider;
    const providerData = fuc();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user: { id, name, image, email } }) {
      if (!email) return false;
      addUser({
        id,
        name: name || "",
        image,
        email,
        username: email.split("@")[0],
      });
      return true;
    },
    async session({ session, token }) {
      const user = session?.user;

      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
          id: token.id as string,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
