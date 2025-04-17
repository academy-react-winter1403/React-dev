import {
  DashboardPage,
  MyCoursePage,
  UserInformationPage,
} from "../../components/pages/user-panel";

export const userPanelRoute = [
  { path: "/user-panel/dashboard", element: <DashboardPage /> },
  { path: "/user-panel", element: <DashboardPage /> },
  { path: "/user-panel/user-information", element: <UserInformationPage /> },
  { path: "/user-panel/my-course", element: <MyCoursePage /> },
];
