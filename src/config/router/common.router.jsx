import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import {
  LastArticleDetailWrapper,
  LastAuthorizeWrapper,
  LastCourseDetailWrapper,
  LastCoursesWrapper,
  LastLandingWrapper,
  LastUsserPanelWrapper,
} from "../../screens";
import { authorizeRouterArray } from "./authorize.router";
import LastArticlesAndNewsWrapper from "./../../screens/ArticlesAndNews/index";
import { userPanelRoute } from "./userPanel.router";
import Error from "../../components/partials/ErrorNotFound/Error";
import LastTeacherWrapper from "../../screens/Teacher/LastTeacherWrapper";

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
      { path: "/article", element: <LastArticlesAndNewsWrapper /> },
      { path: "/detail/:id", element: <LastCourseDetailWrapper /> },
      { path: "/course-detail/:id", element: <LastCourseDetailWrapper /> },
      { path: "/article-detail/:id", element: <LastArticleDetailWrapper /> },
      { path: "/teachers", element: <LastTeacherWrapper/> },
      { path: "/user-panel", element: <LastUsserPanelWrapper />, children: [...userPanelRoute] },
      { path: "*", element: <Error /> }
    ],
  },
]);
