import React from "react";
import { Select, SelectItem } from "@heroui/react";
import { viewData } from "../../../core/constants";

const SelectView = ({ viewClick }) => {
  const clickHandler = (value) => {
    console.log(value)
    viewClick(value);
  };

  return (
    <>
      {/* <button className="bg-gray-800"></button> */}
      <Select
        classNames={{
          base: "bg-[#D47300] text-white text-[20px] text-nowrap w-[148px] h-[45px] rounded-[10px]",
          label: "bg-red-500",
          mainWrapper: "h-full",
          trigger:
            "h-full flex flex-row-reverse items-center justify-center items-center p-0",
          listbox: "flex flex-row items-center p-0",
          selectorIcon: "relative",
        }}
        value={"title"}
        children={"title"}
        placeholder="view 3"
      >
        {viewData.map((item, index) => {
          return (
            <SelectItem
              classNames={{
                wrapper: "bg-gray-900 border border-red-600 m-0 p-0",
                base: "bg-gray-900 m-0 p-0",
                title: "text-white transition-all hover:bg-gray-400",
              }}
              onClick={() => clickHandler(item)}
            >
              {`view ${item}`}
            </SelectItem>
          );
        })}
      </Select>
    </>
  );
};

export default SelectView;
