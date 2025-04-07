import SortingArticlesNew from "./Sorting-Articles/SortingArticlesNew";
import ArticlesCard from "../../partials/ArticlesCard/ArticlesCard";
import CardArticlesOther from "./CardArticlesOther/CardArticlesOther";
import TextPagesArticlesNew from "./TextPagesArticlesNew";
import TopSectionArticlesNew from "./TopSectionArticlesNew";
import React, { useState } from "react";
import { getData } from "../../../core/services/api/get-data/getData";
import { PaginationData } from "../../partials";
import { getDataByClick } from "../../../core/services";
import BgOne from "./../../../assets/pics/articles/01.png";
import BgTwo from "./../../../assets/pics/articles/02.png";
import BgSix from "./../../../assets/pics/articles/03.png";
import BgThree from "./../../../assets/pics/articles/01.jfif";
import BgFour from "./../../../assets/pics/articles/02.jfif";
import BgFive from "./../../../assets/pics/articles/03.jfif";

const ArticlesAndNews = () => {
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [flag, setFlag] = useState(true);
  const [length, setLength] = useState(0);
  const [searchArticles, setSearchArticles] = useState([]);

  getData("ArticlesNews", `/News?PageNumber=${pagination}&RowsOfPage=6`).then(
    (responseArticles) => {
      if (flag) {
        setArticles(responseArticles.data.news);
        setLength(responseArticles.data.totalCount);
        setFlag(false);
        // console.log(responseArticles.data.totalCount);
      }
    }
  );

  const totalItems = length;
  const totalPages = Math.ceil(totalItems / 6);
  const pageChangeHandler = async (pageNum) => {
    setPagination(pageNum);

    getDataByClick(`/News?PageNumber=${pageNum}&RowsOfPage=6`).then(
      (responseArticles) => {
        setArticles(responseArticles.data.news);
        // console.log(responseArticles.data.news);
        // console.log(flag);
      }
    );
    // console.log(pageNum);
  };

  const changeFilterHandler = async (filter) => {
    // console.log(filter.target.value);
    setSearchArticles(filter.target.value);
    // console.log(filter.target);
    
    getDataByClick(
      `/News?PageNumber=${pagination}&RowsOfPage=6&SortingCol=InsertDate&Query=${searchArticles}`
    ).then((responseFilterArticles) => {
      setArticles(responseFilterArticles.data.news);
      console.log(searchArticles);
    });
  };

  return (
    <div className="max-w-7xl flex flex-row flex-wrap justify-center m-auto gap-5">
      <TopSectionArticlesNew changeFilterHandler={changeFilterHandler} />
      <div className="w-[900px] flex flex-col gap-7">
        <div className="h-[45px] flex gap-7">
          <h1 className="w-[400px] font-b-yekan font-bold text-[#005351] text-[27px] text-center">
            جدیدترین اخبار و مقالات
          </h1>
          <SortingArticlesNew selectData={changeFilterHandler}/>
        </div>
        <div className="flex flex-row flex-wrap gap-2.5">
          {articles
            ? articles.map((index) => {
                return (
                  <div key={index.id}>
                    <ArticlesCard
                      title={index.title}
                      Describe={index.miniDescribe}
                      src={index.addUserProfileImage}
                      currentView={index.currentView}
                      // insertDate={index.insertDate}
                    />
                  </div>
                );
              })
            : 0}
        </div>
        <PaginationData
          initialPageNum={1}
          totalNum={totalPages}
          pageChange={pageChangeHandler}
        />
      </div>
      <div className="w-[298px] h-[900px] flex flex-col justify-center items-center gap-6 mt-15">
        <div className="w-full h-[408px] flex flex-col gap-7 shadow-sm items-center justify-center">
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
        <div className="w-full h-[408px] flex flex-col gap-7 shadow-sm items-center justify-center">
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
        {/* <div className="w-full h-[408px] flex flex-col gap-7 shadow-sm items-center justify-center">
          <TextPagesArticlesNew
            title={"محبوب ترین دوره ها"}
            explan={"بهترین چیزهایی که میتونید یاد بگیرید"}
          />
          <div className="flex flex-col justify-center items-center gap-10">
            <CardArticlesOther title={"دوره جامع انگولار"} />
            <CardArticlesOther title={"دوره جامع فیگما"} />
            <CardArticlesOther title={"دوره جامع ری اکت"} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ArticlesAndNews;
