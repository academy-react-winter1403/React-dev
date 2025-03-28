import { motion } from "framer-motion";
import React from "react";

const MotionComp = ({ xInitial, xAnimate, animDuration, effex, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: xInitial }}
      animate={{ opacity: 1, x: xAnimate }}
      transition={{ duration: animDuration, ease: effex }}
    >
      {children}
    </motion.div>
  );
};

export default MotionComp;
