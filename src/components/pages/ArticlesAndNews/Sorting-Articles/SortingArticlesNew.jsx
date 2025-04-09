// import React from "react";

// const SortingArticlesNew = () => {
  
  //   return (
    //     <div className="w-52 h-full bg-white rounded-[31px] shadow-sm flex justify-evenly items-center">
//       <p className="text-lg text-[#333] font-b-yekan font-normal">جدید ترین</p>
//     </div>
//   );
// };

{/* <IoChevronDownOutline
  style={{ color: "#005B58", width: "20px", height: "20px" }}
/> */}
{/* <MdSort style={{ color: "#005B58", width: "20px", height: "20px" }} /> */}
// export default SortingArticlesNew;

// import { IoChevronDownOutline } from "react-icons/io5";
// import { MdSort } from "react-icons/md";
import { Select, SelectItem } from "@heroui/react";
import {sortingArticlesNews} from './../../../../core/constants/articlesMockApi/sort_data'

export const SelectorIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      {/* <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M8 9l4 -4l4 4" />
      <path d="M16 15l-4 4l-4 -4" /> */}
    </svg>
  );
};


export default function Sorting({selectData}) {
  const selectHandler = (article) => {
    selectData(article)
  }
  return (
    <Select
      disableSelectorIconRotation
      placeholder="جدید ترین"
      selectorIcon={<SelectorIcon />}
      classNames={{
        trigger:
          "w-52 h-full rounded-t-[31px] shadow-sm flex justify-evenly items-center bg-white text-lg text-[#333] font-b-yekan font-normal p-1.5",
      }}
    >

      {sortingArticlesNews.map((article) => (
        <SelectItem
          onClick={() => selectHandler(article.label)}
          key={article.key}
          classNames={{
            base: "bg-white flex justify-center items-center  text-lg text-[#333] font-b-yekan font-normal",
          }}
        >
          {article.label}
        </SelectItem>
      ))}
    </Select>
  );
}
