import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Users() {
  return (
    <div className='bg-[#182237] p-[20px] rounded-[10x] mt-[10px]'>
      <div className='flex items-center justify-between'>
        <Link href='/dashboard/users/add'>
            <button className='p-[10px] bg-[#5d57c9]  text-white rounded-md cursor-pointer'>Add New</button>
        </Link>
      </div>
      <table className='w-[100%]'>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Created At</td>
                <td>Role</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>
             <div className='flex items-center gap-[10px]'>
             <Image alt='user' src='/avatar.webp' width={50} height={50} className=' rounded-[50%] object-cover'/>   
              John Doe
             </div>
            </td>
            <td>john@gmail.com</td>
            <td>19.04.2024</td>
            <td>active</td>
            <td>
              <div className='flex gap-[10px]'>
               <Link href={'/dashboard/users/1'}> <button className=' py-[5px] px-[10px] rounded-md text-white cursor-pointer bg-green-500'>View</button></Link>
                <button className=' py-[5px] px-[10px] rounded-md text-white cursor-pointer bg-red-500'>delete</button>
              </div>
            </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
