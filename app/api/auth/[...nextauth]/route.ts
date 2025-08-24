// 必须最先执行
import "global-agent/bootstrap";

// 指定代理地址
process.env.GLOBAL_AGENT_HTTP_PROXY = "http://127.0.0.1:7890";
process.env.GLOBAL_AGENT_HTTPS_PROXY = "http://127.0.0.1:7890";

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const authOptions = {
  providers: [
    //配置Google登录所需的clientId和clientSecret都从环境变量中读取
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
}
const handler = NextAuth(authOptions);
//将handler函数分别导出为GET和POST请求的处理函数，允许同一个handler处理不同HTTP方式的请求
export { handler as GET, handler as POST };
