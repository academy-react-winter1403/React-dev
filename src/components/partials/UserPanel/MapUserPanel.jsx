import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import React, { useState } from "react";
import UserBg from "./UserBg";
import MyComponent from "./LocationPicker";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { SelectLatitude, SelectLongitude } from "../../../redux/actions";

const MapUserPanel = () => {
  const [hide, setHide] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const {Latitude,Longitude} = useSelector((state) => state.locationSlice)
  const dispatch = useDispatch();

  const handleLocationSelect = (latlng) => {
    setSelectedLocation(latlng);
    dispatch(SelectLatitude(latlng.lat.toFixed(4)))
    dispatch(SelectLongitude(latlng.lng.toFixed(4)))
    console.log("lat=====>",Latitude,"lng=====>",Longitude)
  };
  const handleSubmit = () => {
    if (!selectedLocation) {
      toast("موقعیت مکانی خود را انتخاب کنید");
    } else {
      toast("موقعیت مکانی شما ثبت شد");
    }
  };
  return (
    <>
      {hide && (
        <UserBg>
        <div className="w-[90%] h-[83%] mt-7 mr-7 flex flex-col gap-3">
          <RxCross2
            style={{
              width: "28px",
              height: "28px",
              backgroundColor: "#999",
              borderRadius: "100%",
            }}
            onClick={() => setHide(!hide)}
          />
          <div className="w-[90%] h-[432px] m-auto">
            <div className="h-[90%] relative">
              <MyComponent onSelect={handleLocationSelect} />
              <TiTick
                style={{
                  width: "40px",
                  height: "40px",
                  position: "absolute",
                  bottom: "-20px",
                  right: "300px",
                  backgroundColor: "white",
                  borderRadius: "100%",
                  color: "green",
                  zIndex: "1000",
                }}
                onClick={handleSubmit}
              />
            </div>
            <div className="flex justify-end items-center gap-5 ml-5">
              <span className="text-white">
                <strong>{selectedLocation?.lat?.toFixed(4) || "..."}</strong>
              </span>
              <span className="text-white">
                <strong>{selectedLocation?.lng?.toFixed(4) || "..."}</strong>
              </span>
            </div>
          </div>
        </div>
      </UserBg>
      )}
    </>
  );
};

export default MapUserPanel;
