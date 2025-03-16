import React from 'react'
import { TbHeart } from "react-icons/tb"
import { HiShoppingBag } from "react-icons/hi2"

const Header = () => {
  return (
    <div className='container bg-[#F7F7F7] w-full h-[120px] flex justify-center items-end'>
      <div className='border w-[1247px] h-[50px] flex justify-between flex-row flex-nowrap'>
        <div className='border flex justify-between flex-row flex-nowrap gap-1'>
          <div>
            btn
          </div>
          <div>
            <button className='relative'>
              <HiShoppingBag  className="text-[#CCCCCC] w-[35px] h-[30px]" strokeWidth={0.1} />
              <div className="w-[14px] h-[14px] bg-[#E48900] text-white text-[10px] rounded-full absolute bottom-0
                        right-0 flex items-center justify-center ">
                            4
              </div>
            </button>
          </div>
          <div>
            <button>
              <TbHeart className="text-[#CCCCCC] w-[30px] h-[30px]" strokeWidth={1} />
            </button>
          </div>
        </div>
        <div className='border'>
          <ul>
            
          </ul>
        </div>
        <div className='border'>
          
        </div>
      </div>
    </div>
  )
}

export default Header