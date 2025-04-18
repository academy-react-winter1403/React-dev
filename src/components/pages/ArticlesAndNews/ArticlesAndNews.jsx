import SortingArticlesNew from "./Sorting-Articles/SortingCol";
import ArticlesCard from "../../partials/ArticlesCard/ArticlesCard";
import CardArticlesOther from "./CardArticlesOther/CardArticlesOther";
import TextPagesArticlesNew from "./TextPagesArticlesNew";
import TopSectionArticlesNew from "./TopSectionArticlesNew";
import React, { useEffect } from "react";
import { CardLoading, PaginationData } from "../../partials";
import BgOne from "./../../../assets/pics/articles/01.png";
import BgTwo from "./../../../assets/pics/articles/02.png";
import BgSix from "./../../../assets/pics/articles/03.png";
import BgThree from "./../../../assets/pics/articles/01.jfif";
import BgFour from "./../../../assets/pics/articles/02.jfif";
import BgFive from "./../../../assets/pics/articles/03.jfif";
import { useDispatch, useSelector } from "react-redux";
import { filterDataArticles } from "../../../core";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  changePageNumber,
  changeQueryArticles,
  changeRowsOfPage,
  changeSortingCol,
  changeSortTypeArticles,
  firstAddArticleProduct,
} from "../../../redux/actions";
import SelectView from "../courses/SelectView";
import { viewDataArticles } from "../../../core/constants/articlesMockApi/view-data-articles";
import SortTypeCard from "../../common/SortTypeCard";
import { sortColData } from "../../../core/constants";
import { sortingArticlesNews } from "../../../core/constants/articlesMockApi/sort_data";

const ArticlesAndNews = () => {
  const dispatch = useDispatch();
  const { PageNumber, RowsOfPage, SortingCol, SortType, Query } = useSelector(
    (state) => state.articlesQueryFilter
  );
  const { articleState, totalCount } = useSelector(
    (state) => state.allDataArticleSlice
  );
  useEffect(() => {
    const getData = async () => {
      const articles = await filterDataArticles({
        PageNumber,
        RowsOfPage,
        SortingCol,
        SortType,
        Query,
      });
      dispatch(firstAddArticleProduct(articles));
    };
    getData();
  }, [PageNumber, RowsOfPage, SortingCol, SortType, Query, dispatch]);
  const totalPages = Math.ceil(totalCount / RowsOfPage);
  const changeQueryHandler = (QueryEvent) => {
    console.log(QueryEvent.target.value);
    dispatch(changeQueryArticles(QueryEvent.target.value));
  };
  const pageChangeHandler = (pageEvent) => {
    console.log(pageEvent);
    dispatch(changePageNumber(pageEvent));
  };
  const viewClickHandler = (viewEvent) => {
    console.log(viewEvent);
    if (viewEvent === 6) {
      dispatch(changeRowsOfPage(6));
    }
    if (viewEvent === 9) {
      dispatch(changeRowsOfPage(9));
    }
    if (viewEvent === 12) {
      dispatch(changeRowsOfPage(12));
    }
  };
  const sortTypeChangeHandler = (sortTypeEvent) => {
    console.log(sortTypeEvent);
    if (sortTypeEvent === "صعودی") {
      dispatch(changeSortTypeArticles("ACS"));
    }
    if (sortTypeEvent === "نزولی") {
      dispatch(changeSortTypeArticles("DESC"));
    }
  };
  const sortChangeHandler = (sortEvent) => {
    console.log(sortEvent);
    if (sortEvent === "جدیدترین") {
      dispatch(changeSortingCol("Active"));
    }
    if (sortEvent === "پرطرفدارترین") {
      dispatch(changeSortingCol("InsertDate"));
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="max-w-7xl flex flex-row flex-wrap justify-center m-auto gap-3">
      <TopSectionArticlesNew changeFilterHandler={changeQueryHandler} />
      <div className="w-[900px] flex flex-col gap-7">
        <div className="h-[45px] flex gap-4">
          <h1 className="font-b-yekan font-bold text-[#005351] text-[27px] text-center">
            جدیدترین اخبار و مقالات
          </h1>
          <SortingArticlesNew
            dataMap={sortingArticlesNews}
            onChange={sortChangeHandler}
          />
          <SelectView
            placeholder={" 6 آیتم "}
            dataMap={viewDataArticles}
            concatText={"آیتم"}
            viewClick={viewClickHandler}
          />
          <SortTypeCard
            dataMap={sortColData}
            onChange={sortTypeChangeHandler}
          />
        </div>
        <div className="flex flex-row flex-wrap gap-3">
          {
            articleState
              ? articleState.map((item, index) => {
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
            //   productMockData.map((item, index) => {
            //       return <CardLoading key={index} />;

            // }
            // )
          }
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
