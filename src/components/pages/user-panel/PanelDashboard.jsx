import React from "react";
import ImageFedback from "../../partials/image-fedback/imageFedback";
import userPic from "../../../assets/pics/userPanel/user-pic.png";
import DashboardOption from "./dosboard/DashboardOption";
import { useSelector } from "react-redux";
import { IoMdCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

const PanelDashboard = ({ closeBtnClick }) => {
  const { userProfileInfo } = useSelector((state) => state);
  const { userProfileInfoData } = userProfileInfo;
  const { t } = useTranslation();
  
  if (userProfileInfoData) {
    var { fName, lName, userImage } = userProfileInfoData;
    var [data] = userImage;
    if (data) var { puctureAddress } = data;
  }

  return (
    <div
      className={`panel-dashboard w-full h-full bg-(--panel-dashboard) min-lg:pt-[30px] 
      max-lg:pt-2.5 pr-[10px] pb-[15px]`}
    >
      <div className="close-btn-control hidden justify-end ml-4 cursor-pointer max-lg:flex">
        <IoMdCloseCircle
          size={35}
          className="text-[#003B39]"
          onClick={closeBtnClick}
        />
      </div>
      <div className="pic-item-control flex flex-col items-center">
        <div
          className="pic-control w-[100px] h-[100px] rounded-[50%] overflow-hidden
            drop-shadow-[0_1px_2px_#00000040]"
        >
          <ImageFedback pic={userPic} imageAddress={puctureAddress} />
        </div>
        <h1 className="text-[17px] font-extrabold text-[#004744] font-b-yekan mt-5">
          <span className="name">{fName}</span>
          <span className="family">{` ${lName}`}</span>
          <span className="welcoome-text max-xl:text-[13px] max-lg:text-[11px]">
            {" "}
            {/* خوش آمدید{" "} */}
            {t("welcome")}{" "}
          </span>
        </h1>
        <div className="hr-control w-full flex justify-center mt-6">
          <hr className="outline-0 border-0 w-[85%] h-[1px] bg-[#14BAB6]" />
        </div>
        <DashboardOption />
      </div>
    </div>
  );
};

export default PanelDashboard;
