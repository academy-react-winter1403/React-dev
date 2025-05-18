import React from "react";
import StatusCard from "./StatusCard";
import { DashStudentIcon, Basket } from "../../../../core/icons/icons";
import { CircularProgress } from "@heroui/react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { MotionComp } from "../../../partials";

const TopSection = ({ data }) => {
  const { userProfileInfo, courseReserved, myCourseUserPanel } = useSelector(
    (state) => state
  );
  const { userProfileInfoData } = userProfileInfo;
  const { courseReserv } = courseReserved;
  const { myCourse } = myCourseUserPanel;

  if (userProfileInfoData) {
    var { profileCompletionPercentage } = userProfileInfoData;
    console.log(profileCompletionPercentage)
  }

  return (
    <div className="top-item-control w-full p-2 flex items-center max-lg:justify-between
      relative justify-center gap-x-8"
    >
      <div className="right flex items-center gap-x-5">
        <motion.div
          initial={{ scale: 0, visibility: "hidden", opacity: 0 }}
          animate={{ scale: 1.1, visibility: "visible", opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <StatusCard
            title={" 4 دوره "}
            description={"شرکت کرده اید"}
            textColor={"#00B4AF"}
            titleChildren={
              <p className="text-[#00B4AF] text-[16px] text-start max-xl:text-center font-extrabold font-b-yekan">
                {myCourse && `${myCourse.totalCount} دوره`}
              </p>
            }
          >
            <DashStudentIcon
              classNames={`w-[35px] h-[35px] relative top-[-19px]`}
            />
          </StatusCard>
        </motion.div>

        <motion.div
          initial={{ scale: 0, visibility: "hidden", opacity: 0 }}
          animate={{ scale: 1.1, visibility: "visible", opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <StatusCard
            description={" رزرو کرده اید "}
            textColor={"#DC0000"}
            titleChildren={
              <p className="text-[#FFB800] text-[16px] text-start max-xl:text-center font-extrabold font-b-yekan">
                {`${courseReserv?.length} دوره `}
              </p>
            }
          >
            <Basket classNames={`w-[35px] h-[35px] relative top-[-19px]`} />
          </StatusCard>
        </motion.div>
      </div>

      <div className="left flex items-center gap-x-5 max-md:flex-col">
        <motion.div
          initial={{ scale: 0, visibility: "hidden", opacity: 0 }}
          animate={{ scale: 1.1, visibility: "visible", opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <p className="text-[15px] font-[400] font-b-yekan text-[#ABABAB] w-[170px] text-center
            max-xl:text-xs max-md:absolute max-md:left-8 max-md:top-[-20px]"
          >
            برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل کنید.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0, visibility: "hidden", opacity: 0 }}
          animate={{ scale: 1.1, visibility: "visible", opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <CircularProgress
            classNames={{
              svg: `w-[80px] h-[80px] stroke-[1.5px] stroke-[#FFFFFF]
                drop-shadow-[0_1px_1px_#00000040] transition-[5s] max-md:w-[50px] max-md:h-[50px]`,
              indicator: "stroke-[#E48900]",
              value: "font-iran-sans text-[17px] max-md:text-[14px]",
            }}
            value={profileCompletionPercentage}
            showValueLabel={true}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TopSection;
