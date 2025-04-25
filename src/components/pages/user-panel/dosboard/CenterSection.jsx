import React, { useEffect, useState } from "react";
import { Alarm } from "../../../../core/icons/icons";
import { motion } from "framer-motion";

const CenterSection = ({ data }) => {
  //   console.log("latestSserPanelNewsSliceData ==>", data);
  //   const [date, setDate] = useState();

  //   const convertDate = () => {
  //     console.log("data ==>", data);

  //   };

  //   useEffect(() => {
  //     if (data) {
  //       convertDate();
  //     }
  //   }, [data]);

  return (
    <motion.div
      className="bg-[#F6FFFF] drop-shadow-[0_1px_3px_#00000040] mt-10 py-3.5 px-9 rounded-[10px] relative"
      initial={{ top: "-20px", opacity: 0 }}
      animate={{ top: 0, opacity: 1 }}
      transition={{duration: 0.4, delay: 0.6}}
    >
      <div className="top-item-control flex justify-between">
        <motion.h1
          className="text-[#777777] font-b-yekan font-bold"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          جدید ترین اخبار و مقالات
        </motion.h1>
        <Alarm
          classNames={`w-[40px] h-[40px] relative top-[-30px] drop-shadow-[0_1px_2px_#00000040]`}
        />
      </div>
      <div className="text-item-container">
        {data?.map((item, index) => {
          const newDate = item.updateDate.slice(0, 10);
          return (
            <div className="item-control" key={index}>
              <motion.div
                className="text-control flex justify-between relative"
                initial={{ top: "-20px", opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {/* <div className="text-control flex justify-between"> */}
                <p className="text-[#787878] text-[14px] font-extrabold font-b-yekan">
                  {item.title}
                </p>
                <h3 className="font-b-yekan text-[13px] font-extrabold text-[#999999]">
                  {newDate}
                </h3>
                {/* </div> */}
              </motion.div>
              <hr className="outline-0 w-full h-[1px] border border-[#AAAAAA] border-dashed mt-1.5 mb-1.5" />
            </div>
          );
        })}
      </div>
    </motion.div>
    // <div className="bg-[#F6FFFF] drop-shadow-[0_1px_3px_#00000040] mt-10 py-3.5 px-9 rounded-[10px]">

    // </div>
  );
};

export default CenterSection;
