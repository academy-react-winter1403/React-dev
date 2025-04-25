import React from 'react'
import networkErrorVideo from "../../../assets/networkError.mp4"

const NetworkError = ({ classStyles }) => {
  return (
    <div className={`${classStyles} network-error-component flex flex-col justify-start items-center gap-y-6`}>
      <video src={networkErrorVideo} className='w-[60%] h-[60%] mt-16' loop autoPlay></video>
      <h1 className='text-red-600 font-b-yekan text-[25px]'> لطفا وضعیت اینترنت خود را بررسی کنید :) </h1>
    </div>
  )
}

export default NetworkError
