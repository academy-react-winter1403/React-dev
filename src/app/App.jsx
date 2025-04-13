import React from "react";
import RouterProvider from "../config/router/index.router";

const App = () => {
  return (
    <main dir="rtl" className="w-full min-2xl:w-[1536px] m-auto">
      <div className="control">
        <RouterProvider />
      </div>
    </main>
  );
};

export default App;
