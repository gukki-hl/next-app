import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";
//定义用户类型接口
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Props {
  sortOrder?: string;
}
const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{
      cache: "no-store",
  });
  const users: User[] = await res.json();
  //根据page.tsx文件传入的sortOrder进行排序
  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <div>
      {" "}
      <>
        <h2>i am gukki</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>
                {/* //使用Link组件进行路由跳转
                //点击后会URL会变，Next.js会重新SSR/users/page.tsx把
                //searchParams.sortOrder传递给UserTable组件 */}
                <Link href="/users?sortOrder=name">Name</Link>
              </th>
              <th>
                <Link href="/users?sortOrder=email">Email</Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user: User) => (
              <tr key={user.id}>
                <td> {user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default UserTable;
