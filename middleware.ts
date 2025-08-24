//middleware.ts
// Next.js 中间件，用于处理请求和响应的中间逻辑
// 这里我们使用 next-auth 提供的中间件来保护某些路由
// 例如，只有经过身份验证的用户才能访问 /users 路径下的内容
// 通过配置 matcher，我们可以指定哪些路径需要经过中间件处理
// 这样可以实现自动重定向到登录页面等功能
export {default} from 'next-auth/middleware'


export const config = {
  //只对 /users/ 开头的路径生效
  //* 0或多个
  //+ 1或多个
  //? 0或1个
  matcher: ["/users/:id*"],
};
