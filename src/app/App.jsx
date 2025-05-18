import React, { useEffect, useState } from "react";
import RouterProvider from "../config/router/index.router";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { changeClientStatus } from "../redux/actions";
import { NetworkError } from "../components/partials";
import "react-toastify/dist/ReactToastify.css";
import '../core/utility/Bilingual/I18n';
import i18n from "../core/utility/Bilingual/I18n";
// import './i18n';

const App = () => {
  const dispatch = useDispatch()
  const { clientStatus } = useSelector((state) => state);
  const { clientStatusFlag } = clientStatus;
  // console.log(clientStatusFlag);

  const [dir, setDir] = useState(i18n.language === "fa" ? "rtl" : "ltr");

  //  Change direction dynamically on language switch
  // useEffect(() => {
  //   const handleLangChange = (lng) => {
  //     const newDir = lng === "fa" ? "rtl" : "ltr";
  //     document.documentElement.setAttribute("dir", newDir);
  //     setDir(newDir);
  //   };

  //   handleLangChange(i18n.language); // Initial

  //   i18n.on("languageChanged", handleLangChange); // On change

  //   return () => {
  //     i18n.off("languageChanged", handleLangChange);
  //   };
  // }, []);




  useEffect(() => {
  document.documentElement.setAttribute("dir", "rtl");
}, []);



  useEffect(() => {
    dispatch(changeClientStatus(navigator.onLine))
  }, []);

  window.addEventListener("online", () => {
    dispatch(changeClientStatus(true))
  });
  window.addEventListener("offline", () => {
    dispatch(changeClientStatus(false))
  });

  return (
    // <main dir="rtl" className={`w-full bg-[var(--bg-main)]`}>
    //  <main dir={i18n.language === "fa" ? "rtl" : "ltr"} className={`w-full  bg-[var(--bg-main)] control darkMode`}> 
     <main dir={dir} className="w-full bg-[var(--bg-main)]"> 
      <ToastContainer position="top-right" autoClose={2000} rtl={true}  />
      {/* <div className=""> */}
        {clientStatusFlag ? <RouterProvider /> : <NetworkError classStyles={"w-full h-[731px] border"}/>}
      {/* </div> */}
    </main>
  );
};

export default App;