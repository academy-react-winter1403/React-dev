import React from "react";

const CardLoading = () => {
  return (
    <div className="card-loading-container animate-pulse dark:divide-gray-700 dark:border-gray-700">
      <div
        className="image-holder animate-pulse h-[280px] w-[100%]
          bg-gray-300 rounded-[15px] dark:bg-gray-700 flex flex-col items-center"
      >
        <div
          className="pic-control h-[159px] w-[80%] bg-gray-300 rounded-[15px] dark:bg-gray-700 relative
            top-[-33px] shadow-[0_0_5px_#000]"
        ></div>

        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
      </div>
    </div>
  );
};

export default CardLoading;
