import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import { LastAuthorizeWrapper, LastCoursesWrapper, LastLandingWrapper } from "../../screens";
import { authorizeRouterArray } from "./authorize.router";

export const commonRouter = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    children: [
        {path: "/Register", element: <LastAuthorizeWrapper/>, children:[...authorizeRouterArray]},
        {path: "/landing", element: <LastLandingWrapper/>},
        {path: "/courses", element: <LastCoursesWrapper/>}
    ]
}])