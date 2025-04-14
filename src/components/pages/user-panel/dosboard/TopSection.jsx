import React from "react";
import StatusCard from "./StatusCard";
import { DashStudentIcon, Basket } from "../../../../core/icons/icons";

const TopSection = () => {
  return (
    <div className="top-item-control flex items-start">
      <StatusCard
        title={" 4 دوره "}
        description={"شرکت کرده اید"}
        textColor={"#00B4AF"}
        titleChildren={
          <span className="text-[#00B4AF] text-[19px] font-extrabold font-b-yekan">
            {" 4 دوره "}
          </span>
        }
      >
        <DashStudentIcon
          classNames={`w-[35px] h-[35px] relative top-[-19px]`}
        />
      </StatusCard>
      <StatusCard
        description={" رزرو کرده اید "}
        textColor={"#DC0000"}
        titleChildren={
          <span className="text-[#FFB800] text-[19px] font-extrabold font-b-yekan">
            {" 2 دوره "}
          </span>
        }
      >
        <Basket classNames={`w-[35px] h-[35px] relative top-[-19px]`} />
      </StatusCard>
      <p className="text-[15px] font-[400] font-b-yekan text-[#ABABAB] w-[170px] text-center">
        برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل کنید.
      </p>
    </div>
  );
};

export default TopSection;
