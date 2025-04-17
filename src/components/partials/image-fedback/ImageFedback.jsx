import React from "react";
import { reandomNum } from "../../../core/utility/randomNum";

const ImageFedback = ({ imageAddress, pic }) => {
  return (
    <>
      <img src={imageAddress ? imageAddress : pic} alt="" className="w-full h-full"/>
    </>
  );
};

export default ImageFedback;
