import React from "react";
import Input from "../../common/input/Input";
import BgOne from "./../../../assets/pics/articles/bg1.png";
import BgTwo from "./../../../assets/pics/articles/bg2.png";
import BgStudent from "./../../../assets/pics/articles/student.png";
// import { motion } from "motion/react"
import { motion } from "framer-motion";

const TopSectionArticlesNew = ({ changeFilterHandler }) => {
  return (
    <motion.div
      className="w-full h-[400px] flex justify-center relative"
      initial={{ x: -1000, 
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
      <div className="w-10/12 h-[271px] bg-[#EBF9F9]/51 rounded-tl-[10px] rounded-tr-[80px] rounded-br-[10px] rounded-bl-[80px] shadow-sm mt-10 flex flex-col justify-center gap-10">
        <ul className="list-disc marker:text-[#01CEC9] marker:text-3xl pl-5 mr-11">
          <li>
            <h1 className="font-b-yekan font-bold text-4xl text-[#000]">
              اخبار و مقالات
            </h1>
            <p className="font-b-yekan font-normal text-xl text-[#aaa]">
              با ما خودت رو به روز کن
            </p>
          </li>
        </ul>
        <div className="w-[50%] mr-8">
          <Input
            placeholder={"چی میخوای یاد بدونی؟..."}
            type={"text"}
            change={changeFilterHandler}
          />
        </div>
      </div>
      <motion.div
        className="absolute left-0 w-[550px] hidden md:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7}}
      >
        <div
          className="w-[415px] h-[400px] relative"
          style={{
            backgroundImage: `url(${BgOne})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "10% 100%",
            backgroundSize: "85%",
          }}
        >
          <div
            className="w-[486px] h-[235px] absolute top-20 z-10"
            style={{
              backgroundImage: `url(${BgTwo})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 50%",
              backgroundSize: "100%",
            }}
          ></div>
          <div
            className="w-[486px] h-[400px] z-20"
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
  );
};

export default TopSectionArticlesNew;
