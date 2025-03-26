import { Accordion, AccordionItem } from "@heroui/react";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const FilteredBox = ({ children, filterText, currencyUnit }) => {
  return (
    <>
      <Accordion
        variant="splitted"
        itemClasses={{
          base: `filter-box-control max-h-[200px] overflow-y-auto overflow-x-hidden bg-[#FAFAFA]
              drop-shadow-[0_1px_2px_#00000040]
              pt-[7px] pb-[11px] px-[12px] rounded-[6px] cursor-pointer`,
        }}
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={filterText}
          classNames={{
            base: "",
            trigger: "group w-[20px] w-full flex justify-between",
            title: "30px",
            indicator: "rtl:-rotate-180 rtl:data-[open=true]:-rotate-90",
            content: `flex flex-col max-h-[200px]
              overflow-y-auto overflow-x-hidden`,
          }}
        >
          {children}
        </AccordionItem>
      </Accordion>
      {/* <hr className="w-full h-[1px] border-0 outline-0 bg-[#0000001c] mt-[5px]" /> */}
    </>
  );
};

export default FilteredBox;
