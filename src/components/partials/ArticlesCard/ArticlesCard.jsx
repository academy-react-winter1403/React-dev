import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { SlArrowLeft } from "react-icons/sl";


const ArticlesCard = ({title,Describe,src,currentView,insertDate}) => {

    

  return (
    // <div className="w-full h-11/12">
      <div className="w-[291px] h-[381px] rounded-t-[145px] rounded-b-xs shadow-sm flex flex-col items-center justify-center gap-4">
        {/* <div className="bg-cyan-600 "> */}
          <img className="w-[251px] h-[171px] rounded-[18px]" src={src}/>
        {/* </div> */}
        <div className="h-[200px] flex flex-col gap-4">
          <h1 className="w-[230px] font-b-yekan font-bold text-[#003B39] text-xl">
            {/* انگولار بهتر است یا ری اکت؟ */}
            {title}
          </h1>
          <p className="w-[248px] h-[48px] font-b-yekan font-normal text-[#aaa] text-xs">
            {/* angular یا react کدام بهتر است؟ اگه شما تو حوزه طراحی و برنامه نویسی
            وب فعالیت داشته باشین، قطعا اسم تکنولوژی هایی مثل react و angular رو
            ... */}
            {Describe}
          </p>
          <div className="h-[15px] flex justify-between mt-3">
            <div className="flex gap-1.5">
              <IoEyeOutline style={{ color: "#01CEC9" }} />
              <p className="font-b-yekan font-normal text-[#888] text-xs">
                {currentView} بازدید
              </p>
            </div>
            <div className="flex gap-1.5">
              <p className="font-b-yekan font-normal text-[#888] text-xs">
                ۱۴۰۳/۰۱/۱۸
                {/* {insertDate} */}
              </p>
              <MdOutlineDateRange style={{ color: "#01CEC9" }} />
            </div>
          </div>
          <div className="h-[40px] border-t-[#f3f3f3] border-t flex items-center justify-center gap-1">
            <span className="font-b-yekan font-bold text-[#D47300] text-sm">
              مطالعه بیشتر
            </span>
            <SlArrowLeft
              style={{
                color: "#D47300",
                width: "10px",
                height: "10px",
                marginTop: "5px",
              }}
            />
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ArticlesCard;
