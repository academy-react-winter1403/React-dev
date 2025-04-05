import React from "react";
import { useParams } from "react-router-dom";
import { getCommentData, getData, getDataByClick } from "../../../core/services";
import DetailTop from "./DetailTop";
import DescriptionBox from "../../partials/descreption-box/DescriptionBox";
import UserCard from "./UserCard";
import { HiStar, HiUserGroup } from "react-icons/hi2";
import CompletionCourse from "./CompletionCourse";
import ItemCard from "./ItemCard";
import { FrontIcon } from "../../../core/icons/icons";
import HrComp from "../../common/HrComp";
import teacherPic from "../../../assets/pics/detailCourse/teacher.jpg"
import CommentBtn from "../../common/CommentBtn";
import CommentBox from "../../partials/comment-box/CommentBox";

const CourseDetail = () => {
  const { id } = useParams();

  getData("detailProduct", `/Home/GetCourseDetails?CourseId=${id}`).then(
    (response) => {
      console.log(response.data);
    }
  );

  // getCommentData("courseComment", `/Course/GetCourseCommnets/${id}`).then(
  //   (response) => {
  //     console.log(response.data)
  //   }
  // )

  return (
    <div className="course-detail-holder w-full flex justify-center mt-4">
      <div className="container w-[90%] flex flex-col items-center">
        <DetailTop />
        <div className="bottom w-[80%] flex items-start justify-between mt-7">
          <div className="right w-[65%]">
            <div className="description-box-control">
              <h3 className="text-[#005351] font-bold text-[18px]">
                {" "}
                توضیحات{" "}
              </h3>
              <DescriptionBox initialHeight={350}>
                <p className="text-[#7B7B7B]">
                  قبل از آموزش ری اکت ReactJS ابتدای کار به شما بگیم که تکنولوژی
                  ری اکت برگ برنده برنامه نویسان در دنیای امروز هست اصلا اغراق
                  نکردیم. یه غول به تمام معنا و دنیایی بی انتها از پروژه هایی که
                  میشه با اون نوشت، اون هم خیلی سریع و راحت! تکنولوژی که دنیای
                  وب رو دگرگون کرد و دستپخت شرکت فیسبوک هست که اینستاگرام رو هم
                  با اون طراحی کرده! کامپوننت محور بودن ری اکت باعث میشه شما با
                  کدنویسی یک بخش بتونید بی نهایت بار در بخش های مختلف پروژه از
                  اون استفاده کنید و از طرفی میتونید پروژه هایی بسازید که بدون
                  نیاز به رفرش، هر دیتا و بخشی از صفحه رو تغییر بدید اون هم با
                  سرعت نور! برای همین ری اکت، زمان کدنویسی و به اتمام پروژه رو
                  خیلی کوتاهتر از قبل کرده! خلاصه به شما تبریک میگیم که خیلی
                  دقیق مطالعه کردید و به این نتیجه رسیدید که الان بهترین زمان
                  برای یادگیری ری اکت هست. پس از الان با تمام اطمینان خیالتون رو
                  راحت می کنیم : شما با دوره آموزش ری اکت سبزلرن، نه تنها به این
                  تکنولوژی به تسلط 100 درصد می رسید، بلکه طوری آموزش عملی می
                  بینید و راهنمایی می گیرید که یک راست وارد بازار کار بشید. بی
                  حرف و حدیث. بی ترس و تردید! اگه به حوزه برنامه نویسی سمت
                  کاربر، طراحی رابط کاربری (UI) و به طور کلی پروژه های تعامل
                  محور و سریع علاقه دارید، ری اکت یکی از بهترین دستیاران شما
                  برای شما
                </p>
              </DescriptionBox>
            </div>

            <div className="headlines-holder h-[300px] w-full border rounded-[10px]"></div>
            <div className="comment-item-holder">
              <CommentBox/>
            </div>
          </div>
          <div className="left w-[33%]">
            <div className="top-section bg-[#FFFFFF] drop-shadow-[0_1px_2px_#00000040] py-[40px] px-[20px] rounded-[15px]">
              <div className="student-and-score-holder flex justify-between">
                <UserCard text={"دانشجو"} num={219}>
                  <HiUserGroup className="text-[#006865]" size={35} />
                </UserCard>
                <UserCard text={"رضایت"} num={4.7}>
                  <HiStar className="text-[#FFC700]" size={35} />
                </UserCard>
              </div>
              <div className="completion-course-control mt-[25px]">
                <CompletionCourse completionNum={87} />
              </div>
              <HrComp initialWidth={"full"} mtNum={27}/>
              <div className="item-card-container mt-[26px] flex flex-col gap-y-[17px]">
                <ItemCard title={"دسته بندی"} description={"فرانت اند"}>
                  <FrontIcon />
                </ItemCard>
                <ItemCard title={" پیشنباز "} description={"HTML, CSS, JS"}>
                  <FrontIcon />
                </ItemCard>
                <ItemCard title={"نوع آموزش"} description={"حضوری و غیرحضوری"}>
                  <FrontIcon />
                </ItemCard>
                <ItemCard title={"وضعیت دوره"} description={"درحال برگزاری"}>
                  <FrontIcon />
                </ItemCard>
              </div>
              <HrComp initialWidth={"full"} mtNum={27}/>
              <div className="teacher-prof-control flex flex-col items-center mt-[10px]">
                <div className="pic-control w-[100px] h-[100px] rounded-[100px] flex justify-center items-center
                  overflow-hidden drop-shadow-[0_4px_4px_#00000040]"
                >
                  <img src={teacherPic} alt="" className="scale-150"/>
                </div>
                <button className="font-b-yekan border py-[6px] px-[20px] rounded-[50px] transition-colors cursor-pointer
                  border-[#E48900] text-[#6B3A00] hover:bg-[#E48900] hover:text-[#ffffff] mt-[13px] text-[14px]"
                > پروفایل مدرس دوره </button>
              </div>
            </div>
            <div className="bottom-section"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
