import React from "react";
import HeroSVG from '../../../assets/pics/Bg/landingHerobg.svg'

const HeroBG = ({ itemTop, itemLeft, children }) => {
  return (
    <div className="relative h-[572px] w-full m-auto">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 572"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect
          width="1440"
          height="572"
          fill="url(#pattern0_108_72)"
          fill-opacity="0.4"
        />
        <defs>
          <pattern
            id="pattern0_108_72"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#image0_108_72"
              transform="matrix(0.000520833 0 0 0.00131119 0 0.147946)"
            />
          </pattern>
          <image
            id="image0_108_72"
            width="1920"
            height="537"
            preserveAspectRatio="none"
            href={HeroSVG}
          />
        </defs>
      </svg>
      <div
        className="absolute w-full h-full flex items-end"
        style={{ top: itemTop, left: itemLeft }}
      >
        {children}
      </div>
    </div>
  );
};

export default HeroBG;



