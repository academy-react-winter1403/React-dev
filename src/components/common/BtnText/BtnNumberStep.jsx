import React from "react";
import { motion } from "framer-motion";


const BtnNumberStep = ({ number }) => {
  return (
    <motion.div
      className="size-[45px] bg-[#fcfcfc] rounded-xl flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 12,
        duration: 0.6,
        delay: 0.3,
      }}
    >
      <div className="font-bold text-[#d47300] text-[20px] leading-[2] rotate-315">
        {number}
      </div>
    </motion.div>
  );
};

export default BtnNumberStep;
