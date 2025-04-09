import React from "react";
import HeaderWrapper from "../partials/header/HeaderWrapper";
import FooterWrapper from "../partials/footer/FooterWrapper";
import { Outlet } from "react-router-dom";
import { Themes } from "../partials";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  const Location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <HeaderWrapper />
      <Outlet />
      {/* <Themes/> */}
      {currentPath !== "/Register/step1" &&
        currentPath !== "/Register/step2" &&
        currentPath !== "/Register/step3" &&
        currentPath !== "/Register/step4" &&
        currentPath !== "/Register/step5" && <FooterWrapper />}
    </>
  );
};

export default MainLayout;
