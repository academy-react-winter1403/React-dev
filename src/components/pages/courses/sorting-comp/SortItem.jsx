import React from "react";

const SortItem = ({ item, sortClick }) => {
  const sortClickHandler = () => {
    sortClick();
  };

  return (
    <p
      className="py-[5px] px-[7px] border border-[#cccccc]
        rounded-[5px] mt-[12px] cursor-pointer transition-colors hover:bg-[#005B58] hover:text-white"
      onClick={sortClickHandler}
    >
      {item}
    </p>
  );
};

export default SortItem;
