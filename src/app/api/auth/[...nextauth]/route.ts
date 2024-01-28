import NextAuth, { NextAuthOptions } from "next-auth";
import { withIronSession } from "next-iron-session";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [],
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {},
};

const handler = withIronSession(NextAuth(authOptions), {
  cookieName: process.env.COOKIE_NAME!,
  password: process.env.COOKIE_PASSWORD!,
});

export { handler as GET, handler as POST };
