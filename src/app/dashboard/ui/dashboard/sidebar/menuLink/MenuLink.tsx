'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React, { ReactNode } from 'react'
interface SubMenuItem{
    title:string;
    path:string;
    icon:ReactNode;
}

export default function MenuLink({value}:Readonly<{value:SubMenuItem}>) {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <Link href={value.path} className={ pathname === value.path ? 'flex items-center p-[20px] gap-[10px] my-[5px] rounded-[10px] bg-[#2e374a] ':'flex items-center p-[20px] gap-[10px] my-[5px] rounded-[10px] hover:bg-[#2e374a]'} >{value.icon}{value.title}</Link>
  )
}
