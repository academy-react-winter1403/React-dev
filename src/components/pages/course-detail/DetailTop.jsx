import React, { useEffect, useState } from "react";
import pic from "../../../assets/pics/courses/course-detail-pic.png";
import { BiBookmark } from "react-icons/bi";
import { CameraIcon, DBasketIcon } from "../../../core/icons/icons";
import { HiOutlineUser } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { SeparationPrice } from "../../../core/utility/SeparationPrice";
import { MotionComp } from "../../partials";

const DetailTop = () => {
  const [price, setPrice] = useState(null);

  const { detailData } = useSelector((state) => state.courseDetailData);

  useEffect(() => {
    if (detailData) {
      let price = SeparationPrice(detailData.cost);
      setPrice(price);
    }
  }, [detailData]);

  if (price) {
    console.log(price);
  }

  return (
    <div
      className={`w-full relative flex justify-center items-start min-lg:gap-x-[10px] font-b-yekan
      max-lg:flex-col-reverse max-lg:gap-y-[15px] max-lg:w-[80%] max-lg:items-center
      max-lg:bg-[#FFFFFF] max-lg:drop-shadow-[0_1px_2px_#00000040] rounded-[10px] max-lg:pt-[10px]`}
    >
      <MotionComp
        xInitial={"100px"}
        xAnimate={0}
        yInitial={"-50px"}
        yAnimate={0}
        animDuration={2}
        classNames={`info-control w-[40%] min-lg:bg-[#FFFFFF] flex flex-col justify-between
              min-lg:drop-shadow-[0_1px_2px_#00000040] rounded-[15px] p-[30px] max-md:px-[15px] max-md:pt-[0] max-md:pb-[18px]
              max-lg:w-[90%]`}
      >
        {/* <div
          className="info-control w-[40%] min-lg:bg-[#FFFFFF] flex flex-col justify-between
              min-lg:drop-shadow-[0_1px_2px_#00000040] rounded-[15px] p-[30px] max-md:px-[15px] max-md:pt-[0] max-md:pb-[18px]
              max-lg:w-[90%]"
        > */}
        <div className="title-control flex items-center justify-between">
          <h1 className="text-[29px] font-bold text-[#333333] font-b-yekan">
            {detailData?.title}
          </h1>
          <BiBookmark className="text-[#00B4AF]" size={27} />
        </div>
        <p
          className="text-[#777777] font-[400] font-b-yekan mt-[16px] w-[90%] h-[72px]
            text-ellipsis overflow-hidden "
        >
          {detailData?.describe}
        </p>
        <div
          className="price-teacherName-control flex justify-between mt-[27px] max-xl:mt-[0] max-sm:flex-col
            max-sm:items-center max-sm:gap-y-[20px]"
        >
          <div className="teacherName-control flex items-center gap-x-[5px]">
            <HiOutlineUser size={19} className="text-[#006865]" />
            <h2
              className="text-[#005B58] text-[20px] font-[500] font-b-yekan max-xl:text-[17px] max-sm:text-[20px]
                max-md:tracking-[4px]"
            >
              {detailData?.teacherName}
            </h2>
          </div>
          <div className="price-control flex items-center gap-x-3 max-sm:flex-row-reverse">
            <h2
              className="font-b-yekan text-[25px] text-[#005B58] font-[400] max-xl:text-[17px] max-sm:text-[21px]
                max-md:tracking-[2px]"
            >
              {/* ۳,۴۰۰,۰۰۰ */}
              {price && price}
              <span className="text-[16px] max-xl:text-[14px] text-[#006865] max-md:text-[17px]">
                {" "}
                تومان{" "}
              </span>
            </h2>
            <CameraIcon />
          </div>
        </div>
        <div className="w-full flex justify-center mt-[37px]">
          <button
            className="bg-[#FF8A00] text-[#FFFFFF]
              px-[80px] py-[10px] rounded-[9px] font-[700] text-[18px] flex items-center gap-x-[10px] cursor-pointer
              max-xl:text-[15px] max-xl:px-[70px] max-xl:py-[11px]"
          >
            <DBasketIcon />
            <span> شرکت در دوره! </span>
          </button>
        </div>
        {/* </div> */}
      </MotionComp>
      <MotionComp
        animDuration={2}
        xInitial={"-100px"}
        xAnimate={0}
        yInitial={"-50px"}
        yAnimate={0}
        width={"50%"}
        classNames={`product-image-control w-[40%] h-[344px] max-xl:h-[302px] overflow-hidden rounded-[10px]
          max-lg:w-[90%]`}
      >
      {/* <div
        className="product-image-control w-[40%] h-[344px] max-xl:h-[302px] overflow-hidden rounded-[10px]
          max-lg:w-[90%]"
      > */}
        <img
          src={detailData?.imageAddress ? detailData?.imageAddress : pic}
          alt=""
          className="w-full h-full scale-[102%]"
        />
      {/* </div> */}
      </MotionComp>
    </div>
  );
};

export default DetailTop;
