import React from "react";
//定义用户类型接口
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
/*
在Next中 App Router 中，页面组件默认是服务器组件。可以直接是异步函数
这里使用了SSR(服务器渲染)获取数据
  1，直接在组件中使用fetch获取数据，无需useEffect
  因为组件在服务器渲染时会执行async函数。
  2，不需要useState储存数据，数据直接在渲染时使用。
  3，返回的JSX会被渲染成HTML，再发送到浏览器
  浏览器接受到就是完整HTML，不需要再进行数据获取。对于SEO友好。
*/
const user = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users: User[] = await res.json();
  return (
    <>
      <h2>i am gukki</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
              <td> {user.name}</td>
              <td>{user.email}</td>
             </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default user;
