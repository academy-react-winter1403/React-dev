import React from "react";
import HeaderWrapper from "../partials/header/HeaderWrapper";
import FooterWrapper from "../partials/footer/FooterWrapper";
import { Outlet, useLocation } from "react-router-dom";
import { Themes } from "../partials";
import { ToastContainer } from "react-toastify";
import LanguageTheme from "../common/LanguageTheme/LanguageTheme";
import VoiceNavigation from "../pages/voiceNavigation/VoiceNavigation";
import UserChatWidget from "../pages/chat/Chat";
import ChatModal from "../pages/chat/ChatModal";

const MainLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <HeaderWrapper />
      <VoiceNavigation />
      <UserChatWidget />
      <ChatModal />
      <Outlet />
      {/* <Themes/> */}
      {currentPath !== "/Authorize/Register/step1" &&
        currentPath !== "/Authorize/Register/step2" &&
        currentPath !== "/Authorize/Register/step3" &&
        currentPath !== "/Authorize/Login/step1" &&
        currentPath !== "/Authorize/Login/step2" &&
        currentPath !== "/Authorize/forget-password/step1" &&
        currentPath !== "/Authorize/forget-password/step2" && <FooterWrapper />}
      {/* <ToastContainer /> */}
      <LanguageTheme />
    </>
  );
};

export default MainLayout;
