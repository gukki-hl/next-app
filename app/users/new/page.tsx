'use client'
import { useRouter } from "next/navigation";
import React from "react";
const NewUserPage = () => {
  //使用useRouter进行编程式导航
  //获取路由对象
  const router = useRouter();

  return (
    <div>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Create
      </button>
    </div>
  );
};

export default NewUserPage;
