import { notFound } from 'next/navigation';
import React from 'react'

interface Props{
    params: {
        id: number;
    };
}
//动态路由参数 app/users/[id]/page.tsx
//在app目录下的文件中可以获取动态路由参数
//访问：/users/1, /users/2等
//可以通过params获取动态路由参数，直接解构拿到即可
const UserDetailPage = ({params:{id}}:Props) => {
  if(id > 10)  notFound()
  return (
    <div>UserDetailPage{id}</div>
  )
}

export default UserDetailPage