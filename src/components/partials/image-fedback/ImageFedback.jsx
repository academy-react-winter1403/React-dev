import React from "react";
import { reandomNum } from "../../../core/utility/randomNum";

const ImageFedback = ({ imageAddress, pic }) => {
  return (
    <>
      <img src={!imageAddress || imageAddress === "Not-set" ? pic : imageAddress} alt="" className="w-[101%] h-[101%]"/>
    </>
  );
};

export default ImageFedback;
