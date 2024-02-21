import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

export default function Card() {
  return (
    <div className='bg-[#182237] p-[15px] rounded-[10px] flex  gap-[10px] cursor-pointer w-[100%] hover:bg-[2e374a]'>
      <MdSupervisedUserCircle size={24} />
      <div className='flex flex-col gap-[20px]'>
        <span>Total Users</span>
        <span className='text-[24px] font-medium'>10.342</span>
        <span className='font-light'>
        <span className='text-green-500'>12% </span>
          more than previous week
        </span>
      </div>
    </div>
  )
}
