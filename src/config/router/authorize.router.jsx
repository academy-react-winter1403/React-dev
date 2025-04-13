import Steps1 from "../../components/pages/authorize/steps/Steps1";
import Steps2 from "../../components/pages/authorize/steps/Steps2";
import Steps3 from "../../components/pages/authorize/steps/Steps3";
import Steps4 from "../../components/pages/authorize/steps/Steps4";
import Steps5 from "../../components/pages/authorize/steps/Steps5";
import {
  ForgetPasswordLayout,
  ForgetOneSteps,
} from "../../components/pages/authorize/forget-password";
import ForgetPasswordTwoSteps from "../../components/pages/authorize/forget-password/ForgetPasswordTwoSteps";

export const authorizeRouterArray = [
  { path: "/Register/step1", element: <Steps1 /> },
  { path: "/Register/step2", element: <Steps2 /> },
  { path: "/Register/step3", element: <Steps3 /> },
  { path: "/Register/step4", element: <Steps4 /> },
  { path: "/Register/step5", element: <Steps5 /> },
  {
    path: "/Register/forget-password",
    element: <ForgetPasswordLayout />,
    children: [
      { path: "/Register/forget-password/steps1", element: <ForgetOneSteps /> },
      { path: "/Register/forget-password/steps2", element: <ForgetPasswordTwoSteps/> },
    ],
  },
];
