'use client'
import {  usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'

export default function Search({placeholder}:{placeholder:string}) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()
   const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    const params = new URLSearchParams(searchParams ? searchParams : " ")
    if(e.target.value){
        e.target.value.length > 2 && params.set('q', e.target.value)
    }else{
        params.delete('q')
    }
    replace(`${pathname}?${pathname}`)
   }
  return (
    <div className='flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-md w-max'>
      <MdSearch/>
      <input className=' bg-transparent outline-none text-white' type="search" placeholder={placeholder} />
    </div>
  )
}
