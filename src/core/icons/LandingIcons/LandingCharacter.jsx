
import React from "react";
import { motion } from "framer-motion";
import HeroChar from "../../../assets/pics/Bg/herochar.svg";

const LandingCharacter = ({ itemTop = "0px", itemLeft = "0px", children }) => {
  return (
    <motion.div 
      className="relative m-7 sm:m-9 md:m-12"
      initial={{ opacity: 0, y: 30 }} // Start animation
      animate={{ opacity: 1, y: 0 }} // End animation
      transition={{ duration: 1, ease: "easeOut" }} // Animation settings
    >
      <svg
        className="w-full h-[80%]"
        viewBox="0 0 605 447"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="54" y="-10" width="467" height="467">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: "blur(5px)",
              clipPath: "url(#bgblur_0_108_73_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <motion.path
          d="M64 30C64 13.4315 77.4315 0 94 0H481C497.569 0 511 13.4315 511 30V102.564C511 110.153 508.124 117.461 502.95 123.014L472.395 155.812C461.857 167.123 461.64 184.589 471.893 196.158L503.452 231.772C508.315 237.259 511 244.337 511 251.669V417C511 433.569 497.569 447 481 447H94C77.4315 447 64 433.569 64 417V30Z"
          fill="url(#paint0_linear_108_73)"
          fillOpacity="0.2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        />
      </svg>

      {/* Character Image */}
      <motion.img
        src={HeroChar}
        alt="Hero Character"
        className="absolute"
        style={{ top: itemTop, left: itemLeft }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Additional children elements */}
      <div className="absolute">{children}</div>
    </motion.div>
  );
};

export default LandingCharacter;

