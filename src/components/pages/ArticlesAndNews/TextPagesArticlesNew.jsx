import React from "react";

const TextPagesArticlesNew = ({title,explan}) => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <h1 className="font-b-yekan font-bold text-[#005351] text-xl">
        {title}
      </h1>
      <p className="font-b-yekan font-normal text-[#aaa] text-sm">
        {explan}
      </p>
    </div>
  );
};

export default TextPagesArticlesNew;
