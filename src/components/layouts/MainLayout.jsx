import React from "react";
import HeaderWrapper from "../partials/header/HeaderWrapper";
import FooterWrapper from "../partials/footer/FooterWrapper";
import { Outlet } from "react-router-dom";
import { Themes } from "../partials";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  const Location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <HeaderWrapper />
      <Outlet />
      {/* <Themes/> */}
      {currentPath !== "/Authorize/Register/step1" &&
        currentPath !== "/Authorize/Register/step2" &&
        currentPath !== "/Authorize/Register/step3" &&
        currentPath !== "/Authorize/Login/step1" &&
        currentPath !== "/Authorize/Login/step2" &&
        currentPath !== "/Authorize/forget-password/step1" &&
        currentPath !== "/Authorize/forget-password/step2" && <FooterWrapper />}
      <ToastContainer />
      {/* <FooterWrapper /> */}
    </>
  );
};

export default MainLayout;
