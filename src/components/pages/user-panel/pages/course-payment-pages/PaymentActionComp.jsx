import React, { useEffect, useMemo, useState } from "react";
import ModalComp from "./ModalComp";
import { IoCloseCircle } from "react-icons/io5";
import stepPic1 from "../../../../../assets/pics/paymentSteps/step1.svg";
import stepPic2 from "../../../../../assets/pics/paymentSteps/step2.svg";
import stepPic3 from "../../../../../assets/pics/paymentSteps/step3.svg";
import stepPic4 from "../../../../../assets/pics/paymentSteps/step4.svg";
import stepPic5 from "../../../../../assets/pics/paymentSteps/step4.svg";
import OneStepFormComp from "./OneStepFormComp";
import TowFormComp from "./TowFormComp";
import ResultComp from "./ResultComp";
import FinishComp from "./FinishComp";
import { RiArrowGoForwardFill } from "react-icons/ri";

const PaymentActionComp = ({ isOpenFlag, setIsOpenFlag }) => {
  const [stepNum, setStepNum] = useState(1);
  const [stepPic, setStepPic] = useState(stepPic1);
  const [fomrComp, setFormComp] = useState(<OneStepFormComp />);

  const oneStepFormSubmitt = (value) => {
    console.log(value);
    setStepNum(2);
  };

  const towStepFormSubmit = (value) => {
    console.log(value);
    setStepNum(3);
  };

  const threeStepOnClick = (value) => {
    console.log(value);
    setStepNum(4);
  };

  const fourStepOnClick = (value) => {
    console.log(value);
    setStepNum(5);
  };

  const finishOnClick = () => {
    console.log(value);
  };

  const changeImageStep = () => {
    if (stepNum === 1) {
      setStepPic(stepPic1);
      setFormComp(<OneStepFormComp submitHadnle={oneStepFormSubmitt} />);
    }
    if (stepNum === 2) {
      setStepPic(stepPic2);
      setFormComp(<TowFormComp submitHandle={towStepFormSubmit} />);
    }
    if (stepNum === 3) {
      setStepPic(stepPic3);
      setFormComp(<ResultComp btnOnclick={threeStepOnClick} />);
    }
    if (stepNum === 4) {
      setStepPic(stepPic4);
      setFormComp(<ResultComp btnOnclick={fourStepOnClick} />);
    }
    if (stepNum === 5) {
      setStepPic(stepPic5);
      setFormComp(<FinishComp onClick={finishOnClick} />);
    }
  };

  useEffect(() => {
    changeImageStep();
  }, [stepNum]);

  useEffect(() => {}, []);

  const backClickHandler = () => {
    if (stepNum === 5) {
      setStepNum(4);
    }
    if (stepNum === 4) {
      setStepNum(3);
    }
    if (stepNum === 3) {
      setStepNum(2);
    }
    if (stepNum === 2) {
      setStepNum(1);
    }
  };

  return (
    <ModalComp openFlag={isOpenFlag}>
      <div className="top">
        <IoCloseCircle
          size={25}
          color="#EDEDED"
          className="cursor-pointer"
          onClick={() => setIsOpenFlag(false)}
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
    </ModalComp>
  );
};

export default PaymentActionComp;
