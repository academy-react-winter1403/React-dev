import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import {
  LastAuthorizeWrapper,
  LastCoursesWrapper,
  LastLandingWrapper,
} from "../../screens";
import { authorizeRouterArray } from "./authorize.router";
import LastArticlesAndNewsWrapper from "./../../screens/ArticlesAndNews/index";
import{
  LastArticleDetailWrapper,
  LastCourseDetailWrapper,
  LastUsserPanelWrapper,
} from "../../screens";
import Error from "../../components/partials/ErrorNotFound/Error";

import { userPanelRoute } from "./userPanel.router";


export const commonRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <LastLandingWrapper /> },
      {
        path: "/Register",
        element: <LastAuthorizeWrapper />,
        children: [...authorizeRouterArray],
      },
      { path: "/landing", element: <LastLandingWrapper /> },
      { path: "/courses", element: <LastCoursesWrapper /> },
      { path: "/detail/:id", element: <LastCourseDetailWrapper /> },
      { path: "/article-detail/:id", element: <LastArticleDetailWrapper /> },
      { path: "*", element: <Error /> },
      { path: "/user-panel", element: <LastUsserPanelWrapper />, children: [...userPanelRoute] },
    ],
  },
]);
