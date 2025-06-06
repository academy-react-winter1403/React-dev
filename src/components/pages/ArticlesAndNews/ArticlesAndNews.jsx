import CardArticlesOther from "./CardArticlesOther/CardArticlesOther";
import TextPagesArticlesNew from "./TextPagesArticlesNew";
import TopSectionArticlesNew from "./TopSectionArticlesNew";
import React, { useEffect, useState } from "react";
import { PaginationData } from "../../partials";
import NotResultFound from "./../../../assets/pics/articles/nothings_found.png";
import { useDispatch, useSelector } from "react-redux";
import { filterDataArticles } from "../../../core";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  changePageNumber,
  firstAddArticleProduct,
} from "../../../redux/actions";

import SelectView from "../courses/SelectView";
import { viewDataArticles } from "../../../core/constants/articlesMockApi/view-data-articles";
import SortTypeCard from "../../common/SortTypeCard";
import { sortColData } from "../../../core/constants";
import { sortingArticlesNews } from "../../../core/constants/articlesMockApi/sort_data";
import ScrollToTopButton from "../../common/ScrollToTopBtn";

import { useNavigate } from "react-router-dom";
import FilterBar from "../../partials/FilterBar.jsx/FilterBar";
import ArticlesCardView1 from "../../partials/ArticlesCard/ArticlesCardView1";
import ArticlesCardView2 from "../../partials/ArticlesCard/ArticlesCardView2";
import { GridIcon, MenuIcon } from "../../../core/icons/icons";
import { IoMdCopy } from "react-icons/io";
import { productMockData } from "../../../core/constants";
import LoadingCardArticles from "../../partials/Loading-card-articles/LoadingCardArticles";

import BgOne from "./../../../assets/pics/articles/01.png";
import BgTwo from "./../../../assets/pics/articles/02.png";
import BgThree from "./../../../assets/pics/articles/01.jfif";
import BgFour from "./../../../assets/pics/articles/02.jfif";
import BgFive from "./../../../assets/pics/articles/03.jfif";
import BgSix from "./../../../assets/pics/articles/03.png";
import { useTranslation } from "react-i18next";

const ArticlesAndNews = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [view, setView] = useState(true);
  const { PageNumber, RowsOfPage, SortingCol, SortType, Query } = useSelector(
    (state) => state.articlesQueryFilter
  );
  const { articleState, totalCount } = useSelector(
    (state) => state.allDataArticleSlice
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const articles = await filterDataArticles({
        PageNumber,
        RowsOfPage,
        SortingCol,
        SortType,
        Query,
      });
      dispatch(firstAddArticleProduct(articles));
      setIsLoading(false);
    };
    getData();
  }, [PageNumber, RowsOfPage, SortingCol, SortType, Query, dispatch]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const handleCardClick = (id) => {
    navigate(`/article-detail/${id}`);
  };

  const changePageHandler = (pageNum) => {
    dispatch(changePageNumber(pageNum));
  };
  return (
    <div className="max-w-8xl flex flex-col justify-center m-auto gap-3 bg-[var(--bg-main)] font-b-yekan  max-w-[1500px] mx-auto">
      <div dir={isRTL ? "rtl" : "ltr"} className="mb-9">
        <TopSectionArticlesNew />
      </div>
      <div
        // className="flex lg:flex-row lg:flex-nowrap lg:gap-3 xs:flex-col  m-auto items-start justify-center w-[90%]"
        className={`flex lg:flex-nowrap flex-col lg:w-[90%] m-auto items-start justify-center gap-3 ${
          isRTL ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        <div className="lg:w-2/3 flex flex-col gap-7 ">
          <div
            className="h-[45px] flex flex-col justify-end items-start gap-4 xs:gap-2"
            dir={isRTL ? "rtl" : "ltr"}
          >
            <h1 className="font-b-yekan font-bold text-[var(--filter-text)] md:text-[27px] xs:text-[20px] text-center whitespace-nowrap">
              {/* جدیدترین اخبار و مقالات */}
              {t("articleTopTitle")}
            </h1>
            <div className="flex flex-row gap-2.5" dir={isRTL ? "rtl" : "ltr"}>
              <FilterBar />
              <div className="flex gap-x-[15px]">
                <MenuIcon click={() => setView(false)} view={view} />
                <GridIcon click={() => setView(true)} view={view} />
                <IoMdCopy
                  style={{ color: "#005B58" }}
                  className="size-[35px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-3 justify-center">
            {isLoading ? (
              productMockData.map((item, index) => (
                <LoadingCardArticles key={index} view={view} />
              ))
            ) : articleState && articleState.length > 0 ? (
              articleState.map((item, index) =>
                view ? (
                  <ArticlesCardView1
                    key={index}
                    title={item.title}
                    Describe={item.miniDescribe}
                    src={item.addUserProfileImage}
                    currentView={item.currentView}
                    insertDate={item.insertDate}
                    onClick={() => handleCardClick(item.id)}
                  />
                ) : (
                  <ArticlesCardView2
                    key={index}
                    title={item.title}
                    Describe={item.miniDescribe}
                    src={item.addUserProfileImage}
                    currentView={item.currentView}
                    insertDate={item.insertDate}
                    onClick={() => handleCardClick(item.id)}
                  />
                )
              )
            ) : (
              <img src={NotResultFound} />
            )}
          </div>
          <PaginationData
            initialPageNum={1}
            totalCount={totalCount}
            RowsOfPage={RowsOfPage}
            changePageNumber={changePageHandler}
          />
        </div>
        <div className="lg:w-[298px] xs:w-full flex lg:flex-col flex-row justify-center items-center mt-15 gap-6 ">
          <div
            className="lg:w-full md:w-1/2 h-[408px] flex flex-col gap-7 shadow-sm items-center justify-center bg-(--boxes-article) rounded"
            data-aos="zoom-in-down"
          >
            <TextPagesArticlesNew
              // title={"مطالب پیشنهادی"}
              // explan={"این مطالب هم میتونه براتون جالب باشه"}
              title={t("recCourse1")}
              explan={t("recCourse1Exp")}
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
            className="lg:w-full md:w-1/2 h-[408px] flex flex-col gap-7 shadow-sm items-center justify-center bg-(--boxes-article) rounded"
            data-aos="zoom-in-down"
          >
            <TextPagesArticlesNew
              // title={"محبوب ترین دوره ها"}
              // explan={"بهترین چیزهایی که میتونید یاد بگیرید"}
              title={t("recCourse2")}
              explan={t("recCourse2Exp")}
            />
            <div className="flex flex-col justify-center items-center gap-10">
              <CardArticlesOther title={"دوره جامع انگولار"} image={BgOne} />
              <CardArticlesOther title={"دوره جامع فیگما"} image={BgTwo} />
              <CardArticlesOther title={"دوره جامع ری اکت"} image={BgSix} />
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default ArticlesAndNews;
