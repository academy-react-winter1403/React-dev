import React from "react";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMediaBtn = () => {
  return (
    <div className="flex flex-row flex-nowrap justify-between w-[159px] h-[35px]">
      <div
        className="rounded-full bg-[#008D8A] flex items-center justify-center cursor-pointer
                    lg:w-[35px] lg:h-[35px] xs:w-[23px] xs:h-[23px]"
      >
        <FaLinkedinIn className="text-white" />
      </div>
      <div
        className="rounded-full bg-[#008D8A] flex items-center justify-center cursor-pointer
                    lg:w-[35px] lg:h-[35px] xs:w-[23px] xs:h-[23px]"
      >
        <SlSocialYoutube className="text-white" />
      </div>
      <div
        className="rounded-full bg-[#008D8A] flex items-center justify-center cursor-pointer
                    lg:w-[35px] lg:h-[35px] xs:w-[23px] xs:h-[23px]"
      >
        <FaInstagram className="text-white" />
      </div>
      <div
        className="rounded-full bg-[#008D8A] flex items-center justify-center cursor-pointer
                    lg:w-[35px] lg:h-[35px] xs:w-[23px] xs:h-[23px]"
      >
        <LiaTelegram className="text-white" />
      </div>
    </div>
  );
};

export default SocialMediaBtn;
