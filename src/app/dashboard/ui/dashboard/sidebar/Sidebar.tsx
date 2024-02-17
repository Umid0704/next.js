'use client'
import React, { ReactNode } from 'react'
import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney , MdWork, MdAnalytics, MdPeople, MdOutlineSettings,  MdHelpCenter, MdLogout} from "react-icons/md";
import MenuLink from './menuLink/MenuLink';
import Image from 'next/image';
export default function Sidebar() {
    interface MenuItem{
        title:string;
        list:SubMenuItem[]
    }
    interface SubMenuItem{
        title:string;
        path:string;
        icon:ReactNode;
    }
   const menuItem:MenuItem[]= [
    {
        title:'Pages',
        list:[
           { title:'Dashboard',
             path:'/dashboard',
             icon:<MdDashboard/>
           },
           { title:'Users',
             path:'/dashboard/users',
             icon:<MdSupervisedUserCircle/>
           },
           { title:'Products',
             path:'/dashboard/products',
             icon:<MdShoppingBag/>
           },
           { title:'Transactions',
             path:'/dashboard/transactions',
             icon:<MdAttachMoney/>
           }
        ]
    },
    {
        title:'Analytics',
        list:[
           { title:'Revenue',
             path:'/dashboard/revenue',
             icon:<MdWork/>
           },
           { title:'Reports',
             path:'/dashboard/reports',
             icon:<MdAnalytics/>
           },
           { title:'Teams',
             path:'/dashboard/teams',
             icon:<MdPeople/>
           },
        ]
    },
    {
        title:'users',
        list:[
           { title:'Settings',
             path:'/dashboard/settings',
             icon:<MdOutlineSettings/>
           },
           { title:'Help',
             path:'/dashboard/help',
             icon:<MdHelpCenter/>
           },
        ]
    },
   ]
  return (
    <div className=' sticky top-[40px]'>
      <div className='flex items-center gap-[20px] mb-[20px]'>
      <Image src='/avatar.webp' alt='avatar'width='50' height='50' className='rounded-[50%] object-cover'  />
      <div className='flex flex-col'>
        <span>Jone Doe</span>
        <span>Administrator</span>
      </div>
      </div>
      <ul>
        {
            menuItem.map((item, index)=>(
                <li key={index}>
                    <span className='text-[13px] text-gray-300 my-[10px] font-bold'>{item.title}</span>
                    {
                        item.list.map((value)=>(
                            <MenuLink key={value.title} value={value}  />
                        ))
                    }
                </li>
            ))
        }
      </ul>
    </div>
  )
}
