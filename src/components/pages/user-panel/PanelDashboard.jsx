import React from "react";
import ImageFedback from "../../partials/image-fedback/imageFedback";
import userPic from "../../../assets/pics/userPanel/user-pic.png";
import DashboardOption from "./DashboardOption";

const PanelDashboard = () => {
  return (
    <div className="panel-dashboard w-full h-full bg-[#01CEC9] pt-[30px] pr-[10px] pb-[15px]">
      <div className="pic-item-control flex flex-col items-center">
        <div
          className="pic-control w-[100px] h-[100px] rounded-[50%] overflow-hidden
            drop-shadow-[0_1px_2px_#00000040]"
        >
          <ImageFedback pic={userPic} />
        </div>
        <h1 className="text-[17px] font-extrabold text-[#004744] font-b-yekan mt-5">
          فلان فلانی خوش آمدید
        </h1>
        <div className="hr-control w-full flex justify-center mt-6">
            <hr className="outline-0 border-0 w-[85%] h-[1px] bg-[#14BAB6]"/>
        </div>
        <DashboardOption/>
      </div>
    </div>
  );
};

export default PanelDashboard;
