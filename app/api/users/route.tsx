import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";

//使用Next.js的API路由处理get请求，模拟后端接口
//handle GET请求，返回用户列表
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany(); //从数据库获取用户列表
  if (users.length > 0) {
    return NextResponse.json(users);
  }

  //硬编码模拟数据
  // return NextResponse.json([
  //     { id: 1, name: "John Doe" },
  //     { id: 2, name: "Jane Smith" },
  //     { id: 3, name: "Alice Johnson" }
  // ])
}

//创建新对象到数据库
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);
  //验证请求体
  if (!validation.success)
  return NextResponse.json({ error: "Name is required" }, { status: 400 });
  
  //在创建用户之前，检查该电子邮件是否已存在用户
  const user = await prisma.user.findUnique({
    where:{email: body.email}
  })
  if(user) return NextResponse.json({ error: "User already exists" }, { status: 400 });

  //使用Prisma创建新用户
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  //返回新创建的用户
  return NextResponse.json(newUser, { status: 201 });
  //假设id是自动生成的，这里我们硬编码为1
  //  return NextResponse.json({id:1,name:body.name}, { status: 201 });
}
