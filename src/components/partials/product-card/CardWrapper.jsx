import React from 'react'
import productPic from "../../../assets/pics/product/khafan.jpg"
import productPic2 from "../../../assets/pics/product/product.png"
import TeacherSection from './teacherSection'
import ScoreSection from './ScoreSection'
import PriceSection from './PriceSection'

const CardWrapper = ({data, timeFlag, cardClick}) => {

  const { title, teacherName, levelName, tumbImageAddress, cost, likeCount, courseId } = data

  const imageClickHandler = (productId) => {
    cardClick(productId)
  }

  return (
    <div className='card-container bg-[#FFFFFF] col-span-1 drop-shadow-[0_1px_2px_#00000040] rounded-[15px] px-[12px] pb-[12px]'>
      <div className="item-control mt-[-24px]">
        <div className="image-control overflow-hidden rounded-[10px]
          flex justify-center items-center drop-shadow-[0_1px_4px_#00000040]"
        >
            <img 
              src={tumbImageAddress && tumbImageAddress !== "Not-set" ? tumbImageAddress : productPic2}
              alt=""
              className='h-[159px] w-[246px] cursor-pointer'
              onClick={() => imageClickHandler(courseId)}
            />
        </div>
        <p className='w-[70%] text-ellipsis overflow-hidden text-nowrap course-name text-[#444444]
          font-[800] text-[18px] mt-[8px] indent-[4px]'
          title={title}
        >{title}</p>
        <div className='teacherName-section-container flex items-center justify-between mt-[26px]'>
          <TeacherSection studentsOfNum={likeCount} teacherName={teacherName}/>
        </div>
        <div className="score-section-container flex items-center justify-between mt-[8px]">
          <ScoreSection levelText={levelName} timeFlag={timeFlag} timeText={"15.30"}/>
        </div>
        <div className="hr-control flex justify-center mt-[11px]">
          <hr className='outline-0 border-0 w-[94%] h-[1px] bg-gray-200'/>
        </div>
        <div className="price-section-control flex items-center justify-between mt-[15px] mb-[3px]">
          <PriceSection price={cost}/>
        </div>
      </div>
    </div>
  )
}

export default CardWrapper
