import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import { LastAuthorizeWrapper, LastCoursesWrapper, LastLandingWrapper, LastArticleDetailWrapper } from "../../screens";

export const commonRouter = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    children: [
        {path: "/login", element: <LastAuthorizeWrapper/>},
        {path: "/landing", element: <LastLandingWrapper/>},
        {path: "/courses", element: <LastCoursesWrapper/>},
        {path: "/article-detail", element: <LastArticleDetailWrapper/>}
    ]
}])