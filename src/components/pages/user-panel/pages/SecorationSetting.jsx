import React, { useState } from "react";
import { TbShieldLock } from "react-icons/tb";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import Btn from "../user-information/Btn";
import { FiSave } from "react-icons/fi";
import { Form, Formik } from "formik";
import CustomInputPanel from "../../../partials/UserPanel/CustomInputPanel";
import * as yup from "yup";
import { postData } from "../../../../core/services";

const SecorationSetting = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [open, setOpen] = useState(true);
  const [openIs, setOpenIs] = useState(true);

  const handleChangePassword = async (values) => {
    console.log(values);
    try {
      const ApiCall = await postData("/SharePanel/ChangePassword", {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      });
      console.log(ApiCall);
    } catch (error) {
      console.log(error);
    }
  };

  const validation = yup.object().shape({
    oldPassword: yup.string().required("رمز عبور فعلی الزامی است"),
    newPassword: yup
      .string()
      .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
      .matches(/\d/, "رمز عبور باید حداقل یک عدد داشته باشد")
      .required("رمز عبور جدید الزامی است"),
    RepeatNewPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "رمز عبور جدید و تکرار آن مطابقت ندارند")
      .required("تکرار رمز عبور جدید الزامی است"),
    recoveryEmail: yup
      .string()
      .email("فرمت ایمیل معتبر نیست")
      .required("ایمیل جدید الزامی است"),
  });

  return (
    <div className="w-full h-[527px] mt-2.5 flex flex-col gap-10">
      <div className="h-[50px] flex flex-row justify-center items-center gap-3 relative">
        <div
          className="absolute bg-[#F7F7F7] drop-shadow-[0_1px_2px_#00000040]
            right-5 p-2.5 rounded-xl"
        >
          <TbShieldLock size={25} className="text-[#B5B5B5]" />
        </div>
        <hr className="bg-[#F2F2F2] outline-0 border-0 w-[40%] h-[1px]" />
        <h3 className="text-[#9D9D9D] text-xl font-b-yekan font-normal">
          تنظیمات امنیتی
        </h3>
        <hr className="bg-[#F2F2F2] outline-0 border-0 w-[40%] h-[1px]" />
      </div>
      <div
        className={`flex flex-col gap-5 transition-all duration-1000 ${
          isOpen ? "h-[35%] overflow-visible" : "h-[5%] overflow-hidden"
        }`}
      >
        <div className="flex flex-row justify-center items-center gap-3">
          <h3 className="text-[#9D9D9D] font-b-yekan font-normal text-[16px]">
            تغییر رمز عبور
          </h3>
          <hr className="bg-[#F2F2F2] outline-0 border-0 w-[81%] h-[1px]" />
          {isOpen ? (
            <SlArrowUp
              size={10}
              className="text-[#9D9D9D]"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <SlArrowDown
              size={10}
              className="text-[#9D9D9D]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        <div>
          <Formik
            initialValues={{
              oldPassword: "",
              newPassword: "",
              RepeatNewPassword: "",
            }}
            onSubmit={handleChangePassword}
            validationSchema={validation}
          >
            <Form className="flex flex-col gap-5">
              <div className="flex flex-row justify-center items-center gap-5">
                <CustomInputPanel
                  name={"oldPassword"}
                  placeholder={"رمز عبور قبلی"}
                  Toggle={true}
                  originalType={"password"}
                  title={"رمز عبور قبلی"}
                />
                <CustomInputPanel
                  name={"newPassword"}
                  placeholder={"رمز عبور جدید"}
                  Toggle={true}
                  originalType={"password"}
                  title={"رمز عبور جدید"}
                />
                <CustomInputPanel
                  name={"RepeatNewPassword"}
                  placeholder={"تکرار رمز عبور"}
                  Toggle={true}
                  originalType={"password"}
                  title={"تکرار رمز عبور"}
                />
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="group py-[5px] px-[20px] bg-[#00E0DB] transition-all
                  rounded-[15px] font-b-yekan text-[#003B39] flex items-center gap-x-[12px] cursor-pointer"
                  type="submit"
                >
                  ذخیره تغییرات
                  <FiSave size={23} />
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div
        className={`flex flex-col gap-5 transition-all duration-1000 ${
          open ? "h-[10%] overflow-visible" : "h-[5%] overflow-hidden"
        }`}
      >
        <div className="flex flex-row justify-center items-center gap-3">
          <h3 className="text-[#9D9D9D] font-b-yekan font-normal text-[16px]">
            تایید ورود دو مرحله ای
          </h3>
          <hr className="bg-[#F2F2F2] outline-0 border-0 w-[74%] h-[1px]" />
          {open ? (
            <SlArrowUp
              size={10}
              className="text-[#9D9D9D]"
              onClick={() => setOpen(false)}
            />
          ) : (
            <SlArrowDown
              size={10}
              className="text-[#9D9D9D]"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
        <div className="flex flex-row justify-center items-center">
          <div dir="ltr" className="cursor-pointer">
            <label
              className="font-normal text-xs font-b-yekan text-gray-400 cursor-pointer"
              htmlFor="rememberMe"
            >
              <input
                className="cursor-pointer w-3.5 h-3.5 inset-shadow-sm"
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                // onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="ml-2.5">مایل به ورود دو مرحله ای هستم</span>
            </label>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col gap-5 transition-all duration-1000 ${
          openIs ? "h-[22%] overflow-visible" : "h-[5%] overflow-hidden"
        }`}
      >
        <div className="flex flex-row justify-center items-center gap-3">
          <h3 className="text-[#9D9D9D] font-b-yekan font-normal text-[16px]">
            ایمیل بازیابی
          </h3>
          <hr className="bg-[#F2F2F2] outline-0 border-0 w-[82%] h-[1px]" />
          {openIs ? (
            <SlArrowUp
              size={10}
              className="text-[#9D9D9D]"
              onClick={() => setOpenIs(false)}
            />
          ) : (
            <SlArrowDown
              size={10}
              className="text-[#9D9D9D]"
              onClick={() => setOpenIs(true)}
            />
          )}
        </div>
        <div>
          <Formik>
            <Form className="flex flex-row justify-center items-center gap-5">
              <CustomInputPanel
                name={"phoneOrGmail"}
                placeholder={"example@gmail.com"}
                Toggle={false}
                originalType={"text"}
                title={"ایمیل جدید"}
              />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SecorationSetting;




// import React, { useState } from "react";
// import { TbShieldLock } from "react-icons/tb";
// import { SlArrowUp, SlArrowDown } from "react-icons/sl";
// import { FiSave } from "react-icons/fi";
// import Btn from "../user-information/Btn";
// import { Form, Formik } from "formik";
// import CustomInputPanel from "../../../partials/UserPanel/CustomInputPanel";
// import * as yup from "yup";

// import { toast, ToastContainer } from "react-toastify";
// import { postData } from "../../../../core/services";
// import { useTranslation } from "react-i18next";

// const SecorationSetting = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [open, setOpen] = useState(true);
//   const [openIs, setOpenIs] = useState(true);
//   const [twoStepAuth, setTwoStepAuth] = useState(false);

//   const { t } = useTranslation();

//   const handleChangePassword = async (values) => {
//     try {
//       const ApiCall = await postData("/SharePanel/ChangePassword", {
//         oldPassword: values.oldPassword,
//         newPassword: values.newPassword,
//       });
//       // console.log(ApiCall);
//       if (ApiCall.data.success) {
//         toast("تغییرات ذخیره شد");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   ////
//   const handleEditSecurity = async (values) => {
//     console.log(values,twoStepAuth);
//     try {
//       // const ApiCall = await putData("/SharePanel/EditSecurity", {
//       //   recoveryEmail: values.recoveryEmail,
//       //   twoStepAuth: twoStepAuth,
//       // });
//       // console.log(ApiCall);
//       // if (ApiCall.data.success) {
//       //   toast("تغییرات ذخیره شد");
//       // }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   ////
//   const validation = yup.object().shape({
//     oldPassword: yup.string().required(t("validation.old_password_required")),
//     newPassword: yup
//       .string()
//       .min(6, t("validation.password_min"))
//       .matches(/\d/, t("validation.password_digit"))
//       .required(t("validation.new_password_required")),
//     RepeatNewPassword: yup
//       .string()
// // <<<<<<< HEAD
//       .oneOf([yup.ref("newPassword")], "رمز عبور جدید و تکرار آن مطابقت ندارند")
//       .required("تکرار رمز عبور جدید الزامی است"),
//   });
//   const validationSecurity = yup.object().shape({
//     recoveryEmail: yup
//       .string()
//       .email("فرمت ایمیل معتبر نیست")
//       .required("ایمیل جدید الزامی است"),
//   })

//   return (
//     <>
//       <ToastContainer />
//       <div className="w-full h-[527px] mt-2.5 flex flex-col gap-10">
//         <div className="h-[50px] flex flex-row justify-center items-center gap-3 relative">
//           <div
//             className="absolute bg-[#F7F7F7] drop-shadow-[0_1px_2px_#00000040]
//             right-5 p-2.5 rounded-xl"
//           >
//             <TbShieldLock size={25} className="text-[#B5B5B5]" />
//           </div>
//           <hr className="bg-[#F2F2F2] outline-0 border-0 w-[40%] h-[1px]" />
//           <h3 className="text-[#9D9D9D] text-xl font-b-yekan font-normal">
//             تنظیمات امنیتی
//           </h3>
//           <hr className="bg-[#F2F2F2] outline-0 border-0 w-[40%] h-[1px]" />
//         </div>
//         <div
//           className={`flex flex-col gap-5 transition-all duration-1000 ${
//             isOpen ? "h-[35%] overflow-visible" : "h-[5%] overflow-hidden"
//           }`}
//         >
//           <div className="flex flex-row justify-center items-center gap-3">
//             <h3 className="text-[#9D9D9D] font-b-yekan font-normal text-[16px]">
//               تغییر رمز عبور
//             </h3>
//             <hr className="bg-[#F2F2F2] outline-0 border-0 w-[81%] h-[1px]" />
//             {isOpen ? (
//               <SlArrowUp
//                 size={10}
//                 className="text-[#9D9D9D]"
//                 onClick={() => setIsOpen(false)}
//               />
//             ) : (
//               <SlArrowDown
//                 size={10}
//                 className="text-[#9D9D9D]"
//                 onClick={() => setIsOpen(true)}
//               />
//             )}
//           </div>
//           <div>
//             <Formik
//               initialValues={{
//                 oldPassword: "",
//                 newPassword: "",
//                 RepeatNewPassword: "",
//               }}
//               onSubmit={handleChangePassword}
//               validationSchema={validation}
//             >
//               <Form className="flex flex-col gap-5">
//                 <div className="flex flex-row justify-center items-center gap-5">
//                   <CustomInputPanel
//                     name={"oldPassword"}
//                     placeholder={"رمز عبور قبلی"}
//                     Toggle={true}
//                     originalType={"password"}
//                     title={"رمز عبور قبلی"}
//                   />
//                   <CustomInputPanel
//                     name={"newPassword"}
//                     placeholder={"رمز عبور جدید"}
//                     Toggle={true}
//                     originalType={"password"}
//                     title={"رمز عبور جدید"}
//                   />
//                   <CustomInputPanel
//                     name={"RepeatNewPassword"}
//                     placeholder={"تکرار رمز عبور"}
//                     Toggle={true}
//                     originalType={"password"}
//                     title={"تکرار رمز عبور"}
//                   />
//                 </div>
//                 <div className="flex justify-center items-center">
//                   <button
//                     className="group py-[5px] px-[20px] bg-[#00E0DB] transition-all
//                   rounded-[15px] font-b-yekan text-[#003B39] flex items-center gap-x-[12px] cursor-pointer"
//                     type="submit"
//                   >
//                     ذخیره تغییرات
//                     <FiSave size={23} />
//                   </button>
//                 </div>
//               </Form>
//             </Formik>
//           </div>
//         </div>
//         <div
//           className={`flex flex-col gap-5 transition-all duration-1000 ${
//             open ? "h-[10%] overflow-visible" : "h-[5%] overflow-hidden"
//           }`}
//         >
//           <div className="flex flex-row justify-center items-center gap-3">
//             <h3 className="text-[#9D9D9D] font-b-yekan font-normal text-[16px]">
//               تایید ورود دو مرحله ای
//             </h3>
//             <hr className="bg-[#F2F2F2] outline-0 border-0 w-[74%] h-[1px]" />
//             {open ? (
//               <SlArrowUp
//                 size={10}
//                 className="text-[#9D9D9D]"
//                 onClick={() => setOpen(false)}
//               />
//             ) : (
//               <SlArrowDown
//                 size={10}
//                 className="text-[#9D9D9D]"
//                 onClick={() => setOpen(true)}
//               />
//             )}
//           </div>
//           <div className="flex flex-row justify-center items-center">
//             <div dir="ltr" className="cursor-pointer">
//               <label
//                 className="font-normal text-xs font-b-yekan text-gray-400 cursor-pointer"
//                 htmlFor="rememberMe"
//               >
//                 <input
//                   className="cursor-pointer w-3.5 h-3.5 inset-shadow-sm"
//                   type="checkbox"
//                   name="rememberMe"
//                   id="rememberMe"
//                   onChange={() => setTwoStepAuth(!twoStepAuth)}
//                 />
//                 <span className="ml-2.5">مایل به ورود دو مرحله ای هستم</span>
//               </label>
//             </div>
//           </div>
//         </div>
//         <div
//           className={`flex flex-col gap-5 transition-all duration-1000 ${
//             openIs ? "h-[22%] overflow-visible" : "h-[5%] overflow-hidden"
//           }`}
//         >
//           <div className="flex flex-row justify-center items-center gap-3">
//             <h3 className="text-[#9D9D9D] font-b-yekan font-normal text-[16px]">
//               ایمیل بازیابی
//             </h3>
//             <hr className="bg-[#F2F2F2] outline-0 border-0 w-[82%] h-[1px]" />
//             {openIs ? (
//               <SlArrowUp
//                 size={10}
//                 className="text-[#9D9D9D]"
//                 onClick={() => setOpenIs(false)}
//               />
//             ) : (
//               <SlArrowDown
//                 size={10}
//                 className="text-[#9D9D9D]"
//                 onClick={() => setOpenIs(true)}
//               />
//             )}
//           </div>
//           <div>
//             <Formik initialValues={{recoveryEmail:""}}onSubmit={handleEditSecurity}validationSchema={validationSecurity}>
//               <Form className="flex flex-row justify-center items-center gap-5">
//                 <CustomInputPanel
//                   name={"recoveryEmail"}
//                   placeholder={"example@gmail.com"}
//                   Toggle={false}
//                   originalType={"text"}
//                   title={"ایمیل جدید"}
//                 />
//               </Form>
//             </Formik>
//           </div>
//         </div>
//       </div>
//     </>
// // =======
//       .oneOf([yup.ref("newPassword")], t("validation.password_match"))
//       .required(t("validation.repeat_password_required")),
//     recoveryEmail: yup
//       .string()
//       .email(t("validation.email_format"))
//       .required(t("validation.recovery_email_required")),
//   });

//   return (
//     <div className="w-full h-[527px] mt-2.5 flex flex-col gap-10 whitespace-nowrap">
//       {/* Section Header */}
//       <div className="h-[50px] flex justify-center items-center gap-3 relative">
//         <div className="absolute bg-[#F7F7F7] drop-shadow right-5 p-2.5 rounded-xl">
//           <TbShieldLock size={25} className="text-[#B5B5B5]" />
//         </div>
//         <hr className="bg-[#F2F2F2] w-[40%] h-[1px]" />
//         <h3 className="text-[#9D9D9D] text-xl font-b-yekan font-normal">
//           {t("security_settings")}
//         </h3>
//         <hr className="bg-[#F2F2F2] w-[40%] h-[1px]" />
//       </div>

//       {/* Change Password Section */}
//       <div className={`flex flex-col gap-5 transition-all duration-1000 ${isOpen ? "h-[35%]" : "h-[5%] overflow-hidden"}`}>
//         <div className="flex items-center gap-3">
//           <h3 className="text-[#9D9D9D] font-b-yekan text-[16px]">
//             {t("change_password")}
//           </h3>
//           <hr className="bg-[#F2F2F2] w-[81%] h-[1px]" />
//           {isOpen ? (
//             <SlArrowUp className="text-[#9D9D9D]" size={10} onClick={() => setIsOpen(false)} />
//           ) : (
//             <SlArrowDown className="text-[#9D9D9D]" size={10} onClick={() => setIsOpen(true)} />
//           )}
//         </div>
//         <Formik
//           initialValues={{ oldPassword: "", newPassword: "", RepeatNewPassword: "" }}
//           onSubmit={handleChangePassword}
//           validationSchema={validation}
//         >
//           <Form className="flex flex-col gap-5">
//             <div className="flex justify-center gap-5">
//               <CustomInputPanel
//                 name="oldPassword"
//                 placeholder={t("placeholder.old_password")}
//                 Toggle={true}
//                 originalType="password"
//                 title={t("titlePanel.old_password")}
//               />
//               <CustomInputPanel
//                 name="newPassword"
//                 placeholder={t("placeholder.new_password")}
//                 Toggle={true}
//                 originalType="password"
//                 title={t("titlePanel.new_password")}
//               />
//               <CustomInputPanel
//                 name="RepeatNewPassword"
//                 placeholder={t("placeholder.repeat_password")}
//                 Toggle={true}
//                 originalType="password"
//                 title={t("titlePanel.repeat_password")}
//               />
//             </div>
//             <div className="flex justify-center">
//               <button type="submit" className="group py-1 px-5 bg-[#00E0DB] rounded-[15px] font-b-yekan text-[#003B39] flex items-center gap-x-3">
//                 {t("save_changes")} <FiSave size={23} />
//               </button>
//             </div>
//           </Form>
//         </Formik>
//       </div>

//       {/* Two-Step Verification Section */}
//       <div className={`flex flex-col gap-5 transition-all duration-1000 ${open ? "h-[10%]" : "h-[5%] overflow-hidden"}`}>
//         <div className="flex items-center gap-3">
//           <h3 className="text-[#9D9D9D] font-b-yekan text-[16px]">
//             {t("two_step_verification")}
//           </h3>
//           <hr className="bg-[#F2F2F2] w-[74%] h-[1px]" />
//           {open ? (
//             <SlArrowUp className="text-[#9D9D9D]" size={10} onClick={() => setOpen(false)} />
//           ) : (
//             <SlArrowDown className="text-[#9D9D9D]" size={10} onClick={() => setOpen(true)} />
//           )}
//         </div>
//         <div className="flex justify-center">
//           <div dir="ltr" className="cursor-pointer">
//             <label htmlFor="rememberMe" className="text-xs text-gray-400 font-b-yekan cursor-pointer">
//               <input type="checkbox" id="rememberMe" className="w-3.5 h-3.5" />
//               <span className="ml-2.5">{t("two_step_checkbox_label")}</span>
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Recovery Email Section */}
//       <div className={`flex flex-col gap-5 transition-all duration-1000 ${openIs ? "h-[22%]" : "h-[5%] overflow-hidden"}`}>
//         <div className="flex items-center gap-3">
//           <h3 className="text-[#9D9D9D] font-b-yekan text-[16px]">
//             {t("recovery_email")}
//           </h3>
//           <hr className="bg-[#F2F2F2] w-[82%] h-[1px]" />
//           {openIs ? (
//             <SlArrowUp className="text-[#9D9D9D]" size={10} onClick={() => setOpenIs(false)} />
//           ) : (
//             <SlArrowDown className="text-[#9D9D9D]" size={10} onClick={() => setOpenIs(true)} />
//           )}
//         </div>
//         <Formik>
//           <Form className="flex justify-center gap-5">
//             <CustomInputPanel
//               name="phoneOrGmail"
//               placeholder={t("placeholder.recovery_email")}
//               Toggle={false}
//               originalType="text"
//               title={t("titlePanel.recovery_email")}
//             />
//           </Form>
//         </Formik>
//       </div>
//     </div>
// >>>>>>> b6267ed1b82df788837059dfa4276a84030a3184
//   );
// };

// export default SecorationSetting;
