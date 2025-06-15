import React, { useEffect, useState } from "react";
import CommentProfile from "./CommentProfile";
import AOS from "aos";
import "aos/dist/aos.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const AddComment = ({ btnClick, closeBtnClick }) => {
  // AOS
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const validation = yup.object({
    title: yup
      .string()
      .min(8, " حدداقل تعداد کاراکتر 8 ")
      .max(14, " حداکثر تعداد کاراکتر 14 ")
      .required(" پر کردن این فیلد الزامیست "),
    description: yup
      .string()
      .min(15, " حدداقل تعداد کاراکتر 15 ")
      .max(35, " حداکثر تعداد کاراکتر 35 ")
      .required(" پر کردن این فیلد الزامیست "),
  });

  return (
    <div
      className="commentBox-holder w-full bg-[#F9F9F9]
        drop-shadow-[0_1px_2px_#00000040] rounded-[10px] mt-[20px] p-6"
      data-aos="zoom-in"
    >
      {/* profile */}
      <CommentProfile />
      {/* hr */}
      <div className="hr-control w-full flex justify-center mt-[12px]">
        <hr className="outline-0 border-0 w-full h-[2px] bg-[#EDEDED]" />
      </div>
      {/* write text */}
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={validation}
        onSubmit={btnClick}
      >
        <Form>
          <div className="w-full h-50 rounded-2xl shadow mt-2 flex relative flex-col gap-y-2.5 overflow-hidden">
            {/* <textarea
              className="w-full h-full border-none outline-none p-3 resize-none text-start align-top"
              placeholder="نظر خود را بنویسید..."
            ></textarea> */}
            <Field
              className="w-full h-[20%] border-none outline-none bg-white px-3 resize-none text-start leading-10 font-b-yekan"
              name="title"
              placeholder="عنوان کامنت..."
              as="textarea"
            />
            <ErrorMessage
              name="title"
              component={"p"}
              className="absolute left-2 top-2.5 text-red-400 text-[15px] indent-3 font-b-yekan"
            />
            <Field
              className="w-full h-[70%] border-none outline-none bg-white p-3 resize-none text-start align-top font-b-yekan"
              name="description"
              placeholder="نظر خود را بنویسید..."
              as="textarea"
            />
            <ErrorMessage
              name="description"
              component={"p"}
              className="absolute bottom-2.5 right-0 text-red-400 text-[15px] indent-3 font-b-yekan"
            />
          </div>
          {/* buttons */}
          <div className="p-1 flex md:justify-end xs:justify-center gap-2">
            <button
              className="bg-red-500 hover:bg-red-600  transition h-10 w-30 rounded-xl shadow-lg text-white p-1
                cursor-pointer text-center"
              onClick={closeBtnClick}
            >
              لغو
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600  transition h-10 w-30 rounded-xl shadow-lg text-white p-1 cursor-pointer text-center"
              // onClick={btnClick}
            >
              ثبت نظر
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddComment;
