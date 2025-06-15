import React from "react";
import resulrPayment from "../../../../../assets/pics/paymentSteps/resulrPayment.jpg";
import BtnComp from "./BtnComp";

const ResultComp = ({
  imageResult,
  paymentId,
  paymentDate,
  costPayment,
  btnOnclick,
}) => {
  return (
    <div className="result-control w-[70%] flex justify-between">
      <div className="left flex flex-col justify-between">
        <div className="text-control flex flex-col gap-y-3">
          <p className="text-white">
            شناسه پرداختی : {paymentId ? paymentId : ""}
          </p>
          <p className="text-white">
            {" "}
            تاریخ پرداختی : {paymentDate ? paymentDate : ""}{" "}
          </p>
          <p className="text-white">
            مبلغ پرداختی : {costPayment ? costPayment : ""}
          </p>
        </div>
        <BtnComp text={"ثبت اطلاعات"} onClick={btnOnclick} />
      </div>
      <div className="rught">
        <img
          src={imageResult ? imageResult : resulrPayment}
          alt=""
          className="w-[200px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ResultComp;
