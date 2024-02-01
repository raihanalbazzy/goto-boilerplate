import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [],
  callbacks: {},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
