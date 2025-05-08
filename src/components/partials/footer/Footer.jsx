import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import FooterBG from "../../../core/icons/FooterIcons/FooterBG";
import FooterStamp from "../../../assets/pics/Bg/samandehi.png";
import Logo from "../../../core/icons/Logo";

import {
  FooterItemsP1,
  FooterItemsP2,
} from "../../../core/constants/LandingMockApi/FooterItemsMockApi";
import SocialMediaBtn from "../../common/SocialMediaBtn";
import FooterInfoBtn from "../../common/FooterInfoBtn";

const Footer = () => {
  return (
    <div className="bg-[var(--bg-main)]">
      <FooterBG itemTop={"0"} itemLeft={"0"}>
        <div className="footer-holder w-full h-[80%] flex justify-center max-w-[1515px] mx-auto">
          <div className="footer-container w-[90%]">
            <div 
              className="footer-container w-full flex flex-row flex-nowrap gap-x-[33px] justify-between items-end max-lg:text-[15px]
              max-md:flex-col-reverse max-md:items-center max-md:pt-[50px] max-md:gap-y-[14px]"
            >
              <div
                className="min-mdw-[30%] font-b-yekan flex justify-end flex-col gap-1 
                lg:block md:block sm:block  lg:h-[50%] sm:h-[90%]"
              >
                <p
                  className="text-[#006865] font-normal leading-6
                  lg:text-[14px] max-md:text-[17px] max-md:leading-[35px] max-md:text-center"
                >
                  مجموعه آموزشی فلان فعالیت خود را از سال ۱۳۹۰ آغاز کرده است و
                  <br /> امروز به بزرگترین کلونی برنامه نویسی شمال کشور تبدیل
                  شده است
                </p>
                <p
                  className="text-[#006865d2] font-bold leading-6 mt-[8px]
                  lg:text-[16px] max-md:text-[14px] max-md:text-center"
                >
                  ساری ، میدان خــزر ، جــاده فــرح آباد ، جنب <br /> مجتمع
                  دنیای آرزو &nbsp; &nbsp; &nbsp; &nbsp; 011 - 43332000
                </p>
              </div>
              <div className="center w-[40%] h-full flex flex-col items-center max-md:order-1">
                <div 
                  className="w-[132px]"
                >
                  <Logo />
                </div>
                <div className="bottom-item-control flex flex-col items-center gap-y-[20px] mt-[45px]">
                  <FooterInfoBtn />
                  <SocialMediaBtn />
                </div>
              </div>
              <div className="w-[30%] flex flex-row justify-between gap-4 items-center max-lg:flex-col-reverse">
                <div className="left-text-control h-[50%] flex flex-row items-start  justify-between font-b-yekan gap-7">
                  <ul className="flex flex-col max-md:gap-y-[10px]">
                    {FooterItemsP1.map((item, index) => (
                      <li
                        className="text-[#77A9A8] font-extrabold text-[14px] cursor-pointer flex items-center gap-3
                        lg:leading-7 md:leading-5.5 sm:leading-4 xs:leading-2 text-nowrap max-md:text-[17px]"
                        key={index}
                      >
                        <span
                          className="bg-[#489A98] rounded-full inline-block
                        lg:w-[5px] lg:h-[5px] xs:w-[4px] xs:h-[4px]"
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col max-md:gap-y-[10px]">
                    {FooterItemsP2.map((item, index) => (
                      <li
                        className="text-[#77A9A8] text-[14px] font-extrabold cursor-pointer flex items-center gap-3
                        lg:leading-7 md:leading-5.5 sm:leading-4 xs:leading-2 text-nowrap max-md:text-[17px]"
                        key={index}
                      >
                        <span
                          className="bg-[#489A98] rounded-full inline-block
                        lg:w-[5px] lg:h-[5px] xs:w-[4px] xs:h-[4px]"
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="footer-step-image-control max-xl:w-[58px] max-xl:h-[58px]"
                >
                  <img className="w-full h-full" src={FooterStamp} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FooterBG>
      <div className="w-full h-[42px] bg-[#008D8A] flex flex-row flex-nowrap justify-center items-center gap-1">
        <p
          className="font-b-yekan font-bold text-white 
          md:text-[16px] max-sm:text-[13px]"
        >
          کلیه حقوق این وب سایت متعلق به آموزشگاه فلان می باشد
        </p>
        <AiOutlineCopyrightCircle className="text-white mb-3" />
      </div>
    </div>
  );
};

export default Footer;
