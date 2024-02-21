import React from 'react'

export default function SingleUser() {
  return (
    <div className='bg-[182237] p-[20px] mt-[20px] rounded-[20px]'>
        <form className='flex flex-wrap justify-between'>
          <input type="text" placeholder='User name' name='username'/>
          <input type="email" placeholder='Email' name='email'/>
          <input type="password" placeholder='Password' name='password'/>
          <input type="number" placeholder='Phone' name='phone' />
          <select name="isAdmin" id="isAdmin">
            <option value={false}>is Admin?</option:>
          </select>
        </form>
    </div>
  )
}
