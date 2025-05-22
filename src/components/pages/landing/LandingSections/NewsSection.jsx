import React from "react";
import Titles from "./Titles";
import {
  leftItem,
  NewsApi,
  rightItem,
} from "../../../../core/constants/LandingMockApi/NewsMockApi";
import { MdNavigateBefore } from "react-icons/md";
import Overlay from "./Overlay";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const NewsSection = () => {
  const navigate = useNavigate()
  const { t } = useTranslation();
  const handleGoToNews = () => {
    navigate('/ArticlesAndNews')
  }
  return (
    <div className="w-full flex flex-col justify-center items-center mt-7 mb-7 gap-2 font-b-yekan" data-aos="zoom-in">
      {/* <Titles title={"اخبار و مقالات"} exp={"خـــودت رو با خـــبر کن !"} /> */}
      <Titles title={t("newsSectionTitle")} exp={t("newsSectionExp")} />
      <div className="item-holder flex xs:flex-col md:flex-row">
        <div className="right lg:px-0 md:px-6 sm:p-0 xs:px-6">
          {rightItem.map((item) => {
            return (
              <>
                {item.holderId.map((holderId, index) => {
                  console.log(holderId);
                  return (
                    <>
                      {holderId === 1 ? (
                        <div className="top flex" key={index}>
                          {item.itemData.map((item, index) => {
                            console.log(item);
                            return (
                              <>
                                {item.holderId && (
                                  <div
                                    className="image-control relative group flex
                                    justify-center items-center"
                                    key={index}
                                  >
                                    <img src={item.image} alt="" className="" />
                                    <p
                                      className="absolute bottom-4 right-6 z-40 text-[#005B58]
                                      font-extrabold text-[15px] font-b-yekan"
                                    >
                                      {/* {item.desc} */}
                                       {t(item.descKey)}
                                    </p>
                                    <div
                                      className="w-[98.2%] h-[99%] overlay absolute top-[0] right-[5px] inset-0 bg-gradient-to-b
                                      from-[#E4E4E4] to-[#cde8e7] rounded-2xl opacity-45"
                                    ></div>
                                    <Overlay
                                      widthNum={522}
                                      heightNum={210}
                                      posYNum={0}
                                      posXNum={6}
                                    />
                                  </div>
                                )}
                              </>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="bottom flex items-center">
                          {item.itemData.map((item) => {
                            console.log(item);
                            return (
                              <>
                                {!item.holderId && (
                                  <div className="group image-control relative flex justify-center items-center object-cover">
                                    <img
                                      src={item.image}
                                      alt=""
                                      className="inset-0 bg-gradient-to-b from-[#E4E4E4] to-[#cde8e7] rounded-2xl opacity-75 object-cover"
                                    />
                                    <p
                                      className="absolute bottom-4 right-6 z-40 text-[#005B58]
                                      font-extrabold text-[15px] font-b-yekan"
                                    >
                                      {/* {item.desc} */}
                                       {t(item.descKey)}
                                    </p>
                                    <Overlay
                                      widthNum={250}
                                      heightNum={255}
                                      posYNum={0}
                                      posXNum={6}
                                    />
                                  </div>
                                )}
                              </>
                            );
                          })}
                        </div>
                      )}
                    </>
                  );
                })}
              </>
            );
          })}
        </div>

        <div className="left lg:px-0 md:px-6 sm:p-0 xs:px-6">
          {leftItem.map((item) => {
            return (
              <>
                {item.holderId.map((holderId) => {
                  console.log(holderId);
                  return (
                    <>
                      {holderId === 1 ? (
                        <div className="top flex">
                          {item.itemData.map((item) => {
                            console.log(item);
                            return (
                              <>
                                {item.holderId && (
                                  <div className="group imege-control relative flex justify-center items-center">
                                    <img
                                      src={item.image}
                                      alt=""
                                      className="inset-0 bg-gradient-to-b from-[#E4E4E4] to-[#cde8e7] rounded-2xl opacity-75 object-cover"
                                    />
                                    <p
                                      className="absolute bottom-4 right-6 z-40 text-[#005B58]
                                          font-extrabold text-[15px] font-b-yekan"
                                    >
                                      {/* {item.desc} */}
                                       {t(item.descKey)}
                                    </p>
                                    <Overlay
                                      widthNum={250}
                                      heightNum={255}
                                      posYNum={0}
                                      posXNum={6}
                                    />
                                  </div>
                                )}
                              </>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="bottom">
                          {item.itemData.map((item) => {
                            console.log(item);
                            return (
                              <>
                                {!item.holderId && (
                                  <div className="group image-control relative flex justify-center items-center inset-0 bg-gradient-to-b from-[#E4E4E4] to-[#9bf5f2] rounded-2xl opacity-75 object-cover">
                                    <img src={item.image} alt="" />
                                    <p
                                      className="absolute bottom-4 right-6 z-40 text-[#005B58]
                                      font-extrabold text-[15px] font-b-yekan"
                                    >
                                      {/* {item.desc} */}
                                       {t(item.descKey)}
                                    </p>
                                    <Overlay
                                      widthNum={522}
                                      heightNum={210}
                                      posYNum={0}
                                      posXNum={6}
                                    />
                                  </div>
                                )}
                              </>
                            );
                          })}
                        </div>
                      )}
                    </>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
      <div className="h-5 flex items-center justify-center flex-row flex-nowrap text-[#AAAAAA] cursor-pointer mt-[28px]"
      onClick={handleGoToNews}>
        {/* <p>مشاهده بیشتر</p> */}
        <p>{t("newsSectionViewMore")}</p>
        <MdNavigateBefore size={23} />
      </div>
    </div>
  );
};

export default NewsSection;


