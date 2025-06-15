import React from "react";
import { SearchIcon } from "../../../core/icon";

const SearchButton = () => {
  return (
    <div
      className={`w-10 h-10 mx-[3px] bg-VioletBlue cursor-pointer rounded-full flex justify-center items-center
         rotate-[88deg] hover:shadow-lg hover:bg-orange-400  duration-250`}
    >
      <SearchIcon width="25px" />
    </div>
  );
};

export default SearchButton;
