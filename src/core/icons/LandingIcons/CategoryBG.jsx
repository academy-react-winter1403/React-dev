const CategoryBG = ({ itemTop = 0, itemLeft = 0, children }) => {
    return (
      <div className="relative w-full h-[500px]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1439 496"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <foreignObject x="-522.5" y="-6" width="2496" height="508">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                backdropFilter: "blur(3px)",
                clipPath: "url(#bgblur_0_66_36_clip_path)",
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <path
            d="M-516.5 0L102.25 27.75L411.625 41.625L566.312 48.5625L643.656 52.0312C643.656 52.0312 700.5 27.75 721 27.75C741.5 27.75 798.906 52.0312 798.906 52.0312L876.812 48.5625L1032.62 41.625L1344.25 27.75L1967.5 0V496L1344.25 468L1032.62 454L876.812 447L798.906 443.5C798.906 443.5 737.5 468 721 468C704.5 468 643.656 443.5 643.656 443.5L566.312 447L411.625 454L102.25 468L-516.5 496V0Z"
            fill="#01CEC9"
            fillOpacity="0.3"
          />
        </svg>
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{
            top: `${Number(itemTop)}px`,
            left: `${Number(itemLeft)}px`,
          }}
        >
          {children}
        </div>
      </div>
    );
  };
  
  export default CategoryBG;
  