import React from "react";
import { Select, SelectItem } from "@heroui/react";
import { viewData } from "../../../core/constants";

const SelectView = () => {
  return (
    <>
      {/* <button className="bg-gray-800"></button> */}
      <Select
        classNames={{
          base: "bg-gray-600 text-white text-[20px] w-full",
          label: "bg-red-500",
          mainWrapper: "h-full",
          trigger: "w-full h-full flex flex-row-reverse items-center justify-center items-center p-0 h-full",
          listbox: "flex flex-row items-center p-0",
          selectorIcon: "relative"
        }}
        value={"title"}
        children={"title"}
      >
        {viewData.map((item, index) => {
          return (
            <SelectItem
              classNames={{
                wrapper: "bg-gray-900 border border-red-600 m-0 p-0",
                base: "bg-gray-900 m-0 p-0",
                title: "w-full text-white transition-all hover:bg-gray-400",
              }}
            >
              {`item ${item}`}
            </SelectItem>
          );
        })}
      </Select>
    </>
  );
};

export default SelectView;
