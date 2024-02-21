'use client'
import React from 'react'
import Image from 'next/image';

export default function Trasactions() {
  return (
    <div className='bg-[182237] p-[20px] rounded-[10px]'>
      <h2 className='font-extralight mb-[20px] text-gray-300 '>Latest Trasactions</h2>
      <table className='w-[100%]'>
        <thead>
          <tr>
            <td className='p-[10px]'>Name</td>
            <td className='p-[10px]'>Status</td>
            <td className='p-[10px]'>Date</td>
            <td className='p-[10px]'>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-[10px]'>
              <div className='flex gap-[10px] items-center'>
                <Image alt='avatar' src='/avatar.webp' width={40} height={40} className='object-cover rounded-[50%]'/>
                John Doe
              </div>
              </td>
            <td className=' rounded-[5px] p-[5px]  text-white bg-[#f7cb7375]'>Pending</td>
            <td className='p-[10px]'>14.02.2024</td>
            <td className='p-[10px]'>$3.200</td>
              
          </tr>
        </tbody>
      </table>
    </div>
  )
}
