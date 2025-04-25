import React from "react";
import { LuUserPen } from "react-icons/lu";
import UserPanelForm from "./UserPanelForm";
import {
  getDataUserPanel,
  updateUserInformation,
} from "../../../../core/services";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserProfileInfoData } from "../../../../redux/actions";
import { toast } from "react-toastify";

const UserInformationEditPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    isError: firstError,
    isLoading: firstLoading,
    data,
  } = getDataUserPanel(
    "userPanelProfileInformation",
    "/SharePanel/GetProfileInfo"
  );

  if (!firstLoading) {
    console.log("data ==>", data);
    dispatch(addUserProfileInfoData(data));
  }

  const { mutate, data: postingData, isLoading, isError } = updateUserInformation();
  const submitBtnClickHandler = (event) => {
    const dataObj = {
      LName: event.lName,
      FName: event.fName,
      UserAbout: event.aboutMe,
      LinkdinProfile: event.linkdinAddress,
      TelegramLink: event.telegramAddress,
      ReceiveMessageEvent: false,
      HomeAdderess: event.homeAddress,
      NationalCode: event.nationalCode,
      Gender:
        event.gender === "مرد" ? true : event.gender === "زن" ? false : null,
      BirthDay: "1/1/1753",
      Latitude: 50,
      Longitude: 20,
    };
    mutate(["/SharePanel/UpdateProfileInfo", "/SharePanel/GetProfileInfo", dataObj, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }], {
      onSuccess: (data) => {
        if (data.response) {
          toast(data.response.data.ErrorMessage[0])
        }else {
          toast(data.data.message)
          navigate("/user-panel/user-information");
        }
      },
    });
  };

  const cancelBtnClickHandler = () => {
    navigate("/user-panel/user-information");
  }

  return (
    <>
      <div className="top-item-control w-[95%] flex justify-center items-center gap-x-3 relative mt-5">
        <div
          className="icon-control absolute bg-[#F7F7F7] drop-shadow-[0_1px_2px_#00000040]
            right-0 top-[-18px] p-2.5 rounded-xl"
        >
          <LuUserPen size={23} className="text-[#B5B5B5]" />
        </div>
        <hr className="right-hr outline-0 border-0 w-full h-[1px] bg-[#f4f4f4]" />
        <h3 className="font-b-yekan text-[#9D9D9D] text-nowrap">
          {" "}
          ویرایش اطلاعات کاربری{" "}
        </h3>
        <hr className="outline-0 border-0 w-full h-[1px] bg-[#f4f4f4]" />
      </div>
      <div className="form-item-control">
        {!firstLoading && <UserPanelForm submitBtnClick={submitBtnClickHandler} cancelBtnClick={cancelBtnClickHandler}/>}
      </div>
    </>
  );
};

export default UserInformationEditPage;
