// import React from "react";
// import ImageFedback from "../../../partials/image-fedback/imageFedback";
// import pic from "../../../../assets/pics/courses/course-detail-pic.png";
// import { CiUser } from "react-icons/ci";
// import ViewAllBtn from "../../../common/view-all/ViewAllBtn";

// const DashboardCard = ({ data, teacherNameFlag, cardClickHandler }) => {
//   console.log("courseActivedData ==>", data);

//   const { title, teacherName, tumbImageAddress } = data;

//   return (
//     <div
//       className="card-control w-full flex p-2 bg-(--bg-main)
//         drop-shadow-[0_1px_2px_#00000040] rounded-xl cursor-pointer"
//     >
//       <div className="right w-[75%]">
//         <p
//           className="text-[13px] text-[var(--dashboard-card-title-text)] font-b-yekan relative top-[-3px] w-[80%]
//             text-nowrap text-ellipsis overflow-x-hidden"
//           title={title}
//         >
//           {title}
//         </p>
//         <div className="teachername-date-control flex justify-between relative top-1.5">
//           <div className="teachername-control flex items-center gap-x-0.5">
//             <CiUser size={10} className="text-[#26B4AF]" />
//             {teacherNameFlag ? (
//               <p
//                 className="text-[10px] text-[#26B4AF] font-b-yekan "
//                 title={teacherName}
//               >
//                 {teacherName}
//               </p>
//             ) : (
//               <ViewAllBtn
//                 text={"مشاهده دوره"}
//                 textColor={"#01B4AF"}
//                 svgColor={"#01B4AF"}
//                 onClick={cardClickHandler}
//               />
//             )}
//           </div>
//           {/* <span className="font-b-yekan text-[10px] text-[#D47300] ml-2">
//             چهارشنبه ها . ۱۷:۳۰
//           </span> */}
//         </div>
//       </div>
//       <div className="img-control w-[70px] h-[40px] overflow-hidden rounded-xs">
//         <ImageFedback imageAddress={tumbImageAddress} pic={pic} />
//       </div>
//     </div>
//   );
// };

// export default DashboardCard;


import React from "react";
import ImageFedback from "../../../partials/image-fedback/imageFedback";
import pic from "../../../../assets/pics/courses/course-detail-pic.png";
import { CiUser } from "react-icons/ci";
import ViewAllBtn from "../../../common/view-all/ViewAllBtn";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const DashboardCard = ({ data, teacherNameFlag, cardClickHandler }) => {
  const { t, i18n } = useTranslation();
  const { title, teacherName, tumbImageAddress } = data;
  const isRtl = i18n.language === "fa";

  return (
    <div
      className="card-control w-full flex p-2 bg-(--bg-main)
        drop-shadow-[0_1px_2px_#00000040] rounded-xl cursor-pointer"
    >
      <div className="right w-[75%]">
        <p
          className="text-[13px] text-[var(--dashboard-card-title-text)] font-b-yekan relative top-[-3px] w-[80%]
            text-nowrap text-ellipsis overflow-x-hidden"
          title={title}
        >
          {title}
        </p>
        <div className="teachername-date-control flex justify-between relative top-1.5">
          <div className="teachername-control flex items-center gap-x-0.5">
            <CiUser size={10} className="text-[#26B4AF]" />
            {teacherNameFlag ? (
              <p
                className="text-[10px] text-[#26B4AF] font-b-yekan "
                title={teacherName}
              >
                {teacherName}
              </p>
            ) : (
              <ViewAllBtn
                text={t("viewCourse")} // ← Use translated text
                textColor={"#01B4AF"}
                svgColor={"#01B4AF"}
                onClick={cardClickHandler}
                isRtl={isRtl}
              />
            )}
          </div>
        </div>
      </div>
      <div className="img-control w-[70px] h-[40px] overflow-hidden rounded-xs">
        <ImageFedback imageAddress={tumbImageAddress} pic={pic} />
      </div>
    </div>
  );
};

export default DashboardCard;
