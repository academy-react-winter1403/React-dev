import SortingArticlesNew from "./Sorting-Articles/SortingArticlesNew";
import ArticlesCard from "../../partials/ArticlesCard/ArticlesCard";
import CardArticlesOther from "./CardArticlesOther/CardArticlesOther";
import TextPagesArticlesNew from "./TextPagesArticlesNew";
import TopSectionArticlesNew from "./TopSectionArticlesNew";
import React, { useEffect, useState } from "react";
import { getData } from "../../../core/services/api/get-data/getData";
import { CardLoading, PaginationData } from "../../partials";
import { getDataByClick } from "../../../core/services";
import BgOne from "./../../../assets/pics/articles/01.png";
import BgTwo from "./../../../assets/pics/articles/02.png";
import BgSix from "./../../../assets/pics/articles/03.png";
import BgThree from "./../../../assets/pics/articles/01.jfif";
import BgFour from "./../../../assets/pics/articles/02.jfif";
import BgFive from "./../../../assets/pics/articles/03.jfif";
import { useDispatch, useSelector } from "react-redux";
import { filterDataArticles } from "../../../core";
import { ArticlesNews } from "../../../redux/actions";
import { setItemLocalStorage } from "./../../../core/hooks/local-storage/setItemLocalstorage";
import { useSearchParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { productMockData } from "../../../core/constants";

const ArticlesAndNews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState(1);
  const [flag, setFlag] = useState(true);
  const [length, setLength] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.articleNews);

  getData("ArticlesNews", `/News?PageNumber=${pagination}&RowsOfPage=6`).then(
    (responseArticles) => {
      if (flag) {
        dispatch(ArticlesNews(responseArticles.data.news));
        setLength(responseArticles.data.totalCount);
        setFlag(false);
      }
    }
  );

  useEffect(() => {
    if (state) {
      console.log(state);
    }
  }, [state]);

  const totalItems = length;
  const totalPages = Math.ceil(totalItems / 6);
  const pageChangeHandler = async (pageNum) => {
    setPagination(pageNum);
    localStorage.setItem("PaginationNumber", pageNum);
    getDataByClick(`/News?PageNumber=${pageNum}&RowsOfPage=6`).then(
      (responseArticles) => {
        dispatch(ArticlesNews(responseArticles.data.news));
      }
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const changeFilterHandler = async (filter) => {
    localStorage.setItem("SearchArticles", filter.target.value);
    filterDataArticles(setSearchParams, dispatch);
  };

  const sortFilter = async (name) => {
    setItemLocalStorage("sortArticle", name);
    filterDataArticles(setSearchParams, dispatch);
  };

  return (
    <div className="max-w-7xl flex flex-row flex-wrap justify-center m-auto gap-3">
      <TopSectionArticlesNew changeFilterHandler={changeFilterHandler} />
      <div className="w-[900px] flex flex-col gap-7">
        <div className="h-[45px] flex gap-7">
          <h1 className="w-[400px] font-b-yekan font-bold text-[#005351] text-[27px] text-center">
            جدیدترین اخبار و مقالات
          </h1>
          <SortingArticlesNew selectData={sortFilter} />
        </div>
        <div className="flex flex-row flex-wrap gap-3">
          {state
            ? state.map((item, index) => {
                return (
                  <ArticlesCard
                    key={index}
                    title={item.title}
                    Describe={item.miniDescribe}
                    src={item.addUserProfileImage}
                    currentView={item.currentView}
                    // insertDate={index.insertDate}
                  />
                );
              })
            : 0
            // productMockData.map((item, index) => {
            //     return <CardLoading key={index} />;
            //   
            }
            {/* )} */}
        </div>
        <PaginationData
          initialPageNum={1}
          totalNum={totalPages}
          pageChange={pageChangeHandler}
        />
      </div>
      <div className="w-[298px] h-[900px] flex flex-col justify-center items-center gap-6 mt-15">
        <div
          className="w-full h-[408px] flex flex-col gap-7 shadow-sm items-center justify-center"
          data-aos="zoom-in-down"
        >
          <TextPagesArticlesNew
            title={"مطالب پیشنهادی"}
            explan={"این مطالب هم میتونه براتون جالب باشه"}
          />
          <div className="flex flex-col justify-center items-center gap-10">
            <CardArticlesOther title={"چرا فیگما؟"} image={BgFive} />
            <CardArticlesOther
              title={"چگونه یک مدیر پروژه باشیم؟"}
              image={BgThree}
            />
            <CardArticlesOther
              title={"سرعت تکنولوژی در قرن ۲۱"}
              image={BgFour}
            />
          </div>
        </div>
        <div
          className="w-full h-[408px] flex flex-col gap-7 shadow-sm items-center justify-center"
          data-aos="zoom-in-down"
        >
          <TextPagesArticlesNew
            title={"محبوب ترین دوره ها"}
            explan={"بهترین چیزهایی که میتونید یاد بگیرید"}
          />
          <div className="flex flex-col justify-center items-center gap-10">
            <CardArticlesOther title={"دوره جامع انگولار"} image={BgOne} />
            <CardArticlesOther title={"دوره جامع فیگما"} image={BgTwo} />
            <CardArticlesOther title={"دوره جامع ری اکت"} image={BgSix} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesAndNews;
