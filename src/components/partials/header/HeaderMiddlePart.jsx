// import React from "react";
// import { HeaderItemsText } from "../../../core/constants/LandingMockApi/HeaderItemsMock";
// import { useNavigate } from "react-router-dom";

// const HeaderMiddlePart = () => {
//   const navigate = useNavigate();
//   return (
//     <div
//       className="text-center
//               "
//     >
//       <ul
//         className="flex flex-row flex-nowrap justify-center mt-2.5 font-b-yekan gap-6 text-[#555555] text-[17px] font-normal whitespace-nowrap
//                 lg:text-[17px] md:text-[14px] sm:text-[11px] xs:text-[11px]"
//       >
//         {HeaderItemsText.map((item, index) => (
//           <li
//             key={index}
//             onClick={() => navigate(item.path)}
//             className={`cursor-pointer relative ${
//               index === 0
//                 ? "before:absolute before:bottom-[-4px] before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-[#F3F3F300] before:via-[#E48900] before:to-[#F3F3F300] content-['']"
//                 : ""
//             }`}
//           >
//             {item.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HeaderMiddlePart;

import React from "react";
import { HeaderItemsText } from "../../../core/constants/LandingMockApi/HeaderItemsMock";
import { useNavigate, useLocation } from "react-router-dom";
import { dashboardMockApi } from "../../../core/constants";

const HeaderMiddlePart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="text-center">
      <ul className="flex flex-row flex-nowrap justify-center mt-2.5 font-b-yekan gap-6 text-[#555555] text-[17px] font-normal whitespace-nowrap lg:text-[17px] md:text-[14px] sm:text-[11px] xs:text-[11px]">
        {HeaderItemsText.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <li
              key={index}
              onClick={() => navigate(item.path)}
              className={`cursor-pointer relative transition-all duration-200 hover:text-[#E48900] ${
                isActive ? "text-[#E48900]" : ""
              }`}
            >
              {item.name}
              {isActive && (
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-[#F3F3F300] via-[#E48900] to-[#F3F3F300]"></span>
              )}
            </li>
          );
        })}
      </ul>
    </div>

    // <div className="text-center">
    //   <ul className="flex flex-row flex-nowrap justify-center mt-2.5 font-b-yekan gap-6 text-[#555555] text-[17px] font-normal whitespace-nowrap lg:text-[17px] md:text-[14px] sm:text-[11px] xs:text-[11px]">
    //     {dashboardMockApi.map((userPanelUrl) => {
    //       return (
    //       <>
    //         {location.pathname !== `/user-panel` ||
    //           (location.pathname !== `/user-panel${userPanelUrl.text}` &&
    //             HeaderItemsText.map((item, index) => {
    //               const isActive = location.pathname === item.path;
    //               return (
    //                 <li
    //                   key={index}
    //                   onClick={() => navigate(item.path)}
    //                   className={`cursor-pointer relative transition-all duration-200 hover:text-[#E48900] ${
    //                     isActive ? "text-[#E48900]" : ""
    //                   }`}
    //                 >
    //                   {item.name}
    //                   {isActive && (
    //                     <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-[#F3F3F300] via-[#E48900] to-[#F3F3F300]"></span>
    //                   )}
    //                 </li>
    //               );
    //             }))}
    //       </>

    //       )
    //     })}
    //   </ul>
    // </div>
  );
};

export default HeaderMiddlePart;
