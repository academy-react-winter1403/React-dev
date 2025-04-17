import React from "react";
import HeaderWrapper from "../partials/header/HeaderWrapper";
import FooterWrapper from "../partials/footer/FooterWrapper";
import { Outlet, useLocation } from "react-router-dom";
import { Themes } from "../partials";

const MainLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <HeaderWrapper />
      <Outlet />
      {/* <Themes/> */}
      <FooterWrapper />
    </>
  );
};

export default MainLayout;
