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
    <>
      <FooterBG itemTop={"0"} itemLeft={"0"}>
        <div className="footer-holder w-full h-[80%] flex justify-center">
          <div className="footer-container w-full min-2xl:w-[1356px] border border-red-600 h-[90%] flex flex-row flex-nowrap justify-between items-end whitespace-nowrap">
            <div className="font-b-yekan flex justify-end flex-col gap-1 
            lg:block md:block sm:block xs:hidden  lg:h-[50%] sm:h-[90%]">
              <p className="text-[#006865] font-normal leading-6
              lg:text-[14px]  md:text-[12px] sm:text-[10px]">
                مجموعه آموزشی فلان فعالیت خود را از سال ۱۳۹۰ آغاز کرده است و
                <br /> امروز به بزرگترین کلونی برنامه نویسی شمال کشور تبدیل شده
                است
              </p>
              <br />
              <p className="text-[#006865] font-bold leading-6
              lg:text-[16px] md:text-[14px] sm:text-[12px]">
                ساری ، میدان خــزر ، جــاده فــرح آباد ، جنب <br /> مجتمع دنیای
                آرزو &nbsp; &nbsp; &nbsp; &nbsp; 011 - 43332000
              </p>
            </div>
            <div className="h-full flex flex-col justify-between items-center">
              <div className="lg:w-[135px] lg:h-[50px] md:w-[120px] md-[40px] sm:w-[105px] sm:h-[30px] xs:w-[70px] xs-[10px]">
                <Logo />
              </div>
              <FooterInfoBtn/>
              <SocialMediaBtn/>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <div className="h-[50%] flex flex-row flex-nowrap justify-between font-b-yekan gap-7 items-center">
                <ul>
                  {FooterItemsP1.map((item, index) => (
                    <li
                      className="text-[#77A9A8] font-normal cursor-pointer flex items-center gap-3
                      lg:text-[16px] lg:leading-7 md:leading-5.5 md:text-[14px] sm:leading-4 sm:text-[12px] xs:leading-2 xs:text-[10px]"
                      key={index}
                    >
                      <span className="bg-[#489A98] rounded-full inline-block
                      lg:w-[5px] lg:h-[5px] xs:w-[4px] xs:h-[4px]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <ul>
                  {FooterItemsP2.map((item, index) => (
                    <li
                      className="text-[#77A9A8] font-normal cursor-pointer flex items-center gap-3
                      lg:text-[16px] lg:leading-7 md:text-[14px] md:leading-5.5 sm:leading-4 sm:text-[12px] xs:leading-2 xs:text-[10px]"
                      key={index}
                    >
                      <span className="bg-[#489A98] rounded-full inline-block
                      lg:w-[5px] lg:h-[5px] xs:w-[4px] xs:h-[4px]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex
              lg:h-[50%] xs:h-[30%]">
                <img className="contain" src={FooterStamp} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </FooterBG>
      <div className="w-full h-[42px] bg-[#008D8A] flex flex-row flex-nowrap whitespace-nowrap justify-center items-center gap-1">
        <p
          className="font-b-yekan font-bold text-white 
        md:text-[16px] xs:text-[10px]"
        >
          کلیه حقوق این وب سایت متعلق به آموزشگاه فلان می باشد
        </p>
        <AiOutlineCopyrightCircle className="text-white mb-3" />
      </div>
    </>
  );
};

export default Footer;
