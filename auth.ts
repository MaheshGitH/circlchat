import NextAuth from "next-auth";
// database
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma/prismaClient";
// types
import type { Provider } from "next-auth/providers";
// providers
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Resend from "next-auth/providers/resend";

const providers: Provider[] = [
  Google,
  Github,
  Resend({
    from: process.env.EMAIL_FROM,
  }),
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },

  pages: {
    signIn: "/signin",
    verifyRequest: "/signin/check-email",
    newUser: "/signin/newuser",
  },
  trustHost: true,

  callbacks: {
    async signIn({ user, account }) {
      const email = user.email as string;

      // Check if the email is already associated with another account
      const existingUser = await prisma.user.findUnique({
        where: { email },
        include: { accounts: true },
      });

      if (existingUser) {
        // If the user exists and is trying to sign in with a different provider, deny access
        const isSameProvider = existingUser.accounts.some(
          (acc) => acc.provider === account?.provider
        );
        if (!isSameProvider) {
          // Redirect to error page
          return `/auth/error?error=AccountExists`;
        }
      }

      return true; // Allow sign in
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});
