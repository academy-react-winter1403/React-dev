import {
  DashboardSection,
  MyCourseSection,
  UserInformationPage,
} from "../../components/pages/user-panel";

export const userPanelRoute = [
  { path: "/user-panel/dashboard", element: <DashboardSection /> },
  { path: "/user-panel", element: <DashboardSection /> },
  { path: "/user-panel/user-information", element: <UserInformationPage /> },
  { path: "/user-panel/my-course", element: <MyCourseSection /> },
];
