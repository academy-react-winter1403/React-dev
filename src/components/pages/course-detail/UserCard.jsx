import Aos from "aos";
import React, { useEffect } from "react";

const UserCard = ({ num, text, children, aosAnim }) => {
  
  useEffect(() => {
    Aos.init({
      duration: 800,
    })
    Aos.refresh()
  }, [])

  return (
    <div
      data-aos={aosAnim}
      className={`student-card-holder w-[196px] h-[71px] flex justify-center gap-x-[20px] items-center
            bg-[#F7F7F7] rounded-xl drop-shadow-[0_1px_2px_#00000040]`}
    >
      <div className="right text-center">
        <p className="font-b-yekan">{num}</p>
        <p className="text-[#818181]">{text}</p>
      </div>
      <div className="left">
        {children}
      </div>
    </div>
  );
};

export default UserCard;
