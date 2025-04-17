import React from "react";
import { dashboardMockApi } from "../../../core/constants";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaUserPen } from "react-icons/fa6";
import ImageFedback from "../../partials/image-fedback/imageFedback";
import { isAction } from "@reduxjs/toolkit";
import { useLocation, useNavigate } from "react-router-dom";
import { RadioGroup, Radio } from "@heroui/react";

const DashboardOption = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabClickHandler = (value) => {
    value === " داشبورد " ? navigate("/user-panel/dashboard") : null;
    value === " اطلاعات کاربری "
      ? navigate("/user-panel/user-information")
      : null;
    value === " دوره های من " ? navigate("/user-panel/my-course") : null;
    value === " دوره های رزرو شده "
      ? navigate("/user-panel/course-reserve")
      : null;
    value === " دیدگاه های من " ? navigate("/user-panel/my-eye") : null;
    value === " علاقه مندی ها " ? navigate("/user-panel/feirverid") : null;
    value === " تنظیمات امنیتی "
      ? navigate("/user-panel/secoration-setting")
      : null;
  };

  return (
    <ul className="option-control w-full flex flex-col items-end gap-y-[15px] mt-8 checked: ">
      {/* <RadioGroup> */}
        {dashboardMockApi.map((item, index) => {
          console.log(item);
          return (
            // <Radio
            //   value={item.text}
            //   key={index}
            //   classNames={{
            //     base: "flex checked:bg-[#fff]",
            //     hiddenInput: "checked:bg-[#fff]",
            //     wrapper: "flex bg-[#fff] hidden checked:bg-[#fff]",
            //     labelWrapper: "flex checked:bg-[#fff]",
            //     control: "flex checked:bg-[#fff]",
            //     label: "flex items-center checked:bg-[#fff]",
            //   }}
            // >
            //   <div className="image-control w-[15px] h-[20px]">
            //     <ImageFedback imageAddress={item.icon} />
            //   </div>
            //   <p>{item.text}</p>
            // </Radio>
            <li
              className={`option w-[91%] drop-shadow-[1px_1px_3px_#00000040] flex items-center
                gap-x-[10px] border-l-[5px]
                ${isAction ? `bg-[#FFFFFF] border-[#E48900]` : ''}  py-2.5 pr-3.5 rounded-tr-4xl rounded-br-4xl`
              }
              key={index}
              onClick={() => tabClickHandler(item.text)}
            >
              <div className="image-control w-[15px] h-[20px]">
                <ImageFedback imageAddress={item.icon}/>
              </div>
              <p className="font-b-yekan text-[15px] text-[#003B39]">{item.text}</p>
            </li>
          );
        })}
      {/* </RadioGroup> */}
    </ul>
  );
};

export default DashboardOption;
