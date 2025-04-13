import React from 'react'
import { MdOutlineMenu } from "react-icons/md";

const MenuIcon = ({ click }) => {

  const clickHandler = () => {
    click()
  }

  return (
    <button className='gridBtn bg-[#FFFFFF] rounded-[1px_10px_1px_1px]' onClick={clickHandler}>
        <MdOutlineMenu size={28} style={{color: "#005B58"}}/>
    </button>
  )
}

export default MenuIcon
