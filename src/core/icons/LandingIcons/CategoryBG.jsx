// import itemBg from "../../../assets/pics/landing/itemBg.png"

// const CategoryBG = ({ itemTop = 0, itemLeft = 0, children }) => {
//     return (
//       <div
//         className="relative w-full py-[120px] flex justify-center items-center"
//         style={{
//           background: `url(${itemBg})`,
//           backgroundSize: "100% 100%",
//           backgroundRepeat: "no-repeat"
//         }}
//       >
//         {/* <div
//           className="absolute w-full h-full flex items-center justify-center"
//           style={{
//             top: `${Number(itemTop)}px`,
//             left: `${Number(itemLeft)}px`,
//           }}
//         > */}
//           {children}
//         {/* </div> */}
//       </div>
//     );
//   };
  
//   export default CategoryBG;
  

import itemBg from "../../../assets/pics/landing/itemBg.png"
import itemBg2 from "../../../assets/pics/landing/itemBg2.png"
import useTheme from "../../hooks/HookTheme/useTheme";
const CategoryBG = ({ itemTop = 0, itemLeft = 0, children }) => {
  const { mode } = useTheme();

  const bgImage = mode === "dark" ? itemBg2 : itemBg;

  return (
    <div
      className="relative w-full py-[120px] flex justify-center items-center"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat"
      }}
    >
      {children}
    </div>
  );
};

export default CategoryBG;
