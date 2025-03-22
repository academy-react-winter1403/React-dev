import React from 'react'
import BestTeacherBG from '../../../../core/icons/LandingIcons/BestTeacherBG'
import BestTeacherSlider from '../landingSlider/BestTeacherSlider'

const BestTeacherSection = () => {
  return (
    <div className='w-full h-[470px] relative'>
      <BestTeacherBG>
        <div className='w-[80%] h-[90%] max-w-[1202px] flex flex-row flex-nowrap justify-between items-center'>
            {/* text */}
            <div className='w-[40%] h-[120px] font-b-yekan whitespace-nowrap hidden md:block'>
                <p className='text-[#268582] font-normal
                lg:text-[25px] md:text-[20px]'>
                    <h2 className='text-[#003231] font-bold text-[40px] inline'>
                    برترین اساتید
                    </h2>
                    &nbsp;
                     رو همینجا پیدا می کنید!!
                </p>
                <p className='text-[#777777] lg:text-[20px] md:text-[15px]'>
                برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی <br />
                استان مازندران رو بهتر بشناسیم !
                </p>
            </div>
            {/* slider */}
            <div className='w-[40%] h-full xs:m-auto'>
                <BestTeacherSlider/>
            </div>
        </div>
      </BestTeacherBG>
    </div>
  )
}

export default BestTeacherSection
