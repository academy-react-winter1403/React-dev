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
// import { authorizeRouterArray } from "./authorize.router";
import { userPanelRoute } from "./userPanel.router";
import Error from "../../components/partials/ErrorNotFound/Error";

export const commonRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <LastLandingWrapper /> },
      {
        path: "/Authorize",
        element: <LastAuthorizeWrapper />,
        children: [...authorizeRouterArray],
      },
      { path: "/landing", element: <LastLandingWrapper /> },
      { path: "/courses", element: <LastCoursesWrapper /> },
      { path: "/ArticlesAndNews", element: <LastArticlesAndNewsWrapper /> },
      { path: "/detail/:id", element: <LastCourseDetailWrapper /> },
      { path: "/course-detail/:id", element: <LastCourseDetailWrapper /> },
      { path: "/article-detail/:id", element: <LastArticleDetailWrapper /> },
      { path: "/user-panel", element: <LastUsserPanelWrapper />, children: [...userPanelRoute] },
      { path: "*", element: <Error /> }
    ],
  },
]);
