import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params; //解构params
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Gukki" });
}

//更新数据库中的用户
export async function PUT(request:NextRequest,  { params }: { params: { id: number } }){
    const {id} = params
    const body = await request.json();
   const validation =  userSchema.safeParse(body); //验证请求体
    //假设我们更新了数据库中的用户
    if(id > 10) return NextResponse.json({ error: "User not found" }, { status: 404 });
    if(!validation.success) return NextResponse.json(validation.error.message, { status: 400 });
    //假设我们更新了数据库中的用户  
    return NextResponse.json({id:id,name:body.name});
}

export function DELETE(request:NextRequest,  { params }: { params: { id: number } }){
    const {id} = params
    const body = request.json();
    if(id > 10) return NextResponse.json({ error: "User not found" }, { status: 404 });
    //假设我们删除了数据库中的用户  
    return NextResponse.json({message:`User with id ${id} deleted`});
}