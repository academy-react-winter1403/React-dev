import React from "react";
import Titles from "./Titles";
import {
  leftItem,
  NewsApi,
  rightItem,
} from "../../../../core/constants/LandingMockApi/NewsMockApi";
import { MdNavigateBefore } from "react-icons/md";
import Overlay from "./Overlay";
const NewsSection = () => {
  return (
    // <div className="w-full h-[700px] mt-7 mb-7 flex flex-col items-center justify-between font-b-yekan">
    //   <Titles title={"اخبار و مقالات"} exp={"خـــودت رو با خـــبر کن !"} />
    //   {/* articles */}
    //   <div className="w-[80%] h-[500px] grid grid-cols-4 grid-flow-dense gap-4 cursor-pointer">
    //     {NewsApi.map((item, index) => (
    //       <div
    //         key={index}
    //         className={`relative overflow-hidden ${
    //           item.colSpan ? "col-span-1" : "col-span-2"
    //         } rounded-2xl`}
    //         style={{ height: item.colSpan ? "250px" : "200px" }}
    //       >
    //         {/* Image */}
    //         <img
    //           className="w-full h-full object-cover rounded-2xl"
    //           src={item.image}
    //           alt="#"
    //         />

    //         {/* Gradient Overlay */}
    //         <div className="absolute inset-0 bg-gradient-to-b from-[#E4E4E4] to-[#00E7E1] opacity-25 rounded-2xl"></div>

    //         {/* Hover Effect */}
    //         <div
    //           className="absolute inset-0 flex items-center justify-center rounded-2xl group hover:bg-gradient-to-b from-[#00FCF6] to-[#002B2A]
    //       opacity-0 hover:opacity-80 transition-all duration-300"
    //         >
    //           <button
    //             className="bg-[#E48900] rounded-[20px] text-center text-black w-[50%] h-9 cursor-pointer
    //         opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    //           >
    //             ادامه مطالب
    //           </button>
    //         </div>

    //         {/* Text */}
    //         <div className="absolute bottom-5 left-0 w-full text-[#005B58] p-2">
    //           <p className="text-sm">{item.desc}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   {/* see all */}
    //   <div className="w-full h-5 flex items-center justify-center flex-row flex-nowrap text-[#AAAAAA] cursor-pointer">
    //     <p>
    //     مشاهده بیشتر
    //     </p>
    //     <MdNavigateBefore size={23}/>
    //   </div>
    // </div>

    <div className="w-full border flex flex-col justify-center items-center">
      <Titles title={"اخبار و مقالات"} exp={"خـــودت رو با خـــبر کن !"} />
      <div className="item-holder flex">
        <div className="right">
          {rightItem.map((item, index) => {
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
                                      {item.desc}
                                    </p>
                                    <div
                                      className="w-[98.2%] h-[99%] overlay absolute top-[0] right-[5px] inset-0 bg-gradient-to-b
                                      from-[#E4E4E400] to-[#00E7E1] rounded-2xl"
                                    ></div>
                                    <Overlay
                                      widthNum={"98.2%"}
                                      heightNum={"98%"}
                                      posYNum={"3px"}
                                      posXNum={"5px"}
                                    />
                                  </div>
                                )}
                              </>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="bottom flex items-center">
                          {item.itemData.map((item, index) => {
                            console.log(item);
                            return (
                              <>
                                {!item.holderId && (
                                  <div className="group image-control relative flex justify-center items-center">
                                    <img src={item.image} alt="" />
                                    {/* <div className="w-full h-full overlay absolute inset-0 bg-gradient-to-b
                                      from-[#E4E4E400] to-[#00E7E1] rounded-2xl"
                                    ></div> */}
                                    <p
                                      className="absolute bottom-4 right-6 z-40 text-[#005B58]
                                      font-extrabold text-[15px] font-b-yekan"
                                    >
                                      {item.desc}
                                    </p>
                                    <Overlay
                                      widthNum={"97%"}
                                      heightNum={"96%"}
                                      posYNum={"3px"}
                                      posXNum={"5px"}
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

        <div className="left">
          {leftItem.map((item, index) => {
            return (
              <>
                {item.holderId.map((holderId) => {
                  console.log(holderId);
                  return (
                    <>
                      {holderId === 1 ? (
                        <div className="top flex">
                          {item.itemData.map((item, index) => {
                            console.log(item);
                            return (
                              <>
                                {item.holderId && (
                                  <div className="group imege-control relative flex justify-center items-center">
                                    <img
                                      src={item.image}
                                      alt=""
                                      className="bg-linear-90"
                                    />
                                    <p
                                      className="absolute bottom-4 right-6 z-40 text-[#005B58]
                                          font-extrabold text-[15px] font-b-yekan"
                                    >
                                      {item.desc}
                                    </p>
                                    <Overlay
                                      widthNum={"97%"}
                                      heightNum={"96%"}
                                      posYNum={"3px"}
                                      posXNum={"5px"}
                                    />
                                  </div>
                                )}
                              </>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="bottom">
                          {item.itemData.map((item, index) => {
                            console.log(item);
                            return (
                              <>
                                {!item.holderId && (
                                  <div className="group image-control relative flex justify-center items-center">
                                    <img src={item.image} alt="" />
                                    <p
                                      className="absolute bottom-4 right-6 z-40 text-[#005B58]
                                      font-extrabold text-[15px] font-b-yekan"
                                    >
                                      {item.desc}
                                    </p>
                                    <Overlay
                                      widthNum={"98.2%"}
                                      heightNum={"98%"}
                                      posYNum={"3px"}
                                      posXNum={"5px"}
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
      <div className="w-full h-5 flex items-center justify-center flex-row flex-nowrap text-[#AAAAAA] cursor-pointer mt-[28px]">
        <p>مشاهده بیشتر</p>
        <MdNavigateBefore size={23} />
      </div>
    </div>
  );
};

export default NewsSection;
