import React, { useEffect, useState } from "react";
import PanelDashboard from "./PanelDashboard";
import { Outlet } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { getDataUserPanel, getNewData } from "../../../core/services";
import { htttp } from "../../../core/services/interceptor";
import { getItemLocalStorage } from "../../../core/hooks/local-storage/getItemLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import {
  addLatestSserPanelNewsSlice,
  addUserProfileInfoData,
} from "../../../redux/actions";
import Aos from "aos";
import { motion } from "framer-motion";
import SelectProfileImage from "../../partials/UserPanel/SelectProfileImage";
import MapUserPanel from "../../partials/UserPanel/MapUserPanel";
import 'leaflet/dist/leaflet.css'

const UserPanelWrapper = () => {
  const dispatch = useDispatch();
  const token = getItemLocalStorage("token");
  const [menuFlag, setMenuFlag] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
    Aos.refresh();
  }, []);

  const { isError, isLoading, data } = getDataUserPanel(
    "userPanelProfileInformation",
    "/SharePanel/GetProfileInfo",
    token
  );

  if (!isLoading) {
    console.log(data);
    dispatch(addUserProfileInfoData(data));
  }

  const closeBtnClickHandler = () => {
    setMenuFlag(false)
  }

  return (
    <div className="user-panel-holder w-full flex justify-center">
      {/* <motion.div
        className="w-[70%]"
        initial={{y: "-50px", opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 2}}
      > */}
      <div
        className={
          !menuFlag
            ? `right-item-control w-[30%] h-full transition-all fixed right-[-320px] top-0 hidden
              max-lg:block z-10 `
            : `right-item-control w-[30%] h-full fixed right-0 top-0 hidden
              max-lg:block z-10 transition-all`
        }
      >
        {!isLoading && <PanelDashboard closeBtnClick={closeBtnClickHandler}/>}
      </div>
      <div
        className="dashboard-container w-[70%] max-lg:w-[90%] rounded-[10px] bg-[#FFFFFF]
                drop-shadow-[0_1px_2px_#00000040] flex items-start my-11 overflow-x-hidden relative"
      >
        <div className="rigth-item-control hidden w-[30%] min-lg:block">
          {!isLoading && <PanelDashboard />}
        </div>
        <div className="left-item-control w-[70%] max-lg:w-full h-full p-5">
          <div className="home-icon-control w-full flex justify-end">
            <TiHome size={25} className="text-[#01B4AF] cursor-pointer" />
          </div>
          <Outlet />
          {/* <SelectProfileImage /> */}
          {/* <MapUserPanel /> */}
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default UserPanelWrapper;
