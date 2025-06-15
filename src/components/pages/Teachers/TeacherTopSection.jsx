import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { changeQueryArticles } from "../../../redux/actions";
import { motion } from "framer-motion";
import Input from "../../common/input/Input";
import BgOne from "./../../../assets/pics/articles/bg1.png";
import BgTwo from "./../../../assets/pics/articles/bg2.png";
import BgStudent from "./../../../assets/pics/teachers/teacher.png";
import { changeTeachersQuery } from "../../../redux/slices/teachersQuerySlice";

const TeacherTopSection = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";
  const changeQueryHandler = (value) => {
    dispatch(changeTeachersQuery(value));
  };
  return (
    <div>
      <motion.div
        xInitial={isRTL ? 100 : -100}
        className="w-full h-[400px] flex justify-center relative"
        initial={{
          x: -1000,
          // opacity: 0
        }}
        animate={{
          x: [-1000, 0, 60, -40, 20, -10, 5, 0],
          // opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      >
        <div className="w-10/12 h-[271px] bg-[#EBF9F9]/51 rounded-tl-[10px] rounded-tr-[80px] rounded-br-[10px] rounded-bl-[80px] shadow-sm mt-10  flex flex-col justify-center gap-10">
          <ul className="list-disc md:marker:text-[#01CEC9] xs:marker:text-[#EBF9F9] marker:text-3xl pl-5 mr-11 ml-8">
            <li>
              <h1 className="font-b-yekan font-bold md:text-3xl xs:text-4xl xs:text-center md:text-start text-[#000]">
                {t("teachers")}
              </h1>
              <p
                className="font-b-yekan font-normal text-md text-[var(--course-top-text)]
 xs:text-center md:text-start"
              >
                {t("teacherTopTitleSub")}
              </p>
            </li>
          </ul>
          <div className="md:w-[50%] mr-8 xs:w-[90%] ml-6">
            <Input
              placeholder={t("teacherInput")}
              type="text"
              change={changeQueryHandler}
            />
          </div>
        </div>
        <motion.div
          className="absolute lg:left-0 md:left-0 lg:w-[500px] md:w-[400px] hidden md:block "
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            [isRTL ? "right" : "left"]: "800px",
          }}
        >
          <div
            className="lg:w-[415px] lg:h-[400px] md:w-[315px] md:h-[300px] relative "
            style={{
              backgroundImage: `url(${BgOne})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "10% 100%",
              backgroundSize: "85%",
            }}
          >
            <div
              className="lg:w-[486px] lg:h-[235px] md:w-[386px] md:h-[135px] absolute top-20 z-10"
              style={{
                backgroundImage: `url(${BgTwo})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                backgroundSize: "100%",
              }}
            ></div>
            <div
              className="lg:w-[486px] lg:h-[400px] md:w-[386px] md:h-[300px] z-20"
              style={{
                backgroundImage: `url(${BgStudent})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                backgroundSize: "55%",
              }}
            ></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeacherTopSection;
