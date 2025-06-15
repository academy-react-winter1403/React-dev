import React, { useState } from "react";
import paymentSlipImage from "../../../../../assets/pics/paymentSteps/paymentSlipe.svg";
import selectImage from "../../../../../assets/pics/paymentSteps/selectImage.svg";
import selectImageSucces from "../../../../../assets/pics/paymentSteps/selectImageSucces.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup"
import BtnComp from "./BtnComp";

const TowFormComp = ({ paymentResultImage, imageAssressName, succes, submitHandle }) => {
  const [imageAddress, setImageAddress] = useState(
   
  );

  const validation = yup.object({
    pic: yup.string().required("این فیلد اجباریست")
  })

  const changeHandler = (event) => {
    console.log(event.File);
  };

  return (
    <div className="w-full flex justify-center">
      <Formik initialValues={{ pic: "" }} validationSchema={validation} onSubmit={(value) =>submitHandle(value)}>
        <Form className="flex w-[70%] justify-between">
          <div className="left flex flex-col items-center justify-center gap-y-5">
            <p className="text-white"> فایل مورد نظر را انتخاب کنید </p>
            <label htmlFor="selectImage">
              <img src={succes ? selectImageSucces : selectImage} alt="" />
            </label>
            <Field type="file" id="selectImage" className="hidden" name="pic" />
            <ErrorMessage component={"p"} name="pic" className="text-[14px] text-orange-300"/>
            <span className="text-white">{imageAddress && imageAddress}</span>
            {/* <button type="submit" className="w-[219px] h-[45px] rounded-[8px] bg-[#01CEC9] text-white cursor-pointer"> ثبت اطلاعات </button> */}
            <BtnComp type={"submit"} text={"ثبت اطلاعات"}/>
          </div>
          <div className="right">
            <img
              src={paymentResultImage ? paymentResultImage : paymentSlipImage}
              className="w-[200px]"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default TowFormComp;
