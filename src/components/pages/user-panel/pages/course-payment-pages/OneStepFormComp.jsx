import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import React from "react";
import * as Yup from "yup"

const OneStepFormComp = ({ submitHadnle }) => {
    const validation = Yup.object({
        paymentId: Yup.string().required(" این فیلد اجباریست "),
        paymentDate: Yup.string().required(" این فیلد اجباریست "),
        paymentCost: Yup.string().required(" این فیلد اجباریست "),
    })

    const submitHadnlee = (value) => {
        // console.log(value)
        submitHadnle(value)
    }    

  return (
    <div className="w-[70%]">
      <Formik
        onSubmit={(value) => submitHadnle(value)}
        initialValues={{ paymentId: "", paymentDate: "", paymentCost: "" }}
        validationSchema={validation}
      >
        <Form className="flex w-full justify-between max-sm:flex-col max-sm:items-center">
          <div className="input-control flex flex-col gap-y-4">
            <div className="paymentId-field">
              <p className="text-[13px] text-[#FFFFFF]"> شناسه پرداختی </p>
              <Field
                placeholder=""
                name="paymentId"
                className="bg-[#D9D9D940] py-[6px] px-[25px] rounded-[8px] text-white mt-1 outline-0 border-0"
              />
              <ErrorMessage component={"p"} name="paymentId" className="text-[14px] text-orange-300"/>
            </div>
            <div className="paymentDate-field">
              <p className="text-[13px] text-[#FFFFFF]"> تاریخ پرداخت </p>
              <Field
                type="date"
                placeholder=""
                name="paymentDate"
                className="bg-[#D9D9D940] py-[6px] px-[25px] w-[225px] rounded-[8px] text-white mt-1 outline-0 border-0"
              />
              <ErrorMessage component={"p"} name="paymentDate" className="text-[14px] text-orange-300"/>
            </div>
            <div className="paymentCost-field">
              <p className="text-[13px] text-[#FFFFFF]">
                مبلغ پرداختی ( به تومان)
              </p>
              <Field
                placeholder=""
                name="paymentCost"
                className="bg-[#D9D9D940] py-[6px] px-[25px] rounded-[8px] text-white mt-1 outline-0 border-0"
              />
              <ErrorMessage component={"p"} name="paymentCost" className="text-[14px] text-orange-300"/>
            </div>
          </div>
          <div className="btnSubmit-control flex items-end max-sm:mt-5 max-sm:w-[70%]">
            <button
              type="submit"
              className={`text-[#fff] bg-[#BFBFBF] w-[130px] max-sm:w-full h-[40px] rounded-[8px] cursor-pointer`}
            >
              ثبت اطلاعات
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default OneStepFormComp;
