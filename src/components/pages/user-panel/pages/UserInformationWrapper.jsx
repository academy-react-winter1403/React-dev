import React from "react";
import { Outlet } from "react-router-dom";

const UserInformationWrapper = () => {

  return (
    <div className="useer-information-wrapper w-full flex flex-col items-center">
      <div className="user-information-wrapper-control w-[90%] p-1">
        <Outlet/>
      </div>
    </div>
  );
};

export default UserInformationWrapper;