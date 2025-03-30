import React from 'react'
import { MdNavigateBefore } from 'react-icons/md'

const RelatedCourses = () => {
  return (
    <div className=' w-full bg-white font-b-yekan flex flex-col items-center justify-center gap-2 py-4 rounded-2xl shadow-sm'>
      {/* title */}
      <div className='w-[95%] h-12 bg-[#E8E8E8] rounded-tl-[10px] rounded-tr-[10px] shadow-sm'>
        <p className='text-[#555555] indent-4 mt-2'>
          دوره های مرتبط
        </p>
      </div>
      {/* courses */}
      <div className='bg-[#F8F8F8] w-[95%] h-28 shadow-sm rounded-[10px] cursor-pointer flex flex-row flex-nowrap gap-4 items-center justify-center px-2'>
        {/* image */}
        <div className='border h-[85%] rounded-[6px] lg:w-1/3 md:w-[50%] sm:w-1/3 xs:w-[50%]'>
          <img src="" alt="" />
        </div>
        {/* text */}
        <div className='h-[85%]  flex flex-col gap-1 items-end lg:w-2/3 md:w-[50%]'>
          <div className='h-2/3 w-full pl-5'>
            <p className='text-[#005653]  text-start lg:text-[17px] md:text-[12px]'>
            دوره تخصصی ترفند های طراحی فرانت اند
            </p>
          </div>
          <div className='h-1/3 lg:w-2/3 md:w-full flex items-center justify-end flex-row flex-nowrap cursor-pointer text-[#01B4AF] whitespace-nowrap'>
            <p className='lg:text-xs md:text-[9px] sm:text-[12px] xs:text-[10px]'>
              مشاهده دوره
            </p>
            <MdNavigateBefore className='lg:text-[21px] md:text-[16px] sm:text-[16px] xs:text-[14px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedCourses
