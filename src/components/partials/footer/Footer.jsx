import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai"
// import footerBg from '../../../assets/pics/Bg/footerbg.png'
import FooterBG from '../../../core/icons/FooterIcons/FooterBG'

const Footer = () => {
  return (
    <div className="w-full holder bg-[#F7F7F7]  font-b-yekan flex justify-center mt-1  flex-col">
      <div className='relative'>
        <FooterBG/>
        <div className='absolute holder w-full  h-[90%] border bottom-0 left-0 flex justify-center items-center'>
          <div className='border w-[80%] h-[90%]'>

          </div>
        </div>
      </div>
     
      <div className='w-full h-[42px] bg-[#008D8A] flex flex-row flex-nowrap whitespace-nowrap justify-center items-center gap-1'>
        <p className='font-b-yekan font-bold text-white 
        md:text-[16px] xs:text-[10px]'>
        کلیه حقوق این وب سایت متعلق به  آموزشگاه فلان می باشد 
        </p>
        <AiOutlineCopyrightCircle
        className='text-white mb-3' />
      </div>
    </div>
  )
}

export default Footer
