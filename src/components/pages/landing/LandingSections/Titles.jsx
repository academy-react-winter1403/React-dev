// import React from 'react'

// const Titles = ({title, exp}) => {
//   return (
//     <div className="w-[48%] h-[90px]">
//         <div className="w-full h-1/2 flex flex-row flex-nowrap items-center justify-center gap-2">
//           <div className="bg-[#01CEC9] rounded-full md:h-[12px] md:w-[12px] h-[9px] w-[9px] text-center items-center mt-1"></div>
//           <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center items-center text-[var(--text-main)]">
//             {title}
//           </p>
//         </div>
//         <p className="lg:text-xl md:text-[18px] text-[12px] text-[var(--text-main)] text-center">
//           {exp}
//         </p>
//       </div>
//   )
// }

// export default Titles


import React from 'react';
import { useTranslation } from 'react-i18next';

const Titles = ({ title, exp }) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  return (
    <div className="w-[48%] h-[90px]">
      <div
        className={`w-full h-1/2 flex ${
          isRtl ? "flex-row" : "flex-row-reverse"
        } flex-nowrap items-center justify-center gap-2`}
      >
        <div className="bg-[#01CEC9] rounded-full md:h-[12px] md:w-[12px] h-[9px] w-[9px] text-center items-center mt-1"></div>
        <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center items-center text-[var(--text-main)]">
          {title}
        </p>
      </div>
      <p className="lg:text-xl md:text-[18px] text-[12px] text-[var(--text-main)] text-center">
        {exp}
      </p>
    </div>
  );
};

export default Titles;
