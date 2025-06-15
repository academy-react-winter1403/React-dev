// import { BiConversation, BiSolidConversation } from "react-icons/bi";
// import { TbCertificate } from "react-icons/tb";
// import { MdHomeRepairService } from "react-icons/md";
// import e1 from "../../../assets/pics/landing/Ellipse1.png";
// import r1 from "../../../assets/pics/landing/Rectangle1.png";
// import e2 from "../../../assets/pics/landing/Ellipse2.png";
// import r2 from "../../../assets/pics/landing/Rectangle2.png";
// import e3 from "../../../assets/pics/landing/Ellipse3.png";
// import r3 from "../../../assets/pics/landing/Rectangle3.png";
// import e4 from "../../../assets/pics/landing/Ellipse4.png";
// import r4 from "../../../assets/pics/landing/Rectangle4.png";

// export const ServiceApi = [
//   {
//     title: "مشاوره",
//     desc: "متن ساختگی صنعت طراحی و چاپ برای \n استفاده طراحان گرافیک است.",
//     icon: (
//       <BiConversation className="text-white md:text-4xl xs:text-2xl absolute flex items-center justify-center" />
//     ),
//     posYFlag: false,
//     imageB: r1,
//     imageT: e1,
//     color: "#008A86",
//   },
//   {
//     title: "فرصت های شغلی",
//     desc: "متن ساختگی صنعت طراحی و چاپ برای \n استفاده طراحان گرافیک است.",
//     icon: (
//       <MdHomeRepairService className="text-white md:text-4xl xs:text-2xl absolute flex items-center justify-center" />
//     ),
//     posYFlag: true,
//     imageB: r2,
//     imageT: e2,
//     color: "#047DC1",
//   },
//   {
//     title: "مدرک معتبر",
//     desc: "متن ساختگی صنعت طراحی و چاپ برای \n استفاده طراحان گرافیک است.",
//     icon: (
//       <TbCertificate className="text-white md:text-4xl xs:text-2xl absolute flex items-center justify-center" />
//     ),
//     posYFlag: false,
//     imageB: r3,
//     imageT: e3,
//     color: "#AE9C00",
//   },
//   {
//     title: "مشاوره",
//     desc: "متن ساختگی صنعت طراحی و چاپ برای \n استفاده طراحان گرافیک است.",
//     icon: (
//       <BiSolidConversation className="text-white md:text-4xl xs:text-2xl absolute flex items-center justify-center" />
//     ),
//     posYFlag: true,
//     imageB: r4,
//     imageT: e4,
//     color: "#CC7A00",
//   },
// ];


import { BiConversation, BiSolidConversation } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";
import { MdHomeRepairService } from "react-icons/md";
import e1 from "../../../assets/pics/landing/Ellipse1.png";
import r1 from "../../../assets/pics/landing/Rectangle1.png";
import e2 from "../../../assets/pics/landing/Ellipse2.png";
import r2 from "../../../assets/pics/landing/Rectangle2.png";
import e3 from "../../../assets/pics/landing/Ellipse3.png";
import r3 from "../../../assets/pics/landing/Rectangle3.png";
import e4 from "../../../assets/pics/landing/Ellipse4.png";
import r4 from "../../../assets/pics/landing/Rectangle4.png";

export const ServiceApi = [
  {
    titleKey: "serviceConsultingTitle",
    descKey: "serviceConsultingDesc",
    icon: (
      <BiConversation className="text-white md:text-4xl xs:text-2xl absolute flex items-center justify-center" />
    ),
    posYFlag: false,
    imageB: r1,
    imageT: e1,
    color: "#008A86",
  },
  {
    titleKey: "serviceJobOpportunitiesTitle",
    descKey: "serviceConsultingDesc",
     icon: (
      <MdHomeRepairService className="text-white md:text-4xl xs:text-2xl absolute flex items-center justify-center" />
    ),
    posYFlag: true,
    imageB: r2,
    imageT: e2,
    color: "#047DC1",
  },
  {
    titleKey: "serviceCertifiedTitle",
    descKey: "serviceConsultingDesc",
    icon: (
      <TbCertificate className="text-white md:text-4xl xs:text-2xl absolute flex items-center justify-center" />
     ),
    posYFlag: false,
    imageB: r3,
    imageT: e3,
    color: "#AE9C00",
  },
  {
    titleKey: "serviceConsultingTitle",
    descKey: "serviceConsultingDesc",
    icon: (
       <BiSolidConversation className="text-white md:text-4xl xs:text-2xl absolute flex items-center justify-center" />
     ),
    posYFlag: true,
    imageB: r4,
    imageT: e4,
    color: "#CC7A00",
  },
];
