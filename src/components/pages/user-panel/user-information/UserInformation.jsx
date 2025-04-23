import React from "react";
import { FiEdit3 } from "react-icons/fi";
import TextCom from "./TextCom";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";
import Maps from "./Maps";
import { HiOutlineUser } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { addUserProfileInfoData } from "../../../../redux/actions";
import { getItemLocalStorage } from "../../../../core/hooks/local-storage/getItemLocalStorage";
import { getDataUserPanel } from "../../../../core/services";

const UserInformation = () => {
  const token = getItemLocalStorage("token");
  const dispatch = useDispatch()

  const { isError, isLoading, data } = getDataUserPanel(
    "userPanelProfileInformation",
    "/SharePanel/GetProfileInfo",
    token
  );

  if (!isLoading) {
    console.log(data);
    dispatch(addUserProfileInfoData(data));
  }

  const { userProfileInfo } = useSelector((state) => state);
  const { userProfileInfoData } = userProfileInfo;

  if (userProfileInfoData) {
    console.log(userProfileInfoData);
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
  const navigate = useNavigate();

  const btnClickHandler = () => {
    navigate("/user-panel/user-information/edit");
  };

  return (
    <>
      {userProfileInfoData && (
        <div
          className="usre-information w-full p-7 rounded-xl bg-[#F6FFFF]
            drop-shadow-[0_1px_3px_#00000040] font-b-yekan relative mt-14"
        >
          <div
            className="icon-control absolute bg-[#F7F7F7] drop-shadow-[0_1px_2px_#00000040]
            right-[38px] top-[-26px] p-2.5 rounded-xl"
          >
            <HiOutlineUser className="text-[#B5B5B5]" size={26} />
          </div>
          <div className="top w-full flex justify-between mt-3.5 max-md:flex-col max-md:items-center max-md:gap-y-6">
            <div className="right w-[40%] max-md:w-full flex flex-col gap-y-9 max-md:gap-y-6">
              <TextCom
                userName={`${fName} ${lName}`}
                placeholderText={" نام و نام خانوادگی : "}
              />
              <TextCom userName={nationalCode} placeholderText={" کد ملی : "} />
              <TextCom userName={email} placeholderText={" ایمیل : "} />
              <TextCom
                userName={`${gender ? " مرد " : " زن "}`}
                placeholderText={" جنسیت : "}
              />
              <TextCom
                elemTitle={userAbout}
                userName={userAbout}
                placeholderText={" درباره ما : "}
                classStyles={
                  "w-full line-clamp-3 text-ellipsis overflow-x-hidden"
                }
              />
            </div>
            <hr className="outline-0 border-0 w-[1px] h-[280px] bg-[#e4e4e4] max-md:hidden" />
            <div className="left w-[40%] max-md:w-full flex flex-col gap-y-6 max-md:gap-y-6">
              <TextCom
                userName={phoneNumber}
                placeholderText={" شماره همراه : "}
              />
              <TextCom userName={telegramLink} placeholderText={" تلگرام : "} />
              <TextCom
                userName={linkdinProfile}
                placeholderText={" لینکداین : "}
              />
              <TextCom
                userName={homeAdderess}
                placeholderText={" آدرس : "}
                classStyles={
                  "w-full line-clamp-3 text-ellipsis overflow-x-hidden"
                }
              />
              <div
                className="maps-control flex justify-between items-start max-lg:flex-row
                max-xl:flex-col gap-y-2 max-md:flex-col max-md:items-center"
              >
                <div className="maps-text-control flex flex-col gap-y-6 justify-start">
                  <TextCom
                    userName={longitude}
                    placeholderText={" طول جغرافیایی : "}
                  />
                  <TextCom
                    userName={latitude}
                    placeholderText={" عرض جغرافیایی : "}
                  />
                </div>
                <Maps />
              </div>
            </div>
          </div>
          <div className="bottom w-full flex justify-center mt-7">
            <Btn
              text={" ویرایش  "}
              btnStyle={`text-[#005653] bg-[#F6FFFF] border border-[#01CEC9]
              flex items-center pt-[3px] pb-[5px] px-[30px] gap-x-[8px] cursor-pointer
              transition-all hover:bg-[#01CEC9] hover:text-[#fff]`}
              onClick={btnClickHandler}
            >
              <FiEdit3 />
            </Btn>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInformation;
