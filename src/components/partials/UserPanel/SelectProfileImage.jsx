import React, { useRef, useState } from "react";
import UserBg from "./UserBg";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { GoPlus } from "react-icons/go";
import {
  deleteDataApi,
  getDataUserPanel,
  postData,
} from "../../../core/services";
import { getItemLocalStorage } from "../../../core/hooks/local-storage/getItemLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllImageData,
  addImageProfile,
  addSelectImageProfile,
} from "../../../redux/actions";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

const SelectProfileImage = () => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef();
  const [hide, setHide] = useState(true);
  const token = getItemLocalStorage("token");
  const dispatch = useDispatch();
  const [imageId, setImageId] = useState(null);
  const { allImageData, selectImageProfile, imageProfile } = useSelector(
    (state) => state.userProfileInfo
  );

  // get image

  const { isLoading, data } = getDataUserPanel(
    "allImageProfile",
    "/SharePanel/GetProfileInfo",
    token
  );
  if (!isLoading) {
    dispatch(addAllImageData(data.userImage));
    dispatch(addImageProfile(data.currentPictureAddress));
  }

  // post image

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const formFile = event.target.files;
    const formData = new FormData();
    Array.from(formFile).forEach((fileData) => {
      formData.append("formFile", fileData);
    });
    try {
      const response = await postData("/SharePanel/AddProfileImage", formData);
      console.log(response);
      queryClient.invalidateQueries(["allImageProfile"]);
      toast(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  // delete image

  const handleDelete = async (imageId) => {
    const formData = new FormData();
    formData.append("DeleteEntityId", imageId);
    try {
      const response = await deleteDataApi("/SharePanel/DeleteProfileImage", {
        data: formData,
      });
      console.log(response);
      console.log(imageId);
      toast(response.data.message);
      queryClient.invalidateQueries(["allImageProfile"]);
    } catch (error) {
      console.log(error);
    }
  };

  // select image not compelet

  const handleSelectImage = (id, url) => {
    console.log("id========>", id);
    console.log("url========>", url);
    setImageId(id);
    dispatch(addSelectImageProfile(url));
  };

  const handleSelect = async () => {
    console.log("ImageId:", imageId);
    const formData = new FormData();
    formData.append("ImageId", imageId);
    try {
      const response = await postData(
        "/SharePanel/SelectProfileImage",
        formData
      );
      console.log(response);
      toast(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {hide && (
        <UserBg>
          <div className="w-[85%] h-[83%] mt-7 mr-7 flex flex-col gap-3">
            <RxCross2
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "#999",
                borderRadius: "100%",
              }}
              onClick={() => setHide(!hide)}
            />
            <div className="size-[250px] m-auto relative">
              <img
                src={selectImageProfile ? selectImageProfile : imageProfile}
                style={{ width: "100%", height: "100%", borderRadius: "12px" }}
              />
              <TiTick
                style={{
                  width: "25px",
                  height: "25px",
                  position: "absolute",
                  bottom: "-10px",
                  right: "-10px",
                  backgroundColor: "white",
                  borderRadius: "100%",
                  color: "green",
                }}
                onClick={handleSelect}
              />
            </div>
            <div className="w-[90%] h-[115px] m-auto flex justify-end items-center gap-5">
              <GoPlus
                style={{ color: "white", width: "35px", height: "35px" }}
                onClick={handleIconClick}
              />
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
                multiple
              />
              {allImageData
                ? allImageData.map((item, index) => {
                    return (
                      <div className="size-[110px] relative" key={index}>
                        <img
                          src={item.puctureAddress}
                          alt={item.id}
                          onClick={() =>
                            handleSelectImage(item.id, item.puctureAddress)
                          }
                          style={{ borderRadius: "12px" }}
                        />
                        <RxCross2
                          style={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: "white",
                            color: "red",
                            position: "absolute",
                            top: "-5px",
                            left: "-5px",
                            borderRadius: "100%",
                          }}
                          onClick={() => handleDelete(item.id)}
                        />
                      </div>
                    );
                  })
                : 0}
            </div>
          </div>
        </UserBg>
      )}
    </>
  );
};

export default SelectProfileImage;
