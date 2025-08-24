import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// 获取当前登录用户的token信息
export async function GET(request:NextRequest){
  const token =  await  getToken({req:request})
  return NextResponse.json(token)
}