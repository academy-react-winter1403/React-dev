import React from 'react'

const BtnGetCode = ({text,type,onClick}) => {
  return (
    <>
      <button className='w-[133px] h-[35px] rounded-[21px] bg-amber-600 font-bold text-[#fff] text-[13px] font-b-yekan hover:bg-amber-500'
      onClick={onClick}
      type={type}>
        {text}
      </button>
    </>
  )
}

export default BtnGetCode
