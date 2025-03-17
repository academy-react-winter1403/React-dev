import React from 'react'
import FilterLabel from './FilterLabel'

const BottomSection = () => {
  return (
    <div className='bottom-section-container w-full mt-16'>
      <div className="main w-[50%]">
        <div className="sort-viw-btn-control"></div>
        <div className="product-card-container"></div>
      </div>
      <div className="side w-[40%]">
        <FilterLabel/>
      </div>
    </div>
  )
}

export default BottomSection
