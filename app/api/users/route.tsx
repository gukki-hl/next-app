import { NextRequest, NextResponse } from "next/server";

//使用Next.js的API路由处理get请求，模拟后端接口
//handle GET请求，返回用户列表
export function GET(request:NextRequest) {
    return NextResponse.json([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alice Johnson" }
    ])
}
//创建新对象到数据库
export async function POST(request: NextRequest) {
   const body =  await request.json();
   //假设我们将新用户添加到数据库
   //这里我们只是返回一个模拟的响应
   if(!body.name) return NextResponse.json({ error: "Name is required" }, { status: 400 });
   //假设id是自动生成的，这里我们硬编码为1
   return NextResponse.json({id:1,name:body.name}, { status: 201 });
}