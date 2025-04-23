import React, { useEffect } from "react";
import RouterProvider from "../config/router/index.router";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { changeClientStatus } from "../redux/actions";
import { NetworkError } from "../components/partials";


const App = () => {
  const dispatch = useDispatch()
  const { clientStatus } = useSelector((state) => state);
  const { clientStatusFlag } = clientStatus;
  console.log(clientStatusFlag);

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
    <main dir="rtl" className={`w-full min-2xl:w-[1536px] m-auto`}>
      <ToastContainer />
      <div className="control darkMode">
        {clientStatusFlag ? <RouterProvider /> : <NetworkError classStyles={"w-full h-[731px] border"}/>}
      </div>
    </main>
  );
};

export default App;
