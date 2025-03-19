import React from 'react'
import productPic from "../../../assets/pics/product/khafan.jpg"
import productPic2 from "../../../assets/pics/product/product.png"
import TeacherSection from './teacherSection'
import ScoreSection from './ScoreSection'

const CardWrapper = () => {
  return (
    <div className='card-container bg-[#FFFFFF] drop-shadow-[0_1px_2px_#00000040] rounded-[15px] px-[12px] pb-[12px]'>
      <div className="item-control relative top-[-24px]">
        <div className="image-control h-[159px] w-[246px] overflow-hidden rounded-[10px]
          flex justify-center items-center drop-shadow-[0_1px_4px_#00000040]"
        >
            <img src={productPic} alt="" className='w-[102%] h-[102%]'/>
        </div>
        <p className='course-name text-[#444444] font-[800] text-[18px] mt-[8px] indent-[4px]'> دوره پیشرفته دیزاین </p>
      </div>
      <div className='teacherName-section-container flex items-center justify-between'>
        <TeacherSection studentsOfNum={50} teacherName={"حامد نظری"}/>
      </div>
      <div className="score-section-container">
        <ScoreSection/>
      </div>
    </div>
  )
}

export default CardWrapper
