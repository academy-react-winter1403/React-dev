import React from "react";
import { LuLayoutGrid } from "react-icons/lu";

const GridIcon = ({ click }) => {

  const clickHandler = () => {
    click()
  }

  return (
    <button
      className="gridBtn bg-[#E7E7E7] rounded-[10px_1px_1px_1px]"
      onClick={clickHandler}
    >
      <LuLayoutGrid size={25} style={{ color: "#005B58" }} />
    </button>
  );
};

export default GridIcon;
