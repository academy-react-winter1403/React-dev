import itemBg from "../../../assets/pics/landing/itemBg.png"

const CategoryBG = ({ itemTop = 0, itemLeft = 0, children }) => {
    return (
      <div
        className="relative w-full py-[120px] flex justify-center items-center"
        style={{
          background: `url(${itemBg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{
            top: `${Number(itemTop)}px`,
            left: `${Number(itemLeft)}px`,
          }}
        > */}
          {children}
        {/* </div> */}
      </div>
    );
  };
  
  export default CategoryBG;
  