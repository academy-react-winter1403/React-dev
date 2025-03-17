import React from 'react'
import { TbHeart } from "react-icons/tb"
import { HiShoppingBag } from "react-icons/hi2"
import AccountBtn from '../../common/AccountBtn'
import Logo from '../../../core/icons/Logo'
import { HeaderItemsText } from '../../../core/constants/LandingMockApi/HeaderItemsMock'

const Header = () => {
  return (
    <div className='bg-[#F7F7F7] w-full h-[120px] font-b-yekan flex justify-center items-end'>
      <div className='w-[80%] h-[50px] flex justify-between flex-row flex-nowrap'>
        <div className='flex justify-between flex-row flex-nowrap gap-1 w-[20%] min-w-[120px]'>
          <div>
            <AccountBtn/>
          </div>
          <div className='flex '>
            <button className='relative cursor-pointer'>
              <HiShoppingBag  className="text-[#CCCCCC] w-[35px] h-[30px]" strokeWidth={0.1} />
              <div className="w-[14px] h-[14px] bg-[#E48900] text-white text-[10px] rounded-full absolute bottom-2
                        right-0 flex items-center justify-center font-b-yekan">
                            4
              </div>
            </button>
          </div>
          <div className='flex'>
            <button className='cursor-pointer'>
              <TbHeart className="text-[#CCCCCC] w-[30px] h-[30px]" strokeWidth={1} />
            </button>
          </div>
        </div>
        <div className='text-center
        md:w-[35%] lg:w-[60%]'>
          <ul className='flex flex-row-reverse flex-nowrap justify-center mt-2.5 font-b-yekan gap-6 text-[#555555] text-[17px] font-normal whitespace-nowrap
          lg:text-[17px] md:text-[14px]'>
            {HeaderItemsText.map((item, index) => (
              <li key={index}
              className={`cursor-pointer relative ${index === 0 ? "before:absolute before:bottom-[-4px] before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-[#F3F3F300] before:via-[#E48900] before:to-[#F3F3F300] content-['']" : ""}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex justify-end
        md:w-[13%] md:h-[40px] lg:w-[15%] lg:h-[50px]'>
          <Logo/>
        </div>
      </div>
    </div>
  )
}

export default Header