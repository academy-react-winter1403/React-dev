import React from 'react'
import { FaEye } from "react-icons/fa";
import ImageFedback from '../image-fedback/imageFedback';
import pic from "../../../assets/pics/userPanel/Ellipse48.png"
import { FaRegTrashCan } from "react-icons/fa6";

const UserPanelCard = ({ imageAddress, trashcanFlag, bgCalc }) => {

    const calc = bgCalc % 2

  return (
    <div className={`user-panel-card-container ${calc === 0 ? "bg-[#F6FFFF]" : "bg-[#F7F7F7]"}
        flex gap-x-1 mt-3.5 py-1 drop-shadow-[0_1px_2px_#00000026] rounded-md`
    }>
      <div className="right w-[10%] flex justify-center items-center">
        <div className="image-control w-[30px] h-[30px] rounded-[30px] overflow-hidden">
            <ImageFedback imageAddress={imageAddress} pic={pic}/>
        </div>
      </div>
      <div className="centerr w-[80%] border"></div>
      <div className="left w-[10%] flex justify-center items-center gap-x-3">
        <FaEye className={`${trashcanFlag ? "text-[#00BFB3]" : "text-[#E48900]"}`}/>
        {trashcanFlag && <FaRegTrashCan className='text-[#E48900]'/>}
      </div>
    </div>
  )
}

export default UserPanelCard
