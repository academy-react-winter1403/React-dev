import React from 'react'
import { MdPerson } from "react-icons/md"
import { useNavigate } from 'react-router-dom'

const AccountBtn = () => {
  const navigate = useNavigate()
  return (
    <button onClick={()=> navigate("/Authorize/Register/step1")} className=' bg-[#01CEC9] rounded-[26px] text-white font-b-yekan 
    flex flex-row-reverse flex-nowrap justify-center gap-1 items-center cursor-pointer whitespace-nowrap
    lg:w-[145px] lg:h-[44px] md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] xs:w-[25px] xs:h-[25px]'>
      <MdPerson className=' mt-0.5
      lg:w-[25px] lg:h-[25px] md:w-[15px] md:h-[15px] sm:w-[10px] sm:h-[10px] xs:w-[10px] xs:h-[10px]'/>
      <p className='font-bold
      lg:text-[17px] lg:block hidden'>حساب کاربری</p>
    </button>
  )
}

export default AccountBtn
