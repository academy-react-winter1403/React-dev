import React from 'react'

const UserBg = ({children}) => {
  return (
    <div className='absolute top-13 left-21 w-[800px] h-[500px] bg-[#525252]/70 backdrop-blur-xs shadow-sm rounded-2xl' data-aos="zoom-in-down">
      {children}
    </div>
  )
}

export default UserBg
