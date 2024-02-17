'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdSearch, MdPublic,MdNotifications, MdOutlineChat } from 'react-icons/md'

export default function Navbar() {
    const pathname = usePathname()

  return (
    <div className='bg-[#182237] p-[20px]  flex justify-between items-center'>
      <div className=' capitalize font-bold'>{pathname.split('/').pop()}</div>
    <div className='flex item-center gap-[20px]'>
    <div className='flex items-center rounded-[10px] p-[10px] gap-[5px] bg-[#2e374a] '>

<MdSearch/>
<input type='text' placeholder='Search...' className='bg-transparent placeholder:text-white py-1'/>
</div>
<div className='flex gap-[20px] items-center'>
<MdOutlineChat/>
<MdNotifications/>
<MdPublic/>
</div>
    </div>
    </div>
  )
}
