import React from "react";
import { Select, SelectItem } from "@heroui/react";

const SortTypeCard = ({ dataMap, onChange }) => {
  return (
    <>
      <Select
        placeholder="صعودی"
        classNames={{
          base: "text-black text-[20px] text-nowrap w-[148px] h-[45px] rounded-[20] font-b-yekan",
            label: "bg-red-500 font-b-yekan",
          mainWrapper:
            "h-full bg-[#FFFFFF] shadow-[0_1px_3px_#00000040] border border-[#cccccc] rounded-[50px] text-[#005B58] font-b-yekan",
          trigger:
            "h-full flex flex-row-reverse items-center justify-center items-center p-0 bg-transparent rounded-[50px] font-b-yekan",
          selectorIcon: "relative font-b-yekan",
          listboxWrapper:
            "bg-[#FFFFFFF7] shadow-[0_1px_3px_#00000040] border border-[#cccccc] rounded-[10px] font-b-yekan",
          helperWrapper: "bg-transparent font-b-yekan",
        }}
      >
        {dataMap.map((item, index) => {
          return (
            <SelectItem
              key={index}
              classNames={{
                wrapper:
                  "bg-gray-300 border border-red-600 m-0 p-0 relative left-0 ",
                base: "w-full m-0 p-0 text-center flex justify-center relative left-0 ",
                title: `text-white w-full transition-all hover:bg-gray-600 hover:text-white p-[8px] py-[5px]
                  text-black relative right-[-3.5px] font-b-yekan border rounded-[5px] border-[#cccccc] m-[5px]`,
                shortcut: "text-center w-full",
                description: "w-full p-0",
              }}
              onClick={() => onChange(item)}
            >
              {item}
            </SelectItem>
          );
        })}
      </Select>
    </>
  );
};

export default SortTypeCard;
