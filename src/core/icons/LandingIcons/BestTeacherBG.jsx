import React from "react";
import itemBg from '../../../assets/pics/Bg/TeacherBg.png'

const BestTeacherBG = ({children}) => {
  return (
    <div className="relative w-full h-full flex justify-center items-center"
            style={{
              background: `url(${itemBg})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat"
            }}
    >
      {/* <svg
        // width="1440"
        // height="402"
        className="w-full h-full"
        viewBox="0 0 1440 402"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-524" y="-3" width="2490" height="408">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
           
            style={{
                backdropFilter: "blur(1.5px)",
                clipPath: "url(#bgblur_0_101_299_clip_path)",
                height: "100%",
                width: "100%",
              }}
          ></div>
        </foreignObject>
        <path
          data-figma-bg-blur-radius="3"
          d="M-521 0L97.75 22.4909L407.125 33.7364L561.812 39.3591L639.156 42.1705C639.156 42.1705 696 22.4909 716.5 22.4909C737 22.4909 794.406 42.1705 794.406 42.1705L872.312 39.3591L1028.12 33.7364L1339.75 22.4909L1963 0V402L1339.75 379.306L1028.12 367.96L872.312 362.286L794.406 359.45C794.406 359.45 731.5 357.384 715 357.384C698.5 357.384 639.156 359.45 639.156 359.45L561.812 362.286L407.125 367.96L97.75 379.306L-521 402V0Z"
          fill="#01CEC9"
          fillOpacity="0.3"
        />
        <defs>
          <clipPath
            id="bgblur_0_101_299_clip_path"
            transform="translate(524 3)"
          >
            <path d="M-521 0L97.75 22.4909L407.125 33.7364L561.812 39.3591L639.156 42.1705C639.156 42.1705 696 22.4909 716.5 22.4909C737 22.4909 794.406 42.1705 794.406 42.1705L872.312 39.3591L1028.12 33.7364L1339.75 22.4909L1963 0V402L1339.75 379.306L1028.12 367.96L872.312 362.286L794.406 359.45C794.406 359.45 731.5 357.384 715 357.384C698.5 357.384 639.156 359.45 639.156 359.45L561.812 362.286L407.125 367.96L97.75 379.306L-521 402V0Z" />
          </clipPath>
        </defs>
      </svg> */}
      <div className="w-full h-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default BestTeacherBG;
