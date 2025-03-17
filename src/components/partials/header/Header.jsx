import React from 'react'
import { TbHeart } from "react-icons/tb"
import { HiShoppingBag } from "react-icons/hi2"
import AccountBtn from '../../common/AccountBtn'
import Logo from '../../../core/icons/Logo'
import { HeaderItemsText } from '../../../core/constants/LandingMockApi/HeaderItemsMock'

const Header = () => {
  return (
    <div className='bg-[#F7F7F7] w-full h-[120px] font-b-yekan flex justify-center items-end'>
      <div className='w-[80%] h-[50px] flex justify-between flex-row-reverse flex-nowrap'>
        <div className='flex justify-between flex-row-reverse flex-nowrap gap-1 
        lg:w-[20%] md:w-[18%] sm:w-[14%] '>
          <div>
            <AccountBtn/>
          </div>
          <div className='flex items-start mt-2'>
            <button className='relative cursor-pointer'>
              <HiShoppingBag  className="text-[#CCCCCC] 
              lg:w-[35px] lg:h-[30px] md:w-[30px] md:h-[25px] sm:w-[20px] sm:h-[15px]" 
              strokeWidth={0.1} />
              <div className=" bg-[#E48900] text-white  rounded-full absolute bottom-2
                        right-0 flex items-center justify-center font-b-yekan
                        lg:w-[14px] lg:h-[14px] lg:text-[10px] lg:bottom-0 md:w-[12px] md:h-[12px] md:text-[8px] md:bottom-0 sm:w-[10px] sm:h-[10px] sm:text-[4px] sm:bottom-1 xs:w-[10px] xs:h-[10px] xs:text-[4px]">
                            4
              </div>
            </button>
          </div>
          <div className='flex items-start mt-2'>
            <button className='cursor-pointer'>
              <TbHeart className="text-[#CCCCCC] 
              lg:w-[30px] lg:h-[30px] md:w-[25px] md:h-[25px] sm:w-[15px] sm:h-[15px]" 
              strokeWidth={1} />
            </button>
          </div>
        </div>
        <div className='text-center
        md:w-[35%] lg:w-[60%] sm:w-[20%] xs:w-[10%] xs:left-0'>
          <ul className='flex flex-row flex-nowrap justify-center mt-2.5 font-b-yekan gap-6 text-[#555555] text-[17px] font-normal whitespace-nowrap
          lg:text-[17px] md:text-[14px] sm:text-[11px] xs:text-[11px]'>
            {HeaderItemsText.map((item, index) => (
              <li key={index}
              className={`cursor-pointer relative ${index === 0 ? "before:absolute before:bottom-[-4px] before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-[#F3F3F300] before:via-[#E48900] before:to-[#F3F3F300] content-['']" : ""}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex overflow-hidden
         md:w-[13%] md:h-[40px] md:block lg:w-[15%] lg:h-[50px] lg:block sm:w-[10%] sm:h-[30px] sm:block  xs:hidden'>
          <Logo/>
        </div>
      </div>
    </div>
  )
}

export default Header