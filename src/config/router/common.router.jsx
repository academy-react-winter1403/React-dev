import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import { LastAuthorizeWrapper, LastCoursesWrapper, LastLandingWrapper } from "../../screens";
import { authorizeRoutArray } from "./authorize.router";

export const commonRouter = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    children: [
        {path: "/", element: <LastLandingWrapper/>},
        {path: "/landing", element: <LastLandingWrapper/>},
        {path: "/login", element: <LastAuthorizeWrapper/>, children: [...authorizeRoutArray]},
        {path: "/courses", element: <LastCoursesWrapper/>}
    ]
}])