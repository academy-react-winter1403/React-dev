import React from "react";
import { Select, SelectItem } from "@heroui/react";

const SelectView = ({ viewClick, dataMap, concatText, placeholder }) => {
  const clickHandler = (value) => {
    console.log(value);
    viewClick(value);
  };

  return (
    <>
      <div className="bg-gray-300"></div>
      {/* <button className="bg-gray-800"></button> */}
      <Select
        classNames={{
          base: "bg-[#D47300] bg-[#FFFFFF] text-white text-[20px] text-nowrap md:w-[148px] md:h-[45px] xs:w-[118px] xs:h-[45px] rounded-[10px] border cursor-pointer",
          label: "bg-red-500",
          mainWrapper:
            "h-full rounded-[10px] text-[#005B58] border border-[#cccccc] shadow-[0_1px_3px_#00000040]",
          trigger:
            "h-full flex flex-row-reverse items-center justify-center items-center p-0 rounded-[10px] cursor-pointer",
          listbox: "flex flex-row items-center p-0",
          listboxWrapper:
            "bg-[#FFFFFFF7] shadow-[0_1px_3px_#00000040] border border-[#cccccc] rounded-[5px] font-b-yekan",
          selectorIcon: "relative",
        }}
        // value={"title"}
        // children={"title"}
        placeholder={placeholder}
      >
        {dataMap.map((item, index) => {
          return (
            <SelectItem
              classNames={{
                // wrapper: "bg-gray-300 border border-red-600 m-0 p-0 relative left-0",
                // base: " m-0 p-0 text-center flex justify-center relative left-0",
                // title: "text-white w-full transition-all hover:bg-gray-400 p-[8px] text-black relative left-0",
                // shortcut: "text-center w-full",
                // description: "w-full p-0",

                wrapper:
                  "bg-gray-300 border border-red-600 m-0 p-0 relative left-0",
                base: "w-full m-0 p-0 text-center flex justify-center relative left-0 cursor-pointer",
                title: `text-white w-full transition-all hover:bg-gray-600 hover:text-white p-[8px] py-[5px]
                  text-black relative right-[-3.5px] font-b-yekan border rounded-[5px] border-[#cccccc] m-[5px]`,
                shortcut: "text-center w-full",
                description: "w-full p-0",
              }}
              onClick={() => clickHandler(item)}
            >
              {concatText + " " + item}
            </SelectItem>
          );
        })}
      </Select>
    </>
  );
};

export default SelectView;
