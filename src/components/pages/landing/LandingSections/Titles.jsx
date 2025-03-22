import React from 'react'

const Titles = ({title, exp}) => {
  return (
    <div className="w-[30%] h-[90px]">
        <div className="w-full h-1/2 flex flex-row flex-nowrap items-center justify-center gap-2">
          <div className="bg-[#01CEC9] rounded-full md:h-[12px]md:w-[12px] h-[9px] w-[9px]"></div>
          <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center">
            {title}
          </p>
        </div>
        <p className="lg:text-xl md:text-[18px] text-[12px] text-[#AAAAAA] text-center">
          {exp}
        </p>
      </div>
  )
}

export default Titles
