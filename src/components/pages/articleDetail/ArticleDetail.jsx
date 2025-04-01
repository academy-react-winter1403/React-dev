import React, { useState } from "react";
import ArticleTitle from "./articleDetailSections/ArticleTitle";
import ArticleFeedBack from "./articleDetailSections/ArticleFeedBack";
import character from "./../../../assets/pics/others/articledetail.png";
import RelatedCourses from "./articleDetailSections/RelatedCourses";
import ReadMoreButton from "./articleDetailSections/ReadMoreButton";
import { getData } from "../../../core/services";
import { useParams } from "react-router-dom";
import { addArticleAndNewsDetailData } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import DescriptionBox from "../../partials/descreption-box/DescriptionBox";
// import { useSelector } from "react-redux";

const ArticleDetail = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const { id } = useParams();

  getData("articleDetail", `/News/${id}`).then((response) => {
    dispatch(addArticleAndNewsDetailData(response.data));
  });

  const state = useSelector((state) => state.articleAndNewDetailData);

  if (state) {
    var commentDtos = state.commentDtos;
    var detailsNewsDto = state.detailsNewsDto;
    var { googleDescribe } = detailsNewsDto;
  }

  return (
    <div className="w-full bg-[#F7F7F7] font-b-yekan py-10">
      <div className="border w-[80%] m-auto flex md:flex-row md:flex-nowrap gap-0.5 xs:flex-col justify-center md:items-start xs:items-center">
        {/* article section */}
        <div className="border border-red-500 md:w-2/3 xs:w-full flex flex-col items-center justify-center gap-2.5">
          <ArticleTitle />
          {/* text */}
          <div
            className={`w-[95%]  bg-white rounded-[10px] text-[#555555] text-[18px] leading-7 flex flex-col items-center justify-start gap-3 shadow relative overflow-hidden transition-all duration-500 ${
              isExpanded ? "h-auto" : "h-[755px]"
            }`}
            // className="w-[95%] h-[755px] border bg-white rounded-[10px] text-[#555555] text-[18px] leading-7 flex flex-col items-center justify-start gap-3 shadow relative overflow-hidden"
          >
            <div className="border w-[95%]">
              {/* <p>
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
              </p> */}

              <p>{googleDescribe}</p>
            </div>
            <div className="border w-[75%]">
              <img src="" alt="" />
            </div>
            <div className="border w-[95%]">
              {/* <p>
                ری اکت (React) مثل همون شرکت دانش بنیانی هست که دستیار شما میشه
                تا راحت تر چیزی که در ذهنتون هست رو در رابط کاربری سایت (UI)
                پیاده سازی کنید بدون اینکه بخواید از صفر کدنویسی انجام بدید. بعد
                هم با ایجاد بخش های مختلف و متصل کردن اونها به همدیگه، صفحات وب
                جذاب و کامل بسازید. حالا اگه دوست دارید پاسخ سوال React چیست؟ رو
                به زبان ساده و خودمونی بگیرید و همینطور کاربرد ری اکت و مزایای
                اون و اینکه چطور باید یاد گرفت، ما در ادامه مقاله ، قدم به قدم
                با شما جلو میریم تا خیلی خوب و عمیق با تمام ابعاد اون آشنا بشید
                و از این تخصص پولساز و پرطرفدار لذت ببرید. بعد هم با ایجاد بخش
                های مختلف و متصل کردن اونها به همدیگه، صفحات وب جذاب و کامل
                بسازید. حالا اگه دوست دارید پاسخ سوال React چیست؟ رو به زبان
                ساده و خودمونی بگیرید و همینطور کاربرد ری اکت و مزایای اون و
                اینکه چطور باید یاد گرفت، ما در ادامه مقاله ، قدم به قدم با شما
                جلو میریم تا خیلی خوب و عمیق با تمام ابعاد اون آشنا بشید و از
                این تخصص پولساز و پرطرفدار لذت ببرید. بعد هم با ایجاد بخش های
                مختلف و متصل کردن اونها به همدیگه، صفحات وب جذاب و کامل بسازید.
                حالا اگه دوست دارید پاسخ سوال React چیست؟ رو به زبان ساده و
                خودمونی بگیرید و همینطور کاربرد ری اکت و مزایای اون و اینکه چطور
                باید یاد گرفت، ما در ادامه مقاله ، قدم به قدم با شما جلو میریم
                تا خیلی خوب و عمیق با تمام ابعاد اون آشنا بشید و از این تخصص
                پولساز و پرطرفدار لذت ببرید.
                ری اکت (React) مثل همون شرکت دانش بنیانی هست که دستیار شما میشه
                تا راحت تر چیزی که در ذهنتون هست رو در رابط کاربری سایت (UI)
                پیاده سازی کنید بدون اینکه بخواید از صفر کدنویسی انجام بدید. بعد
                هم با ایجاد بخش های مختلف و متصل کردن اونها به همدیگه، صفحات وب
                جذاب و کامل بسازید. حالا اگه دوست دارید پاسخ سوال React چیست؟ رو
                به زبان ساده و خودمونی بگیرید و همینطور کاربرد ری اکت و مزایای
                اون و اینکه چطور باید یاد گرفت، ما در ادامه مقاله ، قدم به قدم
                با شما جلو میریم تا خیلی خوب و عمیق با تمام ابعاد اون آشنا بشید
                و از این تخصص پولساز و پرطرفدار لذت ببرید. بعد هم با ایجاد بخش
                های مختلف و متصل کردن اونها به همدیگه، صفحات وب جذاب و کامل
                بسازید. حالا اگه دوست دارید پاسخ سوال React چیست؟ رو به زبان
                ساده و خودمونی بگیرید و همینطور کاربرد ری اکت و مزایای اون و
                اینکه چطور باید یاد گرفت، ما در ادامه مقاله ، قدم به قدم با شما
                جلو میریم تا خیلی خوب و عمیق با تمام ابعاد اون آشنا بشید و از
                این تخصص پولساز و پرطرفدار لذت ببرید. بعد هم با ایجاد بخش های
                مختلف و متصل کردن اونها به همدیگه، صفحات وب جذاب و کامل بسازید.
                حالا اگه دوست دارید پاسخ سوال React چیست؟ رو به زبان ساده و
                خودمونی بگیرید و همینطور کاربرد ری اکت و مزایای اون و اینکه چطور
                باید یاد گرفت، ما در ادامه مقاله ، قدم به قدم با شما جلو میریم
                تا خیلی خوب و عمیق با تمام ابعاد اون آشنا بشید و از این تخصص
                پولساز و پرطرفدار لذت ببرید.
              </p> */}

              <DescriptionBox initialHeight={300}>
                <p>
                  ری اکت چیست؟ تصور کنید یک مهندس طراحی خودرو نخبه ، قصد داره یک
                  ماشین جدید و جذاب بسازه. این مهندس ما دو راه برای رسیدن به
                  هدفش داره! ما در این مقاله قراره خیلی خودمونی بگیم ری اکت چی
                  هستش ؟ که در کنارش بتونید از آموزش react لذت ببرید . خب پس بزن
                  بریم ! 1 – مثلا به دولت مراجعه کنه و بگه لطفا ابزار و مواد
                  اولیه لازم رو در اختیار من قرار بدید تا این ماشین رو بسازم.
                  فردا می بینه یک کامیون پر از آهن و پلاستیک و … به صورت خام در
                  کارگاهش تخلیه شده و اون باید تمام چندهزار قطعه ماشین رو از صفر
                  طراحی و تولید کنه. 2 – یا اینکه طرح قطعات و قالب های طراحی شده
                  خودش رو به یک شرکت دانش بنیان و قطعه ساز ارائه بده که خودش
                  متخصص این کار هست و قبلا هزاران نوع قطعه آماده تولید کرده. در
                  این صورت مهندس ما هم خیلی راحت تمام قطعات موردنیاز خودش رو
                  تحویل می‌گیره تا ماشین جدید خودش رو بسازه. چیزی شبیه به تولید
                  ماشینی مثل لامبورگینی! این ساده ترین جواب مقدماتی برای درک
                  جواب سوال ری اکت چیست؟ می تونه باشه!
                </p>
              </DescriptionBox>
            </div>
            {/* read more */}
            {/* <ReadMoreButton /> */}
            {/* {!isExpanded && <ReadMoreButton onClick={() => setIsExpanded(true)} />} */}
          </div>
          {/* feed back */}
          <ArticleFeedBack />
        </div>
        {/* related courses section */}
        <div className="border border-blue-500 md:w-1/3 xs:w-[95%] h-100 flex flex-col justify-between items-center gap-4 md:mt-0 xs:mt-5">
          {/* image */}
          <div className="hidden md:block">
            <img src={character} alt="#" />
          </div>
          {/* courses */}
          <RelatedCourses />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
