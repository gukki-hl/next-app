import React from 'react'

interface Porps{
    params:{slug:string[]}
}
//多层动态参数
//app/products/[[...slug]]/page.tsx
//可以通过params获取动态路由参数，直接解构拿到即可
const ProductPage = ({params:{slug}}:Porps) => {
  return (
    <div>ProductPage {slug}</div>
  )
}

export default ProductPage