// import React, { useEffect, useState } from "react";
// import PanelDashboard from "./PanelDashboard";
// import { Outlet } from "react-router-dom";
// import { TiHome } from "react-icons/ti";
// import { getDataUserPanel, getNewData } from "../../../core/services";
// // import { htttp } from "../../../core/services/interceptor";
// import { getItemLocalStorage } from "../../../core/hooks/local-storage/getItemLocalStorage";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   // addLatestSserPanelNewsSlice,
//   addUserProfileInfoData,
// } from "../../../redux/actions";
// import Aos from "aos";
// import { motion } from "framer-motion";
// import SelectProfileImage from './../../partials/UserPanel/SelectProfileImage';
// import MapUserPanel from './../../partials/UserPanel/MapUserPanel';

// const UserPanelWrapper = () => {
//   const dispatch = useDispatch();
//   const token = getItemLocalStorage("token");
//   const [menuFlag, setMenuFlag] = useState(true);

//   // localStorage.clear()

//   useEffect(() => {
//     Aos.init({
//       duration: 800,
//       once: false,
//     });
//     Aos.refresh();
//   }, []);

//   const { isError, isLoading, data } = getDataUserPanel(
//     "userPanelProfileInformation",
//     "/SharePanel/GetProfileInfo",
//     token
//   );

//   if (!isLoading) {
//     console.log(data);
//     dispatch(addUserProfileInfoData(data));
//   }

//   const closeBtnClickHandler = () => {
//     setMenuFlag(false);
//   };

//   return (
//     <div className="user-panel-holder w-full flex justify-center ">
//       {/* <motion.div
//         className="w-[70%]"
//         initial={{y: "-50px", opacity: 0}}
//         animate={{y: 0, opacity: 1}}
//         transition={{duration: 2}}
//       > */}
//       <div
//         className={
//           !menuFlag
//             ? `right-item-control w-[30%] h-full transition-all fixed right-[-320px] top-0 hidden
//               max-lg:block z-10 `
//             : `right-item-control w-[30%] h-full fixed right-0 top-0 hidden
//               max-lg:block z-10 transition-all`
//         }
//       >
//         {!isLoading && <PanelDashboard closeBtnClick={closeBtnClickHandler} />}
//       </div>
//       <div
//         className="dashboard-container w-[77%] max-lg:w-[90%] rounded-[10px] bg-(--user-panel) 
//                 drop-shadow-[0_1px_2px_#00000040] flex items-start my-11 overflow-x-hidden"
//       >
//         <div className="rigth-item-control hidden w-[28%] h-full min-lg:block ">
//           {!isLoading && <PanelDashboard />}
//         </div>
//         <div className="left-item-control w-[70%] max-lg:w-full h-full p-5">
//           <div className="home-icon-control w-full flex justify-end">
//             <TiHome size={25} className="text-[#01B4AF] cursor-pointer" />
//           </div>
//           <Outlet />

//           {/* <SelectProfileImage /> */}
//           {/* <MapUserPanel /> */}

//         </div>
//       </div>
//       {/* </motion.div> */}
//     </div>
//   );
// };

// export default UserPanelWrapper;













import React, { useEffect, useState } from "react";
import PanelDashboard from "./PanelDashboard";
import { Outlet } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { getDataUserPanel } from "../../../core/services";
import { getItemLocalStorage } from "../../../core/hooks/local-storage/getItemLocalStorage";
import { useDispatch } from "react-redux";
import { addUserProfileInfoData } from "../../../redux/actions";
import Aos from "aos";
import { useTranslation } from "react-i18next";

const UserPanelWrapper = () => {
  const dispatch = useDispatch();
  const token = getItemLocalStorage("token");
  const [menuFlag, setMenuFlag] = useState(true);

  const { i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

  useEffect(() => {
    Aos.init({ duration: 800, once: false });
    Aos.refresh();
  }, []);

  const { isError, isLoading, data } = getDataUserPanel(
    "userPanelProfileInformation",
    "/SharePanel/GetProfileInfo",
    token
  );

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(addUserProfileInfoData(data));
    }
  }, [isLoading, data, dispatch]);

  const closeBtnClickHandler = () => {
    setMenuFlag(false);
  };

  return (
    <div className={`user-panel-holder w-full flex justify-center`}>
      {/*  Mobile menu drawer */}
      <div
        className={`fixed top-0 h-full w-[70%] z-10 transition-all max-lg:block hidden
        ${menuFlag ? (isRTL ? "right-0" : "left-0") : (isRTL ? "-right-[320px]" : "-left-[320px]")}`}
      >
        {!isLoading && <PanelDashboard closeBtnClick={closeBtnClickHandler} />}
      </div>

      {/*  Main panel layout */}
      <div
        className={`dashboard-container w-[77%] max-lg:w-[90%] rounded-[10px] bg-[--user-panel] 
        drop-shadow-[0_1px_2px_#00000040] flex my-11 overflow-x-hidden ${
          isRTL ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Sidebar (Desktop only) */}
        <div className="hidden min-lg:block w-[28%] h-full">
          {!isLoading && <PanelDashboard />}
        </div>

        {/* Main Content */}
        <div className="w-[72%] max-lg:w-full h-full p-5">
          <div className="home-icon-control w-full flex justify-end">
            <TiHome size={25} className="text-[#01B4AF] cursor-pointer" />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserPanelWrapper;
