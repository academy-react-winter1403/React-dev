import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import { LastAuthorizeWrapper, LastCoursesWrapper, LastLandingWrapper } from "../../screens";

export const commonRouter = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    children: [
        {path: "/", element: <LastLandingWrapper/>},
        {path: "/landing", element: <LastLandingWrapper/>},
        {path: "/login", element: <LastAuthorizeWrapper/>},
        {path: "/courses", element: <LastCoursesWrapper/>}
    ]
}])