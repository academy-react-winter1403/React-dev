import React from "react";
import { LuLayoutGrid } from "react-icons/lu";

const GridIcon = ({ click,view}) => {

  const clickHandler = () => {
    click()
  }

  return (
    <button
      className={view ? 'gridBtn bg-gray-200' : 'gridBtn bg-white'}
      onClick={clickHandler}
    >
      <LuLayoutGrid size={25} style={{ color: "#005B58"}} />
    </button>
  );
};

export default GridIcon;
