import React from "react";
import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import { commonRouter } from "./common.router";

const RouterProvider = () => {
  return <ReactRouterProvider router={commonRouter}/>;
};

export default RouterProvider;
