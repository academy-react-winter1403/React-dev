import React from "react";
import { GrFormView } from "react-icons/gr";
import { ImageFeadBackCircle } from "../../../common/ImageFeadBack";

const ViewCard = ({ title, imageAddress, onClick }) => {
  return (
    <div className="card-control flex items-center mt-4 mr-2.5">
      <div className="avatar-control w-[80%] flex items-center gap-3">
        <ImageFeadBackCircle imageAddress={imageAddress} width={"w-12"} height={"h-12"}/>
        <p className="w-[50%] text-ellipsis overflow-hidden text-nowrap text-xs font-bold">
          {title}
        </p>
      </div>
      <GrFormView size={28} className="cursor-pointer" color="red" onClick={onClick}/>
    </div>
  );
};

export default ViewCard;
