// 必须放在第一行，在任何 import 之前
process.env.GLOBAL_AGENT_HTTP_PROXY = "http://127.0.0.1:7890";
process.env.GLOBAL_AGENT_HTTPS_PROXY = "http://127.0.0.1:7890";

import "global-agent/bootstrap";

export const runtime = "nodejs";

import NextAuth, { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/prisma/client";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      httpOptions: { timeout: 15000 },
    }),
  ],
  session: { strategy: "jwt" },
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
