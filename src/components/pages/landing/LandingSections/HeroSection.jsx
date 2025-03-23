import React from 'react'
import HeroBG from '../../../../core/icons/LandingIcons/HeroBG'
import Input from '../../../common/input/Input'
import LandingCharacter from '../../../../core/icons/LandingIcons/LandingCharacter'
import students from '../../../../assets/pics/others/students.png'
import teacher from '../../../../assets/pics/others/teacher.png'

const HeroSection = () => {
  return (
    <>
        <HeroBG itemTop={"0"} itemLeft={"0"}>
            <div className="h-auto md:h-[572px] w-full max-w-[1202px] flex flex-col md:flex-row justify-between mx-auto p-4 md:p-0">
                
                {/* Left Content */}
                <div className='w-full md:w-[40%] flex flex-col font-b-yekan justify-center gap-4 md:gap-9 text-center md:text-right whitespace-nowrap'>
                    <h1 className='text-[#01CEC9] text-3xl sm:text-4xl md:text-5xl font-normal drop-shadow-lg'>
                        آکادمی سپهر
                    </h1>
                    <p className='text-[#555555] text-base sm:text-lg md:text-[18px] font-normal leading-7 sm:leading-9'>
                        مرجع اموزش زنده و تعاملی برنامه نویسی حوزه وب <br/>
                        با دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی
                    </p>
                    <Input/>
                </div>

                {/* Right Content */}
                <div className='w-full md:w-[50%] flex justify-center relative font-b-yekan mt-6 md:mt-0'>

                    {/* Landing Character */}
                    <LandingCharacter className="w-full max-w-[400px]" />

                    {/* Student Info Box */}
                    <div className='w-[120px] sm:w-[140px] md:w-[160px] lg:w-[200px] h-[95px] sm:h-[105px] bg-[#FFFFFF] absolute top-0 left-0 rounded-[10px] shadow-lg'>
                        <img 
                        className='absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-[50px] sm:w-[60px]'
                        src={students} 
                        alt="#" 
                        />
                        <p className='text-center mt-10 sm:mt-12 text-[#434343] text-lg sm:text-xl'>
                            +1000 دانشجو
                        </p>
                    </div>

                    {/* Teacher Info Box */}
                    <div className='w-[120px] sm:w-[140px] md:w-[160px] lg:w-[200px] h-[95px] sm:h-[105px] bg-[#FFFFFF] absolute bottom-7 sm:bottom-10 md:bottom-40 lg:bottom-11 right-0 rounded-[10px] shadow-lg'>
                        <img 
                        className='absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-[50px] sm:w-[60px]'
                        src={teacher} 
                        alt="#" 
                        />
                        <p className='text-center mt-10 sm:mt-12 text-[#434343] text-lg sm:text-xl'>
                            +50 مدرس
                        </p>
                    </div>
                </div>
            </div>
        </HeroBG>
    </>
  )
}

export default HeroSection
