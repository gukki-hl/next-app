import WelcomeTemplate from "@/emails/WelcomeTemplate";
// 引入一个 React 邮件模板组件，用来生成邮件内容

import { NextResponse } from "next/server";
// 从 Next.js 内置库中导入 NextResponse，用于返回 API 响应

import { Resend } from "resend";
// 引入 Resend 库（一个邮件发送服务的 SDK）

const resend = new Resend(process.env.RESEND_API_KEY);
// 使用环境变量中的 RESEND_API_KEY 创建 Resend 客户端实例
// 这样就可以调用 Resend 提供的邮件发送功能

export async function POST() {
// 定义一个异步的 API 路由处理函数，处理 POST 请求（REST API 的一种写法）

  await resend.emails.send({
    from: "...",
    // 邮件发送者的地址（必须符合 Resend 要求，比如已验证的域名邮箱）

    to: "hailachen2@gmail.com",
    // 收件人的邮箱地址

    subject: "...",
    // 邮件的主题

    react: <WelcomeTemplate name="Gukki"></WelcomeTemplate>,
    // 使用 React 组件 WelcomeTemplate 作为邮件正文内容
    // 给模板传入一个 props（name="Gukki"），生成动态内容
  });

  return NextResponse.json({});
  // 返回一个 JSON 响应（空对象），表示请求处理成功
}
