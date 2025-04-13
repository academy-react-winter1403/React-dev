import React from "react";
import ImageFedback from "../image-fedback/imageFedback";
import userPic from "../../../assets/pics/detailCourse/teacher.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

const CommentPic = ({ imageAddress, flag }) => {
  if (flag) {
    return (
      <div className="image-control w-[60px] h-[60px]">
        <div className={`image-border w-full h-full p-[5px] border ${imageAddress ? `border-[#01CEC9]` : `border-[#ccc]`}
            rounded-[50%] relative`}
        >
          <div className="image-control rounded-[50%] w-full h-full overflow-hidden">
            {!imageAddress ? (
              <FaCircleUser size={53} className="text-[#E4E4E4]"/>
            ) : (
              <img
                src={imageAddress}
                alt=""
                className="w-full h-full scale-[150%] "
              />
            )}
          </div>
          <IoIosCheckmarkCircle
            className="absolute top-0 right-0 text-[#00B3EC]"
            size={20}
          />
        </div>
      </div>
    );
  }
  if (!flag) {
    return (
      <div className="image-control w-[60px] h-[60px]">
        <div className="image-border w-full h-full p-[5px] border border-[#01CEC9] rounded-[50%] relative">
          <div className="image-control rounded-[50%] w-full h-full overflow-hidden">
            <img
              src={imageAddress ? imageAddress : userPic}
              alt=""
              className="w-full h-full scale-[150%] "
            />
          </div>
          <IoIosCheckmarkCircle
            className="absolute top-0 right-0 text-[#00B3EC]"
            size={20}
          />
        </div>
      </div>
    );
  }
};

export default CommentPic;
