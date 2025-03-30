import React from "react";
import ArticleTitle from "./articleDetailSections/ArticleTitle";
import ArticleFeedBack from "./articleDetailSections/ArticleFeedBack";
import character from './../../../assets/pics/others/articledetail.png'
import RelatedCourses from "./articleDetailSections/RelatedCourses";

const ArticleDetail = () => {
  return (
    <div className="w-full bg-[#F7F7F7] font-b-yekan py-10">
      <div className="border w-[80%] m-auto flex md:flex-row md:flex-nowrap gap-0.5 xs:flex-col justify-center md:items-start xs:items-center">
        {/* article section */}
        <div className="border border-red-500 md:w-2/3 xs:w-full flex flex-col items-center justify-center gap-2.5">
          <ArticleTitle />
          {/* text */}
          <div className="w-[95%] h-[755px] bg-white rounded-[10px] text-[#555555] text-[18px] leading-7 flex flex-col items-center justify-start gap-3 shadow">
            <div className="border w-[95%]">
              <p>
                ری اکت چیست؟ تصور کنید یک مهندس طراحی خودرو نخبه ، قصد داره یک
                ماشین جدید و جذاب بسازه. این مهندس ما دو راه برای رسیدن به هدفش
                داره! ما در این مقاله قراره خیلی خودمونی بگیم ری اکت چی هستش ؟
                که در کنارش بتونید از آموزش react لذت ببرید . خب پس بزن بریم ! 1
                – مثلا به دولت مراجعه کنه و بگه لطفا ابزار و مواد اولیه لازم رو
                در اختیار من قرار بدید تا این ماشین رو بسازم. فردا می بینه یک
                کامیون پر از آهن و پلاستیک و … به صورت خام در کارگاهش تخلیه شده
                و اون باید تمام چندهزار قطعه ماشین رو از صفر طراحی و تولید کنه.
                2 – یا اینکه طرح قطعات و قالب های طراحی شده خودش رو به یک شرکت
                دانش بنیان و قطعه ساز ارائه بده که خودش متخصص این کار هست و قبلا
                هزاران نوع قطعه آماده تولید کرده. در این صورت مهندس ما هم خیلی
                راحت تمام قطعات موردنیاز خودش رو تحویل می‌گیره تا ماشین جدید
                خودش رو بسازه. چیزی شبیه به تولید ماشینی مثل لامبورگینی! این
                ساده ترین جواب مقدماتی برای درک جواب سوال ری اکت چیست؟ می تونه
                باشه!
              </p>
            </div>
            <div className="border w-[75%] h-20">
              <img src="" alt="" />
            </div>
            <div className="border w-[95%] h-20">
              <p>

              </p>
            </div>
          </div>
          <ArticleFeedBack/>
        </div>
        {/* related courses section */}
        <div className="border border-blue-500 md:w-1/3 xs:w-[95%] h-100 flex flex-col justify-between items-center gap-4 md:mt-0 xs:mt-5">
          {/* image */}
          <div className="hidden md:block">
            <img 
            src={character}
            alt="#" 
            />
          </div>
          {/* courses */}
          <RelatedCourses/>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
