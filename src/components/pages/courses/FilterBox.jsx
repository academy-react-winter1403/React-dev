import React from 'react'
import { IoIosArrowUp } from "react-icons/io";

const FilterBox = () => {
  return (
    <div className='filter-box-control w-full'>
        <div className="top">
            <p> تکنولوژی </p>
            <IoIosArrowUp style={{color: "#ccc"}}/>
        </div>
    </div>
  )
}

export default FilterBox
