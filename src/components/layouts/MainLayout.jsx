import React from "react";
import HeaderWrapper from "../partials/header/HeaderWrapper";
import FooterWrapper from "../partials/footer/FooterWrapper";
import { Outlet } from "react-router-dom";
import { Themes } from "../partials";
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <>
      <HeaderWrapper />
      <Outlet />
      {/* <Themes/> */}
      <ToastContainer/>
      <FooterWrapper />
    </>
  );
};

export default MainLayout;
