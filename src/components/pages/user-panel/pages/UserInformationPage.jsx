import { Form, Formik } from "formik";
import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { LuUserPen } from "react-icons/lu";

const UserInformationPage = () => {
  return (
    <div className="use-information-control w-full p-1 flex flex-col items-center">
      <div className="top-item-control w-[95%] flex justify-center items-center gap-x-3 relative">
        <div
          className="icon-control absolute bg-[#F7F7F7] drop-shadow-[0_1px_2px_#00000040]
            right-0 top-[-18px] p-2.5 rounded-xl"
        >
          <LuUserPen size={23} className="text-[#B5B5B5]" />
        </div>
        <hr className="right-hr outline-0 border-0 w-[33%] h-[1px] bg-[#f4f4f4]" />
        <h3 className="font-b-yekan text-[#9D9D9D] text-nowrap"> ویرایش اطلاعات کاربری </h3>
        <hr className="outline-0 border-0 w-[33%] h-[1px] bg-[#f4f4f4]" />
      </div>
      <div className="center-item-control">
        <div className="form-control">
          <Formik>
            <Form>
              <div className="top-input-control">
                <div className="right-input">
                  
                </div>
                <div className="left-input"></div>
              </div>
              <div className="bottom-input-control"></div>
            </Form>
          </Formik>       
        </div>
      </div>
    </div>
  );
};

export default UserInformationPage;
