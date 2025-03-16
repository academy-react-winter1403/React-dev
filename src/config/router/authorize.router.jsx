import { createBrowserRouter } from "react-router-dom";
import { commonRouter } from "./common.router";

export const authorizeRouter = createBrowserRouter([
    ...commonRouter,
    {
        path: "/login",
        // element: <
    }
])