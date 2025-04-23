import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorPageGame from './ErrorPageGame'
import error from '../../../assets/pics/Bg/error.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Error = () => {
  const containerRef = useRef(null)
  const navigate = useNavigate()

  const handleGoToHome = () => {
    navigate('/landing')
  }


  //  AOS
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,     
        })
      }, [])

  return (
    <div
      ref={containerRef}
      className='w-[80%] h-[260px]  m-auto  flex flex-col font-b-yekan items-center p-8 gap-20 relative overflow-hidden'
    >
      {/* <p className='text-2xl font-bold text-red-500 text-center p-2'>
        متاسفانه صفحه ای مطابق با جستجوی شما پیدا نشد ):
      </p> */}
      <img 
      className='w-full h-[80%] m-auto'
      src={error} 
      alt=" متاسفانه صفحه ای مطابق با جستجوی شما پیدا نشد ):"
      data-aos="zoom-in"
       />
      <button
        onClick={handleGoToHome}  
        className='bg-green-500 hover:bg-green-600  transition h-9 w-30 rounded-xl shadow-lg text-white p-1 cursor-pointer text-center absolute bottom-0'
        data-aos="zoom-in"
      >
        Go To Home
      </button>

     
      <ErrorPageGame containerRef={containerRef} />
    </div>
  )
}

export default Error
