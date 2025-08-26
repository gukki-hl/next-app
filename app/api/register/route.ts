// 导入 Prisma 客户端，用于操作数据库
import { prisma } from "@/prisma/client";
//导入Next.js内置的请求和响应对象
import { NextRequest, NextResponse } from "next/server";
//导入zod，用于请求验证体
import z from "zod";
//导入bcrypt，用于对用户密码进行加密处理（哈希）
import bcrypt from "bcrypt";
//定义用户注册请求体的验证规则
const schema = z.object({
  email: z.string(),
  password: z.string().min(5),
});

//处理post请求（用户注册）
export async function POST(requst: NextRequest) {
  //从请求体中解析json数据
  const body = await requst.json();
  //使用zod验证请求体数据是否合法
  const validation = schema.safeParse(body);
  //如果验证失败返回错误信息和400
  if (!validation.success)
    return NextResponse.json(validation.error.message, { status: 400 });

  //根据email查询数据库，检查用户是否已经存在
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });
  //如果用户存在返回400
  if (user)
    return NextResponse.json({ error: "User already exit" }, { status: 400 });

  // 使用 bcrypt 对明文密码进行哈希加密，第二个参数 10 表示盐的轮数（安全等级）
  const hashedPassword = await bcrypt.hash(body.password, 10);
  // 在数据库中创建新用户，存储邮箱和加密后的密码
  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword,
    },
  });
  // 返回新用户的 email 信息（避免返回敏感数据如密码）
  return NextResponse.json({ email: newUser.email });
}
