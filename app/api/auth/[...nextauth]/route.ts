// 必须放在第一行，在任何 import 之前
process.env.GLOBAL_AGENT_HTTP_PROXY = "http://127.0.0.1:7890";
process.env.GLOBAL_AGENT_HTTPS_PROXY = "http://127.0.0.1:7890";

if (typeof window === "undefined") {
  // 只在 Node.js 运行时导入
  require("global-agent/bootstrap");
}
export const runtime = "nodejs";

import NextAuth, { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/prisma/client";
import bcrypt from "bcrypt";
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      //用户名和密码进行身份验证
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" ,placeholder: "Password" },
      },
      //异步验证函数
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null;
        //在数据库中通过此电子邮件查找该用户
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) return null;
        //检查密码是否匹配
        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword!
        );
        return passwordsMatch ? user : null;
      },
    }),
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
