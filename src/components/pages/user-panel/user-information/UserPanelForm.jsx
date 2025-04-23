import { ErrorMessage, Formik, Form } from "formik";
import React, { Fragment } from "react";
import InputBox from "./InputBox";
import { userInformationData } from "../../../../core/constants";
import ChangeImage from "./ChangeImage";
import Maps from "./Maps";
import Btn from "./Btn";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FiSave } from "react-icons/fi";
import * as Yup from "yup";
import { useSelector } from "react-redux";

const UserPanelForm = ({ submitBtnClick, cancelBtnClick }) => {
  const { leftItem, rightItem } = userInformationData;
  const { userProfileInfo } = useSelector((state) => state);
  const { userProfileInfoData } = userProfileInfo;

  const mapClick = (event) => {
    console.log(event.latlng)
  }

  if (userProfileInfoData) {
    var {
      fName,
      lName,
      userImage,
      nationalCode,
      email,
      userAbout,
      phoneNumber,
      homeAdderess,
      linkdinProfile,
      telegramLink,
      latitude,
      longitude,
      gender,
    } = userProfileInfoData;
  }

  console.log("userProfileInfoData form ==>", userProfileInfoData);

  const validation = Yup.object({
    fName: Yup.string()
      .min(2, "حداقل تعداد کاراکتر 4")
      .max(10, "حداکثر تعداد کاراکتر 10"),
    lName: Yup.string()
      .min(2, "حداقل تعداد کاراکتر 4")
      .max(10, "حداکثر تعداد کاراکتر 10"),
    nationalCode: Yup.string()
      .test("nationalCode", "کد ملی نامعتبر است.", (value) => {
        const nationalIdPattern = /^(?!.*(\d)\1{9})\d{10}$/;
        if (nationalIdPattern.test(value)) return true;
      }),
    gender: Yup.string().required("این فیلد اجباریست"),
    email: Yup.string()
      .test("email", "ایمیل معتبر نیست", (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value)) return true;
      }),
    phonNumber: Yup.string()
      .test("phonNumber", "شماره همراه صحیح نمیباشد", (value) => {
        const phoneRegex = /^09[0-9]{9}$/;
        if (phoneRegex.test(value)) return true;
      }),
    telegramAddress: Yup.string()
      .test("telegramAddress", "آدرس تلگرام معتبر نمیباشد", (value) => {
        const telegramPattern = /^https?:\/\/t\.me\/([A-Za-z0-9_-]{5,32})$/;
        if (telegramPattern.test(value)) return true;
      }),
    linkdinAddress: Yup.string()
      .test("linkdinAddress", "این آدرس معتبر نیست", (value) => {
        const linkedInPattern =
          /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]{5,30}$/;
        if (linkedInPattern.test(value)) return true;
      }),
    homeAddress: Yup.string(),
  });

  return (
    <div className="form-control mt-6">
      <Formik
        initialValues={{
          fName: fName,
          lName: lName,
          nationalCode: nationalCode,
          email: email,
          aboutMe: userAbout,
          phonNumber: phoneNumber,
          homeAddress: homeAdderess,
          linkdinAddress: linkdinProfile,
          telegramAddress: telegramLink,
          month: "",
          gender: gender ? "مرد" : "زن",
        }}
        validationSchema={validation}
        onSubmit={submitBtnClick}
      >
        <Form className="font-b-yekan">
          <div className="top-input-control flex gap-x-8">
            {/* <input type="" name="" id="" /> */}
            <div className="right-input w-2/4">
              <div className="top w-full flex gap-x-6">
                <div className="right w-2/4 flex flex-col gap-y-2.5">
                  {rightItem.map((item, index) => {
                    return (
                      <Fragment key={index}>
                        <InputBox
                          // key={index}
                          boxStyle={"w-full"}
                          inputStyle={`w-full ${
                            item.labelText === "کدملی" ||
                            item.labelText === "ایمیل"
                              ? "text-left"
                              : ""
                          }`}
                          labelText={item.labelText}
                          inputName={item.name}
                          inputType={item.type}
                          inputPlaceholder={item.placeHolder}
                        />
                        <ErrorMessage
                          name={item.name}
                          component={"p"}
                          className="text-red-400 indent-1.5 tracking-[1px] font-b-yekan text-[12px] relative top-[-10px]"
                        />
                      </Fragment>
                    );
                  })}
                </div>
                <div className="left w-2/4 flex flex-col gap-y-2.5">
                  {leftItem.map((item, index) => {
                    return (
                      <Fragment key={index}>
                        <InputBox
                          boxStyle={"w-full"}
                          inputStyle={`w-full ${
                            item.labelText === "شماره همراه" ||
                            item.labelText === "تلگرام"
                              ? "text-left"
                              : ""
                          }`}
                          labelText={item.labelText}
                          inputName={item.name}
                          inputType={item.type}
                          inputPlaceholder={item.placeHolder}
                        />
                        <ErrorMessage
                          name={item.name}
                          component={"p"}
                          className="text-red-400 indent-1.5 tracking-[1px] font-b-yekan text-[12px] relative top-[-10px]"
                        />
                      </Fragment>
                    );
                  })}
                </div>
              </div>
              <div className="bottom w-full">
                <InputBox
                  boxStyle={"w-full"}
                  inputStyle={"w-full text-left"}
                  labelText={" لینکداین "}
                  inputName={"linkdinAddress"}
                  inputType={"url"}
                  inputPlaceholder={"https://linkedin.com"}
                />
                <ErrorMessage
                  name="linkdinAddress"
                  component={"p"}
                  className="text-red-400 indent-1.5 tracking-[1px] font-b-yekan text-[12px] relative top-[-8px]"
                />
              </div>
            </div>
            <div className="left-input w-2/4 flex flex-col items-center justify-between">
              <div className="change-image-control">
                <ChangeImage />
              </div>
              <div className="input-control w-full">
                <InputBox
                  boxStyle={"w-full"}
                  inputStyle={"w-full h-[150px] resize-none"}
                  inputName={"aboutMe"}
                  inputPlaceholder={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز با هدف بهبود ابزارهای کاربردی می باشد.`}
                  asType={"textarea"}
                  labelText={"درباره من"}
                />
                <ErrorMessage
                  name="aboutMe"
                  component={"p"}
                  className="text-red-400 indent-1.5 tracking-[1px] font-b-yekan text-[12px] relative top-[-10px]"
                />
              </div>
            </div>
          </div>
          <hr className="outline-0 border-0 w-full h-[1px] bg-[#F2F2F2] mt-5" />
          <div className="bottom-input-control flex items-center mt-3">
            <div className="input-control w-[48%] flex flex-col justify-center">
              <InputBox
                boxStyle={"w-full"}
                inputStyle={"w-full h-[60px] resize-none"}
                inputName={"homeAddress"}
                inputPlaceholder={"مازندران نکا سه راه زاغمرز"}
                asType={"textarea"}
                labelText={"آدرس"}
              />
              <ErrorMessage
                name="homeAddress"
                component={"p"}
                className="text-red-400 indent-1.5 tracking-[1px] font-b-yekan text-[12px] relative top-0.5"
              />
            </div>
            <div className="maps-control w-2/4 flex items-center justify-center">
              <div className="maps-control">
                <Maps classNameStyles={"w-[110px] h-[110px]"} mapClick={mapClick}/>
              </div>
            </div>
          </div>

          <div className="btn-control w-full flex justify-end my-9 gap-x-5">
            <Btn
              type={"submit"}
              text={" ذخیره تغییرات "}
              btnStyle={`group py-[5px] px-[20px] bg-[#00E0DB] transition-all
                rounded-[15px] font-b-yekan text-[#003B39] flex items-center gap-x-[12px] cursor-pointer
                `}
            >
              <FiSave className="" size={23} />
            </Btn>

            <Btn
              onClick={cancelBtnClick}
              text={" لغـــو "}
              btnStyle={`group py-[5px] px-[20px] bg-[#F5F5F5] transition-all
                rounded-[15px] font-b-yekan text-[#D4D4D4] flex items-center gap-x-[12px] cursor-pointer
                hover:bg-red-300 hover:text-red-700`}
            >
              <IoMdCloseCircleOutline
                className="group-hover:text-red-700"
                size={23}
              />
            </Btn>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserPanelForm;
