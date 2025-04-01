import React from "react";
import FooterAuthorize from "../partials/footerAuthorize/FooterAuthorize";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default LoginLayout;