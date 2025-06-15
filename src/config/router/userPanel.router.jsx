import {
  DashboardSection,
  MyCourseSection,
  UserInformation,
  UserInformationEditPage,
  UserInformationWrapper,
} from "../../components/pages/user-panel";
import MyCourseDetailWrpper from "../../components/pages/user-panel/pages/course-payment-pages/MyCourseDetailWrpper";
import CourseReserveSection from "../../components/pages/user-panel/pages/CourseReserveSection";
import Favorite from "../../components/pages/user-panel/pages/Favorite";
import MyCourseWrapper from "../../components/pages/user-panel/pages/MyCourseWrapper";
import MyViews from "../../components/pages/user-panel/pages/MyViews";
import SecorationSetting from "../../components/pages/user-panel/pages/SecorationSetting";

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
  { path: "/user-panel/my-course", element: <MyCourseWrapper />,
    children: [
      {path: "/user-panel/my-course", element: <MyCourseSection />},
      {path: "/user-panel/my-course/courseDetailView", element: <MyCourseDetailWrpper />},
    ]
   },
  { path: "/user-panel/my-course-detail", element: <MyCourseDetailWrpper /> },
  { path: "/user-panel/course-reserve" , element: <CourseReserveSection />},
  { path: "/user-panel/my-views", element: <MyViews /> },
  { path: "/user-panel/favorite" , element: <Favorite />},
  {path: "/user-panel/secoration-setting", element: <SecorationSetting />}
];