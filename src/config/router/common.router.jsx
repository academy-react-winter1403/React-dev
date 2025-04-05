import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import {
  LastAuthorizeWrapper,
  LastCoursesWrapper,
  LastLandingWrapper,
  LastArticleDetailWrapper,
  LastCourseDetailWrapper,
} from "../../screens";
import { authorizeRouterArray } from "./authorize.router";

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
      { path: "/course-detail/:id", element: <LastCourseDetailWrapper /> },
      { path: "/article-detail/:id", element: <LastArticleDetailWrapper /> },
    ],
  },
]);
