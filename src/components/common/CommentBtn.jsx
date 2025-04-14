import React from 'react'
import { FaRegCommentDots } from "react-icons/fa";

const CommentBtn = () => {
  return (
    <button className='py-[8px] px-[26px] cursor-pointer bg-[#00E2DC] text-[#005653] font-b-yekan
      rounded-[7px] flex items-center justify-center gap-x-[10px] transition-opacity
      border border-transparent hover:border-[#005653]'
    >
        <FaRegCommentDots className=''/>
        <span> ارسال دیدگاه جدید </span>
    </button>
  )
}

export default CommentBtn
