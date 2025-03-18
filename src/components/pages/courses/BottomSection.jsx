import React from 'react'
import FilterLabel from './FilterLabel'
import { technologyData } from '../../../core/constants/courses-datas/filter-data'
import FilterBox from './FilterBox'

const BottomSection = () => {
  return (
    <div className='bottom-section-container w-full mt-16'>
      <div className="main w-[50%]">
        <div className="sort-viw-btn-control"></div>
        <div className="product-card-container"></div>
      </div>
      <div className="side p-2 bg-[#FFFFFF] drop-shadow-[0_1px_2px_#0000004D]">
        <FilterLabel/>
        <FilterBox/>
      </div>
    </div>
  )
}

export default BottomSection
