import React from 'react'
import { MdOutlineMenu } from "react-icons/md";

const MenuIcon = ({ click,view}) => {

  const clickHandler = () => {
    click()
  }

  return (
    <button className={view ? 'gridBtn bg-white' : 'gridBtn bg-gray-200'} onClick={clickHandler}>
        <MdOutlineMenu size={28} style={{color: "#005B58",borderRadius:'1px 10px 1px 1px'}}/>
    </button>
  )
}

export default MenuIcon
// 'gridBtn bg-[#FFFFFF] rounded-[1px_10px_1px_1px]'