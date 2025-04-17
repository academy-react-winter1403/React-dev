import { motion } from "framer-motion";
import React from "react";

const MotionComp = ({
  hoverMotion,
  aosAnim,
  classNames,
  xInitial,
  xAnimate,
  yInitial,
  yAnimate,
  animDuration,
  effex,
  children,
  delay,
}) => {
  return (
    <motion.div
      whileHover={hoverMotion}
      whileTap={{ scale: 0.9 }}
      data-aos={aosAnim}
      className={classNames}
      initial={{ opacity: 0, x: xInitial, y: yInitial }}
      animate={{ opacity: 1, x: xAnimate, y: yAnimate }}
      transition={{ duration: animDuration, ease: effex, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionComp;
