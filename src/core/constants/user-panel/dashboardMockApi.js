import dashboardIcon from "../../../assets/pics/userPanel/dashboard.svg"
import userInformationIcon from "../../../assets/pics/userPanel/user.svg"
import myCourseIcon from "../../../assets/pics/userPanel/myCourse.svg"
import myReservedCourseIcon from "../../../assets/pics/userPanel/reservedCourse.svg"
import myEyeIcon from "../../../assets/pics/userPanel/myEye.svg"
import myInterestIcon from "../../../assets/pics/userPanel/Interest.svg"
import settingIcon from "../../../assets/pics/userPanel/SecuritySetting.svg"
import ExitIcon from "../../../assets/pics/userPanel/exit.svg"

// export const dashboardMockApi = [
//     {text: " داشبورد ", icon: dashboardIcon},
//     {text: " اطلاعات کاربری ", icon: userInformationIcon},
//     {text: " دوره های من ", icon: myCourseIcon},
//     {text: " دوره های رزرو شده ", icon: myReservedCourseIcon},
//     {text: " دیدگاه های من ", icon: myEyeIcon},
//     {text: " علاقه مندی ها ", icon: myInterestIcon},
//     {text: " تنظیمات امنیتی ", icon: settingIcon},
//     {text: " خروج از حساب " , icon:ExitIcon}
// ]

export const dashboardMockApi = [
  { icon: dashboardIcon, textKey: "dashboard" },
  { icon: userInformationIcon, textKey: "userInformation" },
  { icon: myCourseIcon, textKey: "myCourses" },
  { icon: myReservedCourseIcon, textKey: "reservedCourses" },
  { icon: myEyeIcon, textKey: "myComments" },
  { icon: myInterestIcon, textKey: "favorites" },
  { icon: settingIcon, textKey: "securitySettings" },
  { icon: ExitIcon, textKey: "logout" }
];
