import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { motion } from 'framer-motion';

const ViewAllBtn = ({text, textColor, svgColor, onClick}) => {
  return (
    <motion.button
      className='flex items-center cursor-pointer'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.6, delay: 2.2}}
      onClick={onClick}
    >
      <span className={`text-[11px] text-[${textColor}] font-b-yekan`}>{text}</span>
      <IoIosArrowBack size={13} className={`text-[${svgColor}]`}/>
    </motion.button>
    // <button className='flex items-center cursor-pointer'>
    //     <span className={`text-[11px] text-[${textColor}] font-b-yekan`}>{text}</span>
    //     <IoIosArrowBack size={13} className={`text-[${svgColor}]`}/>
    // </button>
  )
}

export default ViewAllBtn
