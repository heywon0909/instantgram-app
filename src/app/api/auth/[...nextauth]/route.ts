import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      // profile(profile) {
      //   console.log('profile', profile);
      //   return {
      //     ...profile,
      //   };
      // },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export const handler = NextAuth({
  ...authOptions,
  callbacks: {
    async session({ session }) {
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
        };
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
