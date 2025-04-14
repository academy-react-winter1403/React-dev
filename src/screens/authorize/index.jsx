import React from "react";
import Steps1 from "../../components/pages/authorize/register/RegisterSteps1";
import Steps2 from "../../components/pages/authorize/register/RegisterSteps2";
import Steps3 from "../../components/pages/authorize/register/RegisterSteps3";
import Steps4 from "../../components/pages/authorize/login/LoginSteps1";
import Steps5 from "../../components/pages/authorize/login/LoginSteps2";
import { Outlet } from "react-router-dom";

const LastAuthorizeWrapper = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default LastAuthorizeWrapper;
