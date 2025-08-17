import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: {
    sortOrder?: string;
  };
}
//路由查询参数
//page.tsx文件中可以获取路由查询参数.自动接收一个searchParams参数(next.js注入)
//可以通过searchParams获取查询参数，直接解构拿到即可
//如果有sortOrder参数,则传递给UserTable组件进行排序
//如果没有sortOrder参数,则不进行排序

const user = async ({ searchParams: { sortOrder } }: Props) => {
  console.log("sortOrder", sortOrder);
  
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn mb-5">
        new user
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default user;
