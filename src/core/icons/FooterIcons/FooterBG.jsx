// import React from "react";
// import footerBgImage from "../../../assets/pics/Bg/footerbg.png"

// const FooterBG = ({ children, itemTop, itemLeft }) => {
//   return (
//     <div className="footer-bg relative pt-[65px] pb-[18px]"
//       style={{
//         background: `url(${footerBgImage})`,
//         backgroundSize: "100% 100%",
//         backgroundRepeat: "no-repeat"
//       }}
//     >
//       {/* <svg
//         className="w-full h-full"
//         viewBox="0 0 1440 364"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <foreignObject x="-522" y="-10" width="2504" className="h-full">
//           <div
//             xmlns="http://www.w3.org/1999/xhtml"
//             style={{
//               backdropFilter: "blur(5px)",
//               clipPath: "url(#bgblur_0_108_109_clip_path)",
//               height: "100%",
//               width: "100%",
//             }}
//           ></div>
//         </foreignObject>
//         <path
//           data-figma-bg-blur-radius="10"
//           d="M-512 0L106.75 27.75L416.125 41.625L570.812 48.5625L648.156 52.0312C648.156 52.0312 705 27.75 725.5 27.75C746 27.75 803.406 52.0312 803.406 52.0312L881.312 48.5625L1037.12 41.625L1348.75 27.75L1972 0V496L1348.75 468L1037.12 454L881.312 447L803.406 443.5C803.406 443.5 742 468 725.5 468C709 468 648.156 443.5 648.156 443.5L570.812 447L416.125 454L106.75 468L-512 496V0Z"
//           fill="#01CEC9"
//           fill-opacity="0.15"
//         />

//         <defs>
//           <clipPath
//             id="bgblur_0_108_109_clip_path"
//             transform="translate(522 10)"
//           >
//             <path d="M-512 0L106.75 27.75L416.125 41.625L570.812 48.5625L648.156 52.0312C648.156 52.0312 705 27.75 725.5 27.75C746 27.75 803.406 52.0312 803.406 52.0312L881.312 48.5625L1037.12 41.625L1348.75 27.75L1972 0V496L1348.75 468L1037.12 454L881.312 447L803.406 443.5C803.406 443.5 742 468 725.5 468C709 468 648.156 443.5 648.156 443.5L570.812 447L416.125 454L106.75 468L-512 496V0Z" />
//           </clipPath>
//         </defs>
//       </svg> */}
//       <div
//         className="footer-item-control w-full h-full flex items-end"
//         // style={{ top: itemTop, left: itemLeft }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default FooterBG;


import footerBgImage from "../../../assets/pics/Bg/footerbg.png"
import itemBg2 from "../../../assets/pics/landing/itemBg2.png"
import useTheme from "../../hooks/HookTheme/useTheme";
const CategoryBG = ({ itemTop = 0, itemLeft = 0, children }) => {
  const { mode } = useTheme();

  const bgImage = mode === "dark" ? itemBg2 : footerBgImage;

  return (
    <div
      className="relative w-full pt-[65px] pb-[18px]  flex justify-center items-center"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat"
      }}
    >
      {children}
    </div>
  );
};

export default CategoryBG;