import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import ImageFedback from "../image-fedback/imageFedback";
import pic from "../../../assets/pics/userPanel/Ellipse48.png";
import { FaRegTrashCan } from "react-icons/fa6";
import ChangeMoment from "../changeMoment/changeMoment";
import { SeparationPrice } from "../../../core";
import { CiWallet } from "react-icons/ci";

const UserPanelCard = ({
  imageAddress,
  trashcanFlag,
  bgCalc,
  divFlag,
  colorFlag,
  onView,
  onDelete,
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
  accept,
}) => {
  const DataArticle = titleThree;
  const persianDate = ChangeMoment(DataArticle, "YYYY/MM/DD", "persian");
  statusFlag,
  colorFlag,
  courseName,
  teacherName,
  staerDate,
  price,
  trashcanClick,
  eyeClick,
  statusText,
  showStatus,
  CiWalletFlag,
  ciWalletClick
  const calc = bgCalc % 2;
  const [date, setDate] = useState(null);
  const [cost, setCost] = useState(null);

  const changeDate = () => {
    const newDate = ChangeMoment(staerDate, "YYYY/MM/DD", "persian");
    setDate(newDate);
  };

  const changePrice = () => {
    const newCost = SeparationPrice(price);
    setCost(newCost);
  };

  useEffect(() => {
    if (staerDate) {
      changeDate();
    }
  }, [staerDate]);

  useEffect(() => {
    if (price) {
      changePrice();
    }
  }, [price]);

  return (
    <div
      className={`user-panel-card-container ${
        calc === 0 ? "bg-[#F6FFFF]" : "bg-[#F7F7F7]"
      }
        flex gap-x-1 mt-3.5 py-1 drop-shadow-[0_1px_2px_#00000026] rounded-md`}
    >
      <div className="right w-[7%] flex justify-center items-center">
        <div className="image-control w-[30px] h-[30px] rounded-[30px] overflow-hidden">
          <ImageFedback imageAddress={imageAddress} pic={pic} />
        </div>
      </div>
      <div className="centerr w-[80%] flex items-center justify-evenly">
        <div className="w-[92%] flex justify-between items-center">
          <p
            className="text-sm w-[117px] font-b-yekan text-[#555555] text-nowrap truncate"
            title={titleOne}
          >
            {titleOne}
          </p>
          <p className="text-sm w-[106px] font-b-yekan text-[#555555]">
            {titleTwo}
          </p>
          <p className="text-sm w-[96px] font-b-yekan text-[#555555]">
            {persianDate}
          </p>
          <p
            className={`text-sm w-[107px] font-b-yekan text-center text-nowrap truncate ${
              accept === true
                ? `text-[#00C070]`
                : accept === false
                ? `text-[#E48900]`
                : `text-[#555555]`
            }`}
            title={titleFour}
          >
            {accept === true
              ? "تایید شد"
              : accept === false
              ? "در انتظار تایید"
              :  titleFour }
          </p>

          {divFlag && (
            <p className="text-xs w-[72px] font-b-yekan text-[#E48900] text-center">
              در انتظار تایید
            </p>
          )}
          <p className="text-sm w-[117px] font-b-yekan text-[#555555]">
            {courseName}
          </p>
          <p className="text-sm w-[146px] font-b-yekan text-[#555555]">
            {teacherName ? teacherName : "محمد حسین بحرالعلوم"}
          </p>
          <p className="text-sm w-[96px] font-b-yekan text-[#555555]">
            {date ? date : "۱۸ / ۰۳ / ۱۴۰۳"}
          </p>
          <p className="text-sm w-[107px] font-b-yekan text-center text-[#555555]">
            {cost ? cost : "۲,۵۰۰,۰۰۰"}
          </p>

          {showStatus && <p
            className={`text-xs w-[72px] font-b-yekan ${
              statusFlag ? "text-[#00C070]" : "text-[#E48900]"
            } text-center`}
          >
            {statusFlag ? " تایید شده " : " در انتظار تایید "}
          </p>}
        </div>
      </div>
      <div className="left w-[10%] flex justify-center items-center gap-x-3">
        {
          CiWalletFlag && (
            <CiWallet color="#00726F" className="cursor-pointer" onClick={ciWalletClick}/>
          )
        }
        {trashcanFlag && (
          <FaRegTrashCan
            className="text-[#E48900] cursor-pointer"
            onClick={trashcanClick}
          />
        )}
        <FaEye
          onClick={onView}
          className={`${colorFlag ? "text-[#00BFB3]" : "text-[#E48900]"}`}
        />
        {trashcanFlag && (
          <FaRegTrashCan onClick={onDelete} className="text-[#E48900]" />
        )}
          className={`${
            colorFlag ? "text-[#00BFB3]" : "text-[#E48900]"
          } cursor-pointer`}
          onClick={eyeClick}
        />
      </div>
    </div>
  );
};

export default UserPanelCard;
