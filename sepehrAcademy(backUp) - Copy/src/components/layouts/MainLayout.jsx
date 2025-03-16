import React from "react";
import HeaderWrapper from "../partials/header/HeaderWrapper";
import FooterWrapper from "../partials/footer/FooterWrapper";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <HeaderWrapper />
      <Outlet />
      <FooterWrapper />
    </>
  );
};

export default MainLayout;
