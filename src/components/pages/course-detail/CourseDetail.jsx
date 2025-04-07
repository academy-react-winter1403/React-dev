import React from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../../core/services";
import DetailTop from "./DetailTop";
import DescriptionBox from "../../partials/descreption-box/DescriptionBox";

const CourseDetail = () => {
  const { id } = useParams();

  getData("detailProduct", `/Home/GetCourseDetails?CourseId=${id}`).then(
    (response) => {
      console.log(response.data);
    }
  );

  return (
    <div className="course-detail-holder w-full flex justify-center">
      <div className="container w-[90%]">
        <DetailTop />
        <div className="bottom">
          <div className="description-box-control w-2/4">
            <DescriptionBox initialHeight={350}>
              <p className="text-[#7B7B7B]">
                قبل از آموزش ری اکت ReactJS ابتدای کار به شما بگیم که تکنولوژی
                ری اکت برگ برنده برنامه نویسان در دنیای امروز هست اصلا اغراق
                نکردیم. یه غول به تمام معنا و دنیایی بی انتها از پروژه هایی که
                میشه با اون نوشت، اون هم خیلی سریع و راحت! تکنولوژی که دنیای وب
                رو دگرگون کرد و دستپخت شرکت فیسبوک هست که اینستاگرام رو هم با
                اون طراحی کرده! کامپوننت محور بودن ری اکت باعث میشه شما با
                کدنویسی یک بخش بتونید بی نهایت بار در بخش های مختلف پروژه از اون
                استفاده کنید و از طرفی میتونید پروژه هایی بسازید که بدون نیاز به
                رفرش، هر دیتا و بخشی از صفحه رو تغییر بدید اون هم با سرعت نور!
                برای همین ری اکت، زمان کدنویسی و به اتمام پروژه رو خیلی کوتاهتر
                از قبل کرده! خلاصه به شما تبریک میگیم که خیلی دقیق مطالعه کردید
                و به این نتیجه رسیدید که الان بهترین زمان برای یادگیری ری اکت
                هست. پس از الان با تمام اطمینان خیالتون رو راحت می کنیم : شما با
                دوره آموزش ری اکت سبزلرن، نه تنها به این تکنولوژی به تسلط 100
                درصد می رسید، بلکه طوری آموزش عملی می بینید و راهنمایی می گیرید
                که یک راست وارد بازار کار بشید. بی حرف و حدیث. بی ترس و تردید!
                اگه به حوزه برنامه نویسی سمت کاربر، طراحی رابط کاربری (UI) و به
                طور کلی پروژه های تعامل محور و سریع علاقه دارید، ری اکت یکی از
                بهترین دستیاران شما برای شما
              </p>
            </DescriptionBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
