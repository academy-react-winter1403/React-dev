import React from 'react'
import BestTeacherBG from '../../../../core/icons/LandingIcons/BestTeacherBG'
import BestTeacherSlider from '../landingSlider/BestTeacherSlider'

const BestTeacherSection = () => {
  return (
    <div className='w-full h-[470px] relative mt-7 mb-10 max-w-[1515px] mx-auto'>
      <BestTeacherBG>
        <div className='w-[80%] h-[90%]  flex flex-row flex-nowrap justify-between items-center'>
            {/* text */}
            <div className='w-[40%] h-[120px] font-b-yekan whitespace-nowrap hidden md:block'>
                <p className='text-[var(--teacher-title2)] font-normal
                lg:text-[25px] md:text-[18px] md:whitespace-normal lg:whitespace-nowrap'>
                    <h2 className='text-[var(--teacher-title)] font-bold text-[40px] inline'>
                    برترین اساتید
                    </h2>
                    &nbsp;
                     رو همینجا پیدا می کنید!!
                </p>
                <p className='text-[var(--teacher-sub-title)]  lg:text-[20px] md:text-[15px]'>
                برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی <br />
                استان مازندران رو بهتر بشناسیم !
                </p>
            </div>
            {/* slider */}
            <div className='w-[40%] h-full xs:m-auto' data-aos="fade-right">
                <BestTeacherSlider/>
            </div>
        </div>
      </BestTeacherBG>
    </div>
  )
}
// text-[#268582]
export default BestTeacherSection
