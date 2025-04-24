import {
  DashboardSection,
  MyCourseSection,
  UserInformation,
  UserInformationEditPage,
  UserInformationWrapper,
} from "../../components/pages/user-panel";
import CourseReserveSection from "../../components/pages/user-panel/pages/CourseReserveSection";

export const userPanelRoute = [
  { path: "/user-panel/dashboard", element: <DashboardSection /> },
  { path: "/user-panel", element: <DashboardSection /> },
  {
    path: "/user-panel/user-information",
    element: <UserInformationWrapper />,
    children: [
      {
        path: "/user-panel/user-information",
        element: <UserInformation />,
      },
      {
        path: "/user-panel/user-information/edit",
        element: <UserInformationEditPage />,
      },
    ],
  },
  { path: "/user-panel/my-course", element: <MyCourseSection /> },
  { path: "/user-panel/course-reserve" , element: <CourseReserveSection />}
];
