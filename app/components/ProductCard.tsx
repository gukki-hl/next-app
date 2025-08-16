'use client'//声明客户端组件

import React from 'react'
const ProductCard = () => {
  return (
    <div >
        <button className='btn btn-primary' onClick={()=> console.log('click')}>Add</button>
    </div>
  )
}

export default ProductCard