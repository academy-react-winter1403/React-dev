import React from 'react'
import { MdPerson } from "react-icons/md"

const AccountBtn = () => {
  return (
    <button className='w-[145px] h-[44px] bg-[#01CEC9] rounded-[26px] text-white font-b-yekan 
    flex flex-row flex-nowrap justify-center gap-1 items-center cursor-pointer'>
      <MdPerson className='w-[25px] h-[25px] mt-0.5'/>
      <p className='text-[17px] font-bold'>حساب کاربری</p>
    </button>
  )
}

export default AccountBtn
