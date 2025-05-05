import React, { useEffect, useState } from "react";
import pic from "../../../assets/pics/courses/course-detail-pic.png";
import { BiBookmark } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { CameraIcon, DBasketIcon } from "../../../core/icons/icons";
import { HiOutlineUser } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { SeparationPrice } from "../../../core/utility/SeparationPrice";
import { MotionComp } from "../../partials";
import Aos from "aos";
import { useParams } from "react-router-dom";
import { addCourseFavoritePost } from "../../../core/services";
import ImageFedback from "../../partials/image-fedback/imageFedback";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
import { deleteFavoriteProduct } from "../../../core";

const DetailTop = ({}) => {
  const queryClient = useQueryClient();
  const [price, setPrice] = useState(null);
  const { id } = useParams();

  const { courseDetail } = useSelector((state) => state);
  const { detailData } = courseDetail;

  // if (detailData) {
  //   console.log("detailData ==>", detailData)
  // }

  useEffect(() => {
    if (detailData) {
      let price = SeparationPrice(detailData.cost);
      setPrice(price);
    }

    Aos.init({
      duration: 3000,
    });
    Aos.refresh();
  }, [detailData]);

  const { mutate, data, isLoading } = addCourseFavoritePost("saveCourse");
  const productSaveClick = () => {
    const dataObj = {
      courseId: id,
    };
    mutate(["/Course/AddCourseFavorite", dataObj], {
      onSuccess: (data) => {
        console.log(data);
        // toast("عملیات با موفقیت انجام شد")
        queryClient.invalidateQueries(["detailProduct"]);
      },
    });
  };

  const { mutate: deleteFavoriteCourse } = deleteFavoriteProduct(
    "deleteFavoriteCourse"
  );
  const productDeleteFavoriteClick = () => {
    deleteFavoriteCourse([
      "/Course/DeleteCourseFavorite",
      { CourseFavoriteId: detailData.userFavoriteId },
    ],{
      onSuccess: () => {
        queryClient.invalidateQueries(["detailProduct"]);
      }
    });
  };

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
        <div className="title-control flex items-center justify-between">
          <h1 className="text-[29px] font-bold text-[#333333] font-b-yekan">
            {detailData?.title}
          </h1>
          {detailData?.isUserFavorite ? (
            <BsBookmarkFill
              className="text-[#00B4AF] cursor-pointer"
              size={27}
              onClick={productDeleteFavoriteClick}
            />
          ) : (
            <BiBookmark
              className="text-[#00B4AF] cursor-pointer"
              size={27}
              onClick={productSaveClick}
            />
          )}
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
        <ImageFedback imageAddress={detailData?.imageAddress} pic={pic} />
      </MotionComp>
    </div>
  );
};

export default DetailTop;
