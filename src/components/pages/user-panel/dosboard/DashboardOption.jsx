// import React, { useEffect, useState } from "react";
// import { dashboardMockApi } from "../../../../core/constants";
// import ImageFedback from "../../../partials/image-fedback/imageFedback";
// import { useLocation, useNavigate } from "react-router-dom";
// import { setItemLocalStorage } from './../../../../core/hooks/local-storage/setItemLocalstorage';
// import { deleteItemLocalStorage } from "../../../../core/hooks/local-storage/deleteItemLocalStorage";
// import { useTranslation } from "react-i18next";

// const DashboardOption = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [text, setText] = useState(" داشبورد ");
//   const { pathname } = location;
//   const { t, i18n } = useTranslation();

//   // console.log(pathname);
//   useEffect(() => {
//     pathname === "/user-panel/dashboard" ? setText(" داشبورد ") : null;
//     pathname === "/user-panel/user-information"
//       ? setText(" اطلاعات کاربری ")
//       : null;
//     pathname === "/user-panel/my-course" ? setText(" دوره های من ") : null;
//     pathname === "/user-panel/course-reserve"
//       ? setText(" دوره های رزرو شده ")
//       : null;
//     pathname === "/user-panel/my-views" ? setText(" دیدگاه های من ") : null;
//     pathname === "/user-panel/favorite" ? setText("علاقه مندی ها ") : null;
//     pathname === ("/user-panel/secoration-setting") ?
//     setText(" تنظیمات امنیتی ")
//       : null;
//   }, []);

//   const tabClickHandler = (value) => {
//     value === " داشبورد " ? navigate("/user-panel/dashboard") : null;
//     value === " اطلاعات کاربری "
//       ? navigate("/user-panel/user-information")
//       : null;
//     value === " دوره های من " ? navigate("/user-panel/my-course") : null;
//     value === " دوره های رزرو شده "
//       ? navigate("/user-panel/course-reserve")
//       : null;
//     value === " دیدگاه های من " ? navigate("/user-panel/my-views") : null;
//     value === " علاقه مندی ها " ? navigate("/user-panel/favorite") : null;
//     value === " تنظیمات امنیتی "
//       ? navigate("/user-panel/secoration-setting")
//       : null;

//       if (value === " خروج از حساب ") {
//         deleteItemLocalStorage("token")
//         deleteItemLocalStorage("UserId")
//         navigate("/Authorize/Login/step1")
//       }
//     setText(value);
//     console.log(location.pathname);
//   };

//   return (
//     <ul className="option-control w-full h-[563px] flex flex-col items-end gap-y-[15px] mt-8 checked: ">
//       {/* <RadioGroup> */}
//       {dashboardMockApi.map((item, index) => {
//         // console.log(item);
//         return (
//           // <Radio
//           //   value={item.text}
//           //   key={index}
//           //   classNames={{
//           //     base: "flex checked:bg-[#fff]",
//           //     hiddenInput: "checked:bg-[#fff]",
//           //     wrapper: "flex bg-[#fff] hidden checked:bg-[#fff]",
//           //     labelWrapper: "flex checked:bg-[#fff]",
//           //     control: "flex checked:bg-[#fff]",
//           //     label: "flex items-center checked:bg-[#fff]",
//           //   }}
//           // >
//           //   <div className="image-control w-[15px] h-[20px]">
//           //     <ImageFedback imageAddress={item.icon} />
//           //   </div>
//           //   <p>{item.text}</p>
//           // </Radio>
//           <li
//             className={`option w-[91%] flex items-center py-2.5 pr-3.5 rounded-tr-4xl rounded-br-4xl bg-(--bg-main)
//                 ${
//                   text === item.text
//                     ? `bg-[#FFFFFF] border-l-[5px] border-[#E48900] drop-shadow-[1px_1px_3px_#00000040]`
//                     : ""
//                 }  `}
//             key={index}
//             onClick={() => tabClickHandler(item.text)}
//           >
//             {text === item.text && (
//               <div className="image-control w-[15px] h-[20px]">
//                 <ImageFedback imageAddress={item.icon} />
//               </div>
//             )}
//             <p className="font-b-yekan text-[15px] text-[var(--dashboard-text-option)]  mr-2">
//               {item.text}
//             </p>
//           </li>
//         );
//       })}
//       {/* </RadioGroup> */}
//     </ul>
//   );
// };

