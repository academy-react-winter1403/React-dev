import React from "react";
import Input from "../../../common/input/Input";
import SortTypeCard from "../../../common/SortTypeCard";
import { myCourseMockApi, sortColData } from "../../../../core/constants";
import TextComp from "../../../common/user-panel-input/TextComp";
import UserPanelCard from "../../../partials/user-panel/UserPanelCard";

const MyCourseSection = () => {
  const changeHandler = () => {};

  return (
    <div className="my-course-container mt-2.5">
      <div className="top border-b-[1px] border-gray-200 pb-5">
        <div className="sort-control flex justify-between">
          <div className="input-control w-[60%] max-md:w-full">
            <Input
              type={"text"}
              placeholder={"چی میخوای یاد بگیری؟..."}
              change={changeHandler}
            />
          </div>
          <SortTypeCard dataMap={sortColData}/>
        </div>
      </div>
      <div className="center">
        <TextComp dataMaper={myCourseMockApi} boxControlStyle={"w-[70%]"} boxContainerStyle={"mt-[23px]"}/>
        <UserPanelCard trashcanFlag={true} bgCalc={3}/>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default MyCourseSection;
