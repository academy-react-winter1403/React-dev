import React from 'react'
import HeroBG from '../../../../core/icons/LandingIcons/HeroBG'
import Titles from './Titles'
import { ServiceApi } from '../../../../core/constants/LandingMockApi/ServiceMockApi'
import { useTranslation } from 'react-i18next'

const ServiceSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroBG itemTop={"0"} itemLeft={"0"}>
        <div className='w-full min-h-[400px] h-full flex flex-col justify-between items-center font-b-yekan whitespace-nowrap z-60 max-w-[1515px] mx-auto'>
          {/* title */}
          <Titles 
          // title={"خدمات ما"} exp={"مجموعه ای از تمام آنچه شما نیاز دارید"}
         title={t("servicesTitle")} 
            exp={t("servicesDesc")}
          />
           {/* service */}
           <div className='w-[80%] h-[400px] flex flex-row flex-nowrap justify-between  relative' data-aos="fade-up-right">
            {
              ServiceApi.map((item, index) => ( 
                  <div 
                  key={index}
                  className="lg:w-[200px] lg:h-[210px] md:w-[150px] md:h-[150px] sm:w-[120px] sm:h-[170px] xs:w-[100px] xs:h-[150px] flex flex-col relative"
                  style={{ transform: `translateY(${item.posYFlag ? "20px" : "100px"})` }}
                  >
                    <div className='flex items-center justify-center'>
                      <img 
                      className='lg:w-[70px] lg:h-[70px] md:w-[60px] md:h-[60px] sm:w-[55px] sm:h-[55px] xs:w-[45px] xs:h-[45px]'
                      src={item.imageT} 
                      alt="#"
                      />
                      {item.icon}
                    </div>
                    <div className='flex justify-center items-center absolute top-13'>
                      <img 
                      className='lg:w-[211px] lg:h-[170px] md:h-[160px] md:w-[200px]'
                      src={item.imageB} 
                      alt="#"
                      />
                      <div className='absolute'>
                        <h3 
                        className='font-bold  text-center
                        lg:text-[25px] md:text-[20px] sm:text-[16px] xs:text-[13px] xs:whitespace-pre-line'
                        style={{ color: item.color }}
                        >
                          {/* {item.title} */}
                          {t(item.titleKey)}
                        </h3>
                        <p 
                        className='text-[#AAAAAA] font-bold text-center
                        lg:text-[12px] md:text-[9px] sm:text-[6px] xs:text-[5px] lg:indent-[-20px] md:indent-[-15px] sm:indent-[-10px] xs:indent-[-2px] '
                        style={{ whiteSpace: "pre-line" }}
                        >
                          {/* {item.desc} */}
                          {t(item.descKey)}
                        </p>
                      </div>
                    </div>
                  </div>
              ))
            }
           </div>
        </div>
      </HeroBG>
    </>
  )
}

export default ServiceSection
