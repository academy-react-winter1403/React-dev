import React, { useEffect, useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import CenterSection from "./CenterSection";
import TextComp from "../../../../common/user-panel-input/TextComp";
import { paymentHeaderTextData } from "../../../../../core/constants";
import UserPanelCard from "../../../../partials/user-panel/UserPanelCard";
import { PaginationData } from "../../../../partials";
import PaymentActionComp from "./PaymentActionComp";
// import ModalComp from "./ModalComp";
// import { IoCloseCircle } from "react-icons/io5";
// import stepPic1 from "../../../../../assets/pics/paymentSteps/step1.svg";
// import stepPic2 from "../../../../../assets/pics/paymentSteps/step2.svg";
// import stepPic3 from "../../../../../assets/pics/paymentSteps/step3.svg";
// import stepPic4 from "../../../../../assets/pics/paymentSteps/step4.svg";
// import stepPic5 from "../../../../../assets/pics/paymentSteps/step4.svg";
// import OneStepFormComp from "./OneStepFormComp";
// import TowFormComp from "./TowFormComp";
// import ResultComp from "./ResultComp";
// import FinishComp from "./FinishComp";
// import { RiArrowGoForwardFill } from "react-icons/ri";

const MyCourseDetailWrpper = () => {
  const [modalFlag, setModalFlag] = useState(false);
  // const [stepNum, setStepNum] = useState(1);
  // const [stepPic, setStepPic] = useState(stepPic1);
  // const [fomrComp, setFormComp] = useState(<OneStepFormComp />);

  // const changeImageStep = () => {
  //   if (stepNum === 1) {
  //     setStepPic(stepPic1);
  //     setFormComp(<OneStepFormComp />);
  //   }
  //   if (stepNum === 2) {
  //     setStepPic(stepPic2);
  //     setFormComp(<TowFormComp />);
  //   }
  //   if (stepNum === 3) {
  //     setStepPic(stepPic3);
  //     setFormComp(<ResultComp />);
  //   }
  //   if (stepNum === 4) {
  //     setStepPic(stepPic4);
  //     setFormComp(<ResultComp />);
  //   }
  //   if (stepNum === 5) {
  //     setStepPic(stepPic5);
  //     setFormComp(<FinishComp />);
  //   }
  // };

  // useEffect(() => {
  //   changeImageStep();
  // }, [stepNum]);

  // useEffect(() => {}, []);

  // const backClickHandler = () => {
  //   if (stepNum === 5) {
  //     setStepNum(4);
  //   }
  //   if (stepNum === 4) {
  //     setStepNum(3);
  //   }
  //   if (stepNum === 3) {
  //     setStepNum(2);
  //   }
  //   if (stepNum === 2) {
  //     setStepNum(1);
  //   }
  // };

  const oneStepFormSubmitHadnler = (value) => {
    console.log("my course", value)
  }

  return (
    <div className="myCourse-miniDetail-wrapper">
      <div className="tab flex justify-between">
        <div className="right-item flex items-center">
          <span className="text-xs text-gray-400 font-bold">دوره های من</span>
          <RiArrowLeftSLine className="text-gray-400" size={16} />
          <span className="text-xs text-gray-400 font-bold">جزئیات دره</span>
        </div>
        <div className="left-item flex items-center gap-1">
          <span className="text-xs text-gray-400 font-bold">برگشت</span>
          <RiArrowGoBackFill className="text-gray-400" size={13} />
        </div>
      </div>
      <div className="center-item-control mt-12">
        <CenterSection addPaymentClick={() => setModalFlag(!modalFlag)}/>
      </div>
      <hr className="outline-0 border-0 w-full h-[2px] bg-[#EBEBEB] mt-9" />
      <div className="card-control mt-10">
        <TextComp
          dataMaper={paymentHeaderTextData}
          boxControlStyle={"w-[70%]"}
          boxContainerStyle={"mt-[23px]"}
        />
        <UserPanelCard />
      </div>
      {/* <ModalComp openFlag={modalFlag}>
        <div className="top">
          <IoCloseCircle
            size={25}
            color="#EDEDED"
            className="cursor-pointer"
            onClick={() => setModalFlag(!modalFlag)}
          />
          <h1 className="text-center text-[#FFFFFF] text-[24px]">
            فرم ثبت اطلاعات پرداختی
          </h1>
          <h4 className="text-center text-[#FFFFFF] text-[14px] mt-0.5">
            (دوره جامع آموزش js)
          </h4>
          <div className="step-image-control flex justify-center">
            <img src={stepPic} className="w-[300px] mt-7" />
          </div>
          <div className="form-control w-full flex justify-center mt-7 mb-1.5">
            {fomrComp}
          </div>
        </div>
        <button
          className="btn-back-control text-[#FFFFFF] flex items-center gap-x-0.5 cursor-pointer"
          onClick={backClickHandler}
        >
          <RiArrowGoForwardFill />
          <span className="text-[13px]">مرحله قبلی</span>
        </button>
      </ModalComp> */}
      <PaymentActionComp isOpenFlag={modalFlag} setIsOpenFlag={setModalFlag} oneStepFormSubmit={(value) => console.log(value)}/>
      <PaginationData RowsOfPage={4} initialPageNum={1} totalCount={0} />
    </div>
  );
};

export default MyCourseDetailWrpper;
