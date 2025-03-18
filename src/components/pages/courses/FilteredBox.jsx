import React from 'react'
import { IoIosArrowUp } from "react-icons/io";

const FilteredBox = () => {
  return (
    <div className='filter-box-control'>
        <div className="top">
            <IoIosArrowUp style={{color: "#ccc"}}/>
            <p> تکنولوژی </p>
        </div>
    </div>
  )
}

export default FilteredBox
