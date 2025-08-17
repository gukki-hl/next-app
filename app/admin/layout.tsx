import React from 'react'
interface Props {
    children: React.ReactNode;
}

const AdminLayout = ({children}:Props) => {
  return (
    <div className='flex'>
        <aside className='bg-pink-200 p-5 mr-5'>Amin Sidebar</aside>
        <div>{children}</div>
    </div>
  )
}

export default AdminLayout