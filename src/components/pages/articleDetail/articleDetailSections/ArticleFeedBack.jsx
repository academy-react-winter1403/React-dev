import React from 'react'
import { StarIcon } from '../../../../core/icons/icons'
import { CiShare2 } from "react-icons/ci";
import { AiOutlineLike, AiOutlineDislike  } from "react-icons/ai";

const ArticleFeedBack = () => {
  return (
    <div className='w-[95%] h-[52px] font-b-yekan px-3.5 shadow bg-white rounded-[8px] flex flex-row flex-nowrap items-center xs:justify-center md:justify-between whitespace-nowrap'>
      {/* score */}
      <div className='h-1/2  flex flex-row flex-nowrap items-center justify-start gap-1'>
          <p className='text-[#888888] lg:text-[18px] md:text-[16px] sm:text-text-[14px] xs:text-[12px] text-center hidden md:block'>
          امتیاز  ۳۵ نفر
          </p>
          <StarIcon className='lg:text-[24px] md:text-[22px] sm:text-text-[20px] xs:text-[18px]'/>
      </div>
      {/* like and share */}
      <div className='h-1/2  md:gap-6 flex flex-row flex-nowrap text-[#888888] cursor-pointer justify-end xs:gap-1'>
      {/* share */}
        <div className='flex flex-row flex-nowrap gap-1'>
        <CiShare2 className='lg:text-[24px] md:text-[22px] sm:text-text-[20px] xs:text-[18px] m-auto' />
          <p className='lg:text-[16px] md:text-[14px] sm:text-text-[12px] xs:text-[10px] text-center m-auto'>
          اشتراک گزاری
          </p>
        </div>
        {/* dislike */}
        <div className='flex flex-row-reverse flex-nowrap gap-1'>
          <AiOutlineDislike  className='lg:text-[24px] md:text-[22px] sm:text-text-[20px] xs:text-[18px] m-auto' />
          <p className='lg:text-[18px] md:text-[16px] sm:text-text-[14px] xs:text-[12px] text-center m-auto'>
            1
          </p>
        </div>
        {/* like */}
        <div className='flex flex-row-reverse flex-nowrap gap-1'>
          <AiOutlineLike  className='lg:text-[24px] md:text-[22px] sm:text-text-[20px] xs:text-[18px]'/>
          <p className='lg:text-[18px] md:text-[16px] sm:text-text-[14px] xs:text-[12px] text-center m-auto'>
            25
          </p>
        </div>
      </div>
    </div>
  )
}

export default ArticleFeedBack
