import React from "react";
import { reandomNum } from "../../../core/utility/randomNum";

const ImageFedback = ({ imageAddress, imageDb }) => {
  if (!imageAddress) {
    var arrayLength = reandomNum(imageDb.length);
    var mockPic = imageDb[arrayLength];
  }

  return (
    <>
      <img src={imageAddress ? imageAddress : mockPic} alt="" className="w-full h-full"/>
    </>
  );
};

export default ImageFedback;
