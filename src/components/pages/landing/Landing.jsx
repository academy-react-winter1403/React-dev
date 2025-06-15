import React, { useEffect, useState } from "react";
import Header from "../../partials/header/Header";
import Footer from "../../partials/footer/Footer";
import HeroSection from "./LandingSections/HeroSection";
import CategorySection from "./LandingSections/CategorySection";
import BestTeacherSection from "./LandingSections/BestTeacherSection";
import { productMockData } from "../../../core/constants/courses-datas/productMockData";
import CourseSection from "./LandingSections/CourseSection";
import ServiceSection from "./LandingSections/ServiceSection";
import NewsSection from "./LandingSections/NewsSection";
import { useDispatch, useSelector } from "react-redux";
import { getData, getLandinData } from "../../../core/services";
import {
  addDataToLandingSearchDataState,
  changeLandingQuery,
  changeSearchBoxFlag,
  firstAddCourseProduct,
} from "../../../redux/actions";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "../../common/ScrollToTopBtn";
import { Button, useSelect } from "@heroui/react";
import SearchBox from "../../common/input/SearchBox";
import { IoCloseCircleSharp } from "react-icons/io5";
import { htttp } from "../../../core/services/interceptor";
import { ImageFeadBackCircle } from "../../common/ImageFeadBack";
import { GrFormView } from "react-icons/gr";
import ViewCard from "./LandingSections/ViewCard";
import { useLocation, useNavigate } from "react-router-dom";

const Landing = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const location = useLocation();
  const { searchKey, searchDataState, searchUrl, Query, searchBoxFlag } =
    useSelector((state) => state.landingSearchSlice);
  const [coursesData, setCoursesData] = useState(null);
  const [keyName, setKeyName] = useState(null);
  const [showDataFlag, setShowDataFlag] = useState(false);
  const [fullData, setFullData] = useState(null);
  const [voiceNavigate, setVoiceNavigaet] = useState("");
  // const [searchBoxFlag, setSearchBoxFlag] = useState(false)
  // const [searchUrl, setSearchUrl] = useState(null)

  // let recognition = new (window.SpeechRecognition ||
  //   window.webkitSpeechRecognition)();

  // recognition.continuous = false; // تشخیص مداوم غیرفعال
  // recognition.interimResults = false; // نتایج موقت غیرفعال

  // recognition.onresult = function (event) {
  //   let transcript = event.results[event.resultIndex][0].transcript.trim();
  //   console.log("شما گفتید: " + transcript);

  //   // پاک کردن مسیر قبلی و تنظیم مسیر جدید
  //   window.history.replaceState({}, "", `/${encodeURIComponent(transcript)}`);
  //   navigation(transcript)
  // };

  // recognition.onend = function () {
  //   // بعد از پایان تشخیص، دوباره شروع می‌کنیم تا برای گفتار بعدی آماده باشد
  //   recognition.start();
  // };

  // // شروع شناسایی صوت
  // recognition.start();

  const { data, isLoading } = getData(
    "landingProduct",
    "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=6"
  );

  console.log(searchUrl);

  const {
    data: newData,
    isLoading: landingGetDataLoading,
    refetch,
  } = getLandinData(
    "getLandinData",
    searchUrl,
    { Query },
    searchUrl ? true : false
  );

  if (!landingGetDataLoading) {
    console.log("landingData ==>", newData);
    // if (!fullData) {
    // setFullData(newData?.data)
    if (searchUrl === "/News") {
      dispatch(addDataToLandingSearchDataState(newData?.data.news));
      // console.log("news ==>", searchDataState["addUserFullName"]);
    } else {
      dispatch(addDataToLandingSearchDataState(newData?.data.courseFilterDtos));
      console.log("courseFilterDtos ==>", searchDataState);
    }
    // }
  }

  // console.log("searchDataState ==>", searchDataState)

  useEffect(() => {
    if (searchKey) {
      refetch();
      if (searchUrl === "/News") {
        setKeyName("News");
      } else {
        setKeyName("courseFilterDtos");
      }
      setShowDataFlag(true);
    }
  }, [searchUrl, Query, searchKey]);

  if (!isLoading) {
    console.log(data);
    if (!coursesData) {
      console.log("landing ", data);
      setCoursesData(data.courseFilterDtos);
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  console.log("fullData ==>", fullData);

  const searchHandler = (value) => {
    console.log(searchKey);
    // if (searchKey == "سرچ در دوره ها") {
    //   setUrl("/Home/GetCoursesWithPagination")
    // }else {
    //   setUrl("/News")
    // }
    if (value === "") {
      dispatch(changeLandingQuery(null));
    } else {
      // setQuery(value)
      dispatch(changeLandingQuery(value));
    }
  };

  const viewCardClickHandler = (item) => {
    console.log(item);
    if (searchUrl === "/News") {
      navigation(`/article-detail/${item.id}`);
    } else {
      navigation(`/course-detail/${item.courseId}`);
    }
  };

  return (
    <div className="bg-[var(--bg-main)]">
      {/* <Header/> */}
      {/* <HeroSection /> */}
      {/* <CategorySection />
      <CourseSection courseData={coursesData} />
      <BestTeacherSection />
      <ServiceSection />
      <NewsSection /> */}

      {/* <HeroSection />
      <CategorySection />
      <CourseSection coursesData={coursesData} />
      <BestTeacherSection />
      <ServiceSection />
      <NewsSection /> */}
      {/* <Footer/> */}
      <HeroSection />
      <div
        className={`fixed w-full h-full bottom-0 left-0 z-[100] backdrop-blur-md
        ${searchBoxFlag ? "flex" : "hidden"} justify-center items-center`}
      >
        <div
          className="search-box h-96 w-96 rounded-2xl border-[1px] bg-white border-gray-900 border-solid
          flex flex-col items-center"
        >
          <div className="search-control w-[80%] relative">
            <IoCloseCircleSharp
              size={25}
              className="absolute top-0 right-[-30px] cursor-pointer"
              onClick={() => {
                dispatch(changeSearchBoxFlag(false)),
                  dispatch(changeLandingQuery(null));
                setShowDataFlag(false);
              }}
            />
            <h3 className="text-center my-2.5">
              {searchUrl === "/News"
                ? "جست و جو در اخبارها"
                : "جست و جو در دوره ها"}
            </h3>
            <SearchBox
              inputChange={searchHandler}
              placeholder={"جست و جو کنید :)"}
            />
          </div>
          <div className="result-control max-h-64 overflow-y-auto w-full">
            {searchDataState && searchDataState.length > 0 ? (
              searchUrl === "/News" ? (
                searchDataState.map((item) => {
                  return (
                    <ViewCard
                      title={item.title}
                      imageAddress={item.addUserProfileImage}
                      onClick={() => viewCardClickHandler(item)}
                    />
                  );
                })
              ) : (
                searchDataState.map((item) => {
                  return (
                    <ViewCard
                      title={item.title}
                      imageAddress={item.tumbImageAddress}
                      onClick={() => viewCardClickHandler(item)}
                    />
                  );
                })
              )
            ) : (
              <h2 className="text-center mt-7 font-bold"> چیزی نیست😎😎 </h2>
            )}
          </div>
        </div>
      </div>
      <CategorySection />
      {coursesData && <CourseSection courseData={coursesData} />}
      <BestTeacherSection />
      <ServiceSection />
      <NewsSection />
      <ScrollToTopButton />
    </div>
  );
};

export default Landing;

// newData.data.courseFilterDtos.map((item) => {
//   console.log(item)
//     return (
//       <div>
//         <ImageFeadBackCircle imageAddress={""} />
//       </div>
//     );
//   })
