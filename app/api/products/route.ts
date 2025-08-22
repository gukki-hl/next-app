import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

export async function GET(request:NextRequest){
    //使用Prisma从数据库获取产品列表
   const products = await prisma.product.findMany()
   if(products.length > 0){
    return NextResponse.json(products);
   }

   //硬编码模拟数据
    // return NextResponse.json([
    //       { id: 1, name: "Milk", description: "Description A", price: 100 },
    //     { id: 2, name: "Bread", description: "Description B", price: 200 },
    // ])
}

export async function POST(request:NextRequest) {
    const body = await request.json()
    //验证请求体
    const validation = productSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(validation.error.message, { status: 401});
    }
    //在创建产品之前，检查该名称是否已存在产品
    const product = await prisma.product.findUnique({
      where: { name: body.name }
    });
    //如果产品已存在，返回400错误
    if (product) return NextResponse.json({ error: "Product already exists" }, { status: 400 });
    //使用Prisma创建新产品
    const newProducts = await prisma.product.create({
        data:{
            name: body.name,
            description: body.description,
            price: body.price
        }
    })
    //返回新创建的产品
    return NextResponse.json(newProducts, { status: 201 });
    
}