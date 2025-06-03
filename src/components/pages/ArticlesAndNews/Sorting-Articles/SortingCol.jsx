// import React from "react";
// import { Select, SelectItem } from "@heroui/react";
// import { useTranslation } from "react-i18next";
// import { sortingArticlesNews } from "../../../../core/constants/articlesMockApi/sort_data";

// const SortingCol = ({ dataMap, onChange }) => {
//    const { t } = useTranslation();
//    const getsortingArticlesNews = sortingArticlesNews(t);
//   return (
//     <>
//       <div className="bg-(--boxes-article) whitespace-nowrap"></div>
//       <Select
//         // placeholder="پرطرفدارترین"
//         placeholder={t("mostPopular")}
//         classNames={{
//           base: "text-black md:text-[18px] xs:text-[16px] text-nowrap md:w-[148px] md:h-[45px] xs:w-[118px] xs:h-[45px] rounded-[10px] font-b-yekan cursor-pointer ",
//             label: "bg-red-500 font-b-yekan cursor-pointer ",
//           mainWrapper:
//             "h-full bg-(--boxes-article) shadow-[0_1px_3px_#00000040] border border-[#cccccc] rounded-[10px] text-[#005B58] font-b-yekan cursor-pointer",
//           trigger:
//             "h-full flex flex-row-reverse items-center justify-center items-center p-0 bg-transparent rounded-[10px] font-b-yekan cursor-pointer",
//           selectorIcon: "relative font-b-yekan",
//           listboxWrapper:
//             " bg-(--course-filter) shadow-[0_1px_3px_#00000040] border border-[#cccccc] rounded-[5px] font-b-yekan",
//           helperWrapper: "bg-transparent font-b-yekan",
//         }}
//       >
//         {dataMap.map((item, index) => {
//           return (
//             <SelectItem
//               key={index}
//               classNames={{
//                 wrapper:
//                   "bg-gray-300 border border-red-600 m-0 p-0 relative left-0 ",
//                 base: "w-full m-0 p-0 text-center flex justify-center relative left-0 ",
//                 title: `text-white w-full transition-all hover:bg-gray-600 hover:text-white p-[8px] py-[5px]
//                   text-black relative right-[-3.5px] font-b-yekan border rounded-[5px] border-[#cccccc] m-[5px]`,
//                 shortcut: "text-center w-full",
//                 description: "w-full p-0",
//               }}
//               onClick={() => onChange(item)}
//             >
//               {item}
//             </SelectItem>
//           );
//         })}
//       </Select>
//     </>
//   );
// };

// export default SortingCol;


import React from "react";
import { Select, SelectItem } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { sortingArticlesNews } from "../../../../core/constants/articlesMockApi/sort_data";

const SortingCol = ({ dataMap = [], onChange }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-(--boxes-article) whitespace-nowrap">
      <Select
        placeholder={t("mostPopular")}
        classNames={{
          base: "text-black md:text-[18px] xs:text-[16px] text-nowrap md:w-[148px] md:h-[45px] xs:w-[118px] xs:h-[45px] rounded-[10px] font-b-yekan cursor-pointer",
          label: "bg-red-500 font-b-yekan cursor-pointer",
          mainWrapper:
            "h-full bg-(--boxes-article) shadow-[0_1px_3px_#00000040] border border-[#cccccc] rounded-[10px] text-[#005B58] font-b-yekan cursor-pointer",
          trigger:
            "h-full flex flex-row-reverse items-center justify-center items-center p-0 bg-transparent rounded-[10px] font-b-yekan cursor-pointer",
          selectorIcon: "relative font-b-yekan",
          listboxWrapper:
            "bg-(--course-filter) shadow-[0_1px_3px_#00000040] border border-[#cccccc] rounded-[5px] font-b-yekan",
          helperWrapper: "bg-transparent font-b-yekan",
        }}
      >
        {Array.isArray(dataMap) &&
          dataMap.map((item, index) => (
            <SelectItem
              key={index}
              onClick={() => onChange(item)}
              classNames={{
                wrapper: "bg-gray-300 border border-red-600 m-0 p-0",
                base: "w-full m-0 p-0 text-center flex justify-center",
                title:
                  "text-white w-full transition-all hover:bg-gray-600 hover:text-white p-[8px] py-[5px] text-black font-b-yekan border rounded-[5px] border-[#cccccc] m-[5px]",
                shortcut: "text-center w-full",
                description: "w-full p-0",
              }}
            >
              {item}
            </SelectItem>
          ))}
      </Select>
    </div>
  );
};

export default SortingCol;

