import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorPageGame from './ErrorPageGame'

const Error = () => {
  const containerRef = useRef(null)
  const navigate = useNavigate()

  const handleGoToHome = () => {
    navigate('/landing')
  }

  return (
    <div
      ref={containerRef}
      className='w-[80%] h-[260px] m-auto border border-dashed border-red-600 flex flex-col font-b-yekan items-center p-8 gap-20 relative overflow-hidden'
    >
      <p className='text-2xl font-bold text-red-500 text-center p-2'>
        متاسفانه صفحه ای مطابق با جستجوی شما پیدا نشد ):
      </p>
      <button
        onClick={handleGoToHome}  
        className='bg-green-500 h-9 w-30 rounded-xl shadow-lg text-white p-1 cursor-pointer text-center'
      >
        Go To Home
      </button>

     
      <ErrorPageGame containerRef={containerRef} />
    </div>
  )
}

export default Error
