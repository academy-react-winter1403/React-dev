import React, { useEffect, useState } from "react";
import CommentProfile from "./CommentProfile";
import AOS from 'aos'
import 'aos/dist/aos.css'

const AddComment = () => {

   // AOS
    useEffect(() => {
        AOS.init({
          duration: 2000, 
          once: true,     
        })
      }, [])

  return (
    <div
      className="commentBox-holder w-full bg-[#F9F9F9]
        drop-shadow-[0_1px_2px_#00000040] rounded-[10px] mt-[20px] p-6"
         data-aos="zoom-in"
    >
      {/* profile */}
      <CommentProfile />
      {/* hr */}
      <div className="hr-control w-full flex justify-center mt-[12px]">
        <hr className="outline-0 border-0 w-full h-[2px] bg-[#EDEDED]" />
      </div>
      {/* write text */}
      <div className="bg-white w-full h-50 rounded-2xl shadow mt-2">
        <textarea
          className="w-full h-full border-none outline-none p-3 resize-none text-start align-top"
          placeholder="نظر خود را بنویسید..."
        ></textarea>
      </div>
      {/* buttons */}
      <div className="p-1 flex md:justify-end xs:justify-center">
        <button className="bg-green-500 hover:bg-green-600  transition h-10 w-30 rounded-xl shadow-lg text-white p-1 cursor-pointer text-center">
            ثبت نظر
        </button>
      </div>
    </div>
  );
};

export default AddComment;
