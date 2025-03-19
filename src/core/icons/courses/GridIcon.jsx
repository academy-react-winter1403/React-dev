import React from "react";
import { LuLayoutGrid } from "react-icons/lu";

const GridIcon = () => {
  return (
    <button
      className="gridBtn bg-[#E7E7E7] rounded-[10px_1px_1px_1px]"
    >
      <LuLayoutGrid size={25} style={{ color: "#005B58" }} />
    </button>
  );
};

export default GridIcon;
