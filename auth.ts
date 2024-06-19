import NextAuth from "next-auth";
// database
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma/prismaClient";
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
  session: { strategy: "database" },

  pages: {
    signIn: "/signin",
  },
});
