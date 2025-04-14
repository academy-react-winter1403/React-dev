import React from "react";
import { Alarm } from "../../../../core/icons/icons";

const articleData = [
  {
    text: "دوره آموزش جامع از پایه تا پیشرفته  Next.js منتشر شد. ",
    date: "۱۴۰۲ / ۱۱ / ۳۰",
    flag: true,
  },
  {
    text: "تخفیف ویژه دوره ری اکت را از دست ندهید .",
    date: "۱۴۰۲ / ۱۱ / ۲۵",
    flag: false,
  },
  {
    text: "دوره آموزش  tailwind  به روز شد.",
    date: "۱۴۰۲ / ۱۱ / ۲۳",
    flag: false,
  },
];

const CenterSection = () => {
  return (
    <div className="bg-[#F6FFFF] drop-shadow-[0_1px_3px_#00000040] mt-8 py-3.5 px-9 rounded-[10px]">
      <div className="top-item-control flex justify-between">
        <h1 className="text-[#777777] font-b-yekan font-bold">
          {" "}
          جدید ترین اخبار و مقالات{" "}
        </h1>
        <Alarm
          classNames={`w-[40px] h-[40px] relative top-[-30px] drop-shadow-[0_1px_2px_#00000040]`}
        />
      </div>
      <div className="text-item-container">
        {articleData.map((item, index) => {
          return (
            <div className="item-control">
              <div className="text-control flex justify-between">
                <p className="text-[#555555] text-[14px] font-extrabold font-b-yekan">
                  {item.text}
                  {item.flag && <span className="text-[#DC0000]"> جدید </span>}
                </p>
                <h3 className="font-b-yekan text-[13px] font-extrabold text-[#999999]">{item.date}</h3>
              </div>
              <hr className="outline-0 w-full h-[1px] border border-[#AAAAAA] border-dashed mt-1.5 mb-1.5" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CenterSection;
