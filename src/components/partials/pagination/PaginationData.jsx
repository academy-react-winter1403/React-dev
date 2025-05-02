import React from "react";
import { Pagination } from "@heroui/react";
// import { useDispatch } from "react-redux";

const PaginationData = ({totalCount,RowsOfPage,changePageNumber,initialPageNum}) => {
  // const paginationChangeHandler = (pageNum) => {
  //   pageChange(pageNum);
  // };
  // const dispatch = useDispatch();
  const totalPages = Math.ceil(totalCount / RowsOfPage);
    const pageChangeHandler = (pageEvent) => {
      console.log(pageEvent);
      changePageNumber(pageEvent)
      // dispatch(changePageNumber(pageEvent));
    };

  return (
    <Pagination
      loop
      total={totalPages}
      initialPage={initialPageNum}
      showControls


      classNames={{
        base: ["cursor-pointer", "rounded-[5px] relative flex justify-center"],
        item: "w-[25px] h-[25px] text-[#333333] hover:bg-[#FFB800] bg-[#FAFAFA] drop-shadow-[0_1px_2px_#0000004D] rounded-[50%]",
        prev: "rotate-[180deg] w-[25px] h-[25px] bg-[#FAFAFA] drop-shadow-[0_1px_2px_#0000004D] text-[#777777] rounded-[50%] hover:bg-black hover:text-white",
        next: "w-[25px] h-[25px] bg-[#FAFAFA] drop-shadow-[0_1px_2px_#0000004D] text-[#777777] rounded-[50%] hover:bg-black hover:text-white",
        wrapper:"z-20 flex gap-x-[6px] relative justify-center mt-[22px] transition-colors",
        cursor: "w-[25px] h-[25px] bg-[#FFB800] rounded-[50%]",
      }}



      onChange={pageChangeHandler}
    />
  );
};

export default PaginationData;