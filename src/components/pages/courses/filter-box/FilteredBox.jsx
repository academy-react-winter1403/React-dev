import { Accordion, AccordionItem } from "@heroui/react";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const FilteredBox = ({ children, filterText, currencyUnit }) => {
  return (
    <>
      {/* <div
        className="group filter-box-control bg-[#FAFAFA] drop-shadow-[0_1px_2px_#00000040]
        pt-[7px] pb-[11px] px-[12px] rounded-[6px] cursor-pointer "
      >
        <input type="checkbox" className="hidden" id="technologyCheck" />
        <label htmlFor="technologyCheck" className="">
          <div className="top flex items-center justify-between">
            <p className="text-[18px] font-[400] text-[#333333]"> {filterText} </p>
            <IoIosArrowUp style={{ color: "rgb(113, 113, 113)" }} size={18} />
          </div>
        </label>
        <div className="hr-control flex justify-center mt-[5px]">
          <hr className="outline-0 border-0 w-[97%] h-[0.5px] bg-[#E6E6E6]" />
        </div>
        <div
          className="filter-option-control max-h-[135px]
          overflow-y-auto overflow-x-hidden transition-all"
        >
          {children}
        </div>
      </div> */}

      {/* { filterText !== "تکنولوژی" && <hr className="w-full h-[1px] border-0 outline-0 bg-[#000]"/> } */}
      <Accordion variant="splitted"
        itemClasses={
          {base: "filter-box-control bg-[#FAFAFA] drop-shadow-[0_1px_2px_#00000040] pt-[7px] pb-[11px] px-[12px] rounded-[6px] cursor-pointer"}
        }>
        <AccordionItem key="1" aria-label="Accordion 1" title={filterText}
          classNames={{
            base:"",
            trigger: "group w-[20px] w-full flex justify-between",
            title: "30px",
            indicator: "rtl:-rotate-180 rtl:data-[open=true]:-rotate-90",
            content: "flex flex-col gap-y-[8px]"
          }}
        >
          <hr className="w-full h-[1px] border-0 outline-0 bg-[#0000001c] mt-[5px]"/>
          {children}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FilteredBox;
