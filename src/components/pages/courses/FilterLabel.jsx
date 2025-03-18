import React from "react";
// import { LuFilterX } from "react-icons/lu";
import { TrashCanIcon } from "../../../core/icons/icons";

const FilterLabel = () => {
  return (
    <button className="filter-label-control flex gap-[111px] py-[8px] px-[14px] bg-[#E7E7E7]
        drop-shadow-[0_1px_2px_#00000040] items-center rounded-[5px_5px_1px_1px]"
    >
      <button className="rigth flex items-center gap-x-[5px]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 0.750003C11.5254 0.750003 14.0004 0.962669 16.4094 1.3715C16.898 1.454 17.25 1.88117 17.25 2.37617V3.33317C17.25 3.60402 17.1967 3.87222 17.093 4.12246C16.9894 4.37269 16.8374 4.60006 16.6459 4.79159L11.6666 9.77092C11.4751 9.96244 11.3231 10.1898 11.2195 10.44C11.1158 10.6903 11.0625 10.9585 11.0625 11.2293V13.9124C11.0626 14.2956 10.9559 14.6711 10.7545 14.9971C10.5531 15.323 10.2649 15.5864 9.92217 15.7577L6.9375 17.25V11.2293C6.9375 10.9585 6.88416 10.6903 6.78051 10.44C6.67686 10.1898 6.52494 9.96244 6.33342 9.77092L1.35408 4.79159C1.16256 4.60006 1.01064 4.37269 0.906993 4.12246C0.803344 3.87222 0.749998 3.60402 0.75 3.33317V2.37617C0.75 1.88117 1.102 1.454 1.59058 1.3715C4.0386 0.957035 6.51714 0.749136 9 0.750003Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p className="text-[#333333] text-[16px] font-[400]"> فیلترها </p>
      </button>
      <TrashCanIcon />
    </button>
  );
};

export default FilterLabel;
