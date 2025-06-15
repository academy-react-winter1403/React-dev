import React from 'react'
import pic from "../../assets/pics/user.jpg"

export const ImageFeadBackCircle = ({ imageAddress, width, height }) => {
  return <img src={imageAddress ? imageAddress : pic} className={`${width} ${height} rounded-[50%]`}/>
}


