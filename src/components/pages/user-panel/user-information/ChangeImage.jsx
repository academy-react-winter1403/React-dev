import React from "react";
import ImageFedback from "../../../partials/image-fedback/imageFedback";
import pic from "../../../../assets/pics/userPanel/user-pic.png";
import { HiOutlineCamera } from "react-icons/hi2";

const ChangeImage = () => {
  return (
    <div
      className="change-image-box relative w-32 h-32 rounded-[50%]
        drop-shadow-[0_2px_3px_#00000040] overflow-hidden"
    >
      <ImageFedback pic={pic} imageAddress={""} />
      <div
        className="cameraicon-control absolute bottom-0 bg-[#0E0E0E66]
        flex justify-center items-center w-full h-[30%] cursor-pointer transition-all hover:h-full"
      >
        <HiOutlineCamera size={25} className="text-[#FFFFFF]" />
      </div>
    </div>
  );
};

export default ChangeImage;
