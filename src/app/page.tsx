import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <Link href='/dashboard' className='bg-green-500 px-4 py-1 rounded-lg'>dashboard</Link>
    </div>
  )
}
