import { createBrowserRouter } from "react-router-dom";
import Steps1 from './../../components/pages/authorize/steps/Steps1';
import Steps2 from './../../components/pages/authorize/steps/Steps2';
import Steps3 from './../../components/pages/authorize/steps/Steps3';
import Steps4 from './../../components/pages/authorize/steps/Steps4';
import Steps5 from './../../components/pages/authorize/steps/Steps5';

export const authorizeRoutArray = [
    {path: "/login/step1", element: <Steps1/>},
    {path: "/login/step2", element: <Steps2/>},
    {path: "/login/step3", element: <Steps3/>},
    {path: "/login/step4", element: <Steps4/>},
    {path: "/login/step5", element: <Steps5/>},
]

createBrowserRouter(authorizeRoutArray)