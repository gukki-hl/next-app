import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //假设我们从数据库中获取用户
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) }, //将传入的id转换为字符串
  });
  if (!user)
    //如果用户不存在，返回404错误
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  //返回用户信息
  return NextResponse.json(user);
  //硬编码模拟数据
  // return NextResponse.json({ id: 1, name: "Gukki" });
}

//更新数据库中的用户
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  //验证请求体
  const validation = userSchema.safeParse(body);
  //如果验证失败，返回400错误
  if (!validation.success)
    return NextResponse.json(validation.error.message, { status: 400 });
  //检查用户是否存在
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) }, //将传入的id转换为字符串
  });
  //如果用户不存在，返回404错误
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  //如果用户存在，使用Prisma更新用户信息
  const updatedUser = prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  //返回更新后的用户信息
  return NextResponse.json(updatedUser);

  //如果没有数据库，我们可以使用硬编码模拟更新
  // return NextResponse.json({ id: params.id, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = request.json();
  //检查用户是否存在
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) }, //将传入的id转换为字符串
  });
  const id = params.id;
  //如果用户不存在，返回404错误
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  //如果用户存在，使用Prisma删除用户
  await prisma.user.delete({
    where: { id: user.id },
  });
  return NextResponse.json({});
}