// export default DashboardOption;




import React, { useEffect, useState } from "react";
import { dashboardMockApi } from "../../../../core/constants";
import ImageFedback from "../../../partials/image-fedback/imageFedback";
import { useLocation, useNavigate } from "react-router-dom";
import { setItemLocalStorage } from "../../../../core/hooks/local-storage/setItemLocalstorage";
import { deleteItemLocalStorage } from "../../../../core/hooks/local-storage/deleteItemLocalStorage";
import { useTranslation } from "react-i18next";

const DashboardOption = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const { t, i18n } = useTranslation();
  const [text, setText] = useState(t("dashboard"));

  const isRTL = i18n.language === "fa";

  useEffect(() => {
    switch (pathname) {
      case "/user-panel/dashboard":
        setText(t("dashboard"));
        break;
      case "/user-panel/user-information":
        setText(t("userInformation"));
        break;
      case "/user-panel/my-course":
        setText(t("myCourses"));
        break;
      case "/user-panel/course-reserve":
        setText(t("reservedCourses"));
        break;
      case "/user-panel/my-views":
        setText(t("myComments"));
        break;
      case "/user-panel/favorite":
        setText(t("favorites"));
        break;
      case "/user-panel/secoration-setting":
        setText(t("securitySettings"));
        break;
      default:
        break;
    }
  }, [pathname, t]);

  const tabClickHandler = (value) => {
    switch (value) {
      case t("dashboard"):
        navigate("/user-panel/dashboard");
        break;
      case t("userInformation"):
        navigate("/user-panel/user-information");
        break;
      case t("myCourses"):
        navigate("/user-panel/my-course");
        break;
      case t("reservedCourses"):
        navigate("/user-panel/course-reserve");
        break;
      case t("myComments"):
        navigate("/user-panel/my-views");
        break;
      case t("favorites"):
        navigate("/user-panel/favorite");
        break;
      case t("securitySettings"):
        navigate("/user-panel/secoration-setting");
        break;
      case t("logout"):
        deleteItemLocalStorage("token");
        deleteItemLocalStorage("UserId");
        navigate("/Authorize/Login/step1");
        break;
      default:
        break;
    }
    setText(value);
  };

  return (
    <ul
      className={`option-control w-full h-[563px] flex flex-col ${
        isRTL ? "items-end" : "items-start"
      } gap-y-[15px] mt-8`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {dashboardMockApi.map((item, index) => {
        const translatedText = t(item.textKey);
        const isSelected = text === translatedText;
        return (
          <li
            key={index}
            className={`option w-[91%] flex items-center py-2.5 ${
              isRTL ? "pr-3.5 rounded-tr-4xl rounded-br-4xl" : "pl-3.5 rounded-tl-4xl rounded-bl-4xl"
            } cursor-pointer ${
              isSelected
                ? "bg-[#FFFFFF]  drop-shadow-[1px_1px_3px_#00000040]"
                : ""
            } ${isSelected ? (isRTL ? "border-l-[#E48900]" : "border-r-[#E48900]") : ""}`}
            onClick={() => tabClickHandler(translatedText)}
          >
            {isSelected && (
              <div className="image-control w-[15px] h-[20px]">
                <ImageFedback imageAddress={item.icon} />
              </div>
            )}
            <p
              className={`font-b-yekan text-[15px] text-[var(--dashboard-text-option)] ${
                isRTL ? "mr-2" : "ml-2"
              }`}
            >
              {translatedText}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default DashboardOption;
