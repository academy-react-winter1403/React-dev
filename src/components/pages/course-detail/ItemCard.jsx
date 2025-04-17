import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ItemCard = ({ children, title, description }) => {
  useEffect(() => {
    Aos.init({
      duration: 8000,
    });
    Aos.refresh();
  }, []);

  return (
    <div
      data-aos="flip-left"
      className="item-card-holder w-full bg-[#F7F7F7] drop-shadow-[0_1px_2px_#00000040]
        flex items-center py-[10px] px-8 rounded-[10px] font-b-yekan"
    >
      <div className="right-section">{children}</div>
      <div className="left-section mr-5">
        <p className="title text-[14px] text-[#818181] font-black">{title}</p>
        <p className="description text-[#005351] text-[18px] font-bold mt-[2px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
