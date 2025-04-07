import React from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import articlecoursepic from '../../../assets/pics/others/articlecoursepic.png'

const RelatedCoursesOptions = ({ title, image }) => {
  return (
    <div className='bg-[#F8F8F8] w-[95%] h-28 shadow-sm rounded-[10px] cursor-pointer flex flex-row gap-4 items-center justify-center px-2'>
      {/* image */}
      <div className='h-[85%] rounded-[6px] lg:w-1/3 md:w-[50%] sm:w-1/3 xs:w-[50%]'>
        <img 
        src={image && image !== 'Not-set' ? image : articlecoursepic} 
        alt={title} 
        className="w-full h-full object-cover rounded-[6px]" />
      </div>

      {/* text */}
      <div className='h-[85%] flex flex-col gap-1 items-end lg:w-2/3 md:w-[50%]'>
        <div className='h-2/3 w-full pl-5'>
          <p title={title} className='text-[#005653] text-start lg:text-[17px] md:text-[12px] w-60 whitespace-nowrap text-ellipsis overflow-hidden'>
            {title}
          </p>
        </div>
        <div className='h-1/3 lg:w-2/3 md:w-full flex items-center justify-end text-[#01B4AF]'>
          <p className='lg:text-xs md:text-[9px] sm:text-[12px] xs:text-[10px]'>
            مشاهده دوره
          </p>
          <MdNavigateBefore className='lg:text-[21px] md:text-[16px] sm:text-[16px] xs:text-[14px]' />
        </div>
      </div>
    </div>
  );
};

export default RelatedCoursesOptions;
