import RegisterSteps1 from "../../components/pages/authorize/register/RegisterSteps1";
import RegisterSteps2 from "../../components/pages/authorize/register/RegisterSteps2";
import RegisterSteps3 from "../../components/pages/authorize/register/RegisterSteps3";
import LoginSteps1 from "../../components/pages/authorize/login/LoginSteps1";
import LoginSteps2 from "../../components/pages/authorize/login/LoginSteps2";
import ForgetPasswordTwoSteps from "../../components/pages/authorize/forget-password/ForgetPasswordTwoSteps";
import ForgetPasswordOneSteps from "../../components/pages/authorize/forget-password/ForgetPasswordOneSteps";

export const authorizeRouterArray = [
  { path: "/Authorize/Register/step1", element: <RegisterSteps1 /> },
  { path: "/Authorize/Register/step2", element: <RegisterSteps2 /> },
  { path: "/Authorize/Register/step3", element: <RegisterSteps3 /> },
  { path: "/Authorize/Login/step1", element: <LoginSteps1 /> },
  { path: "/Authorize/Login/step2", element: <LoginSteps2 /> },
  { path: "/Authorize/forget-password/step1", element: <ForgetPasswordOneSteps /> },
  {
    path: "/Authorize/forget-password/step2/:ConfigValue",
    element: <ForgetPasswordTwoSteps />,
  },
];
