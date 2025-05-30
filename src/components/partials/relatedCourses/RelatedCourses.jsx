import React, { useEffect } from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import RelatedCoursesOptions from './RelatedCoursesOptions';
import { useSelector } from 'react-redux';

const RelatedCourses = () => {

  const {relatedCoursesSlice} = useSelector(state => state)

  const {relatedCoursesData} = relatedCoursesSlice

  // useEffect(() => {if (relatedCoursesData) console.log(relatedCoursesData)}, [])

  return (
    <div className='w-full bg-white font-b-yekan flex flex-col items-center justify-center gap-2 py-4 rounded-2xl shadow-sm'>
      <div className='w-[95%] h-12 bg-[#E8E8E8] rounded-tl-[10px] rounded-tr-[10px] shadow-sm'>
        <p className='text-[#555555] indent-4 mt-2'>دوره های مرتبط</p>
      </div>

      {/* Dynamically render from data */}
      {relatedCoursesData?.map((item, index) => (
        <RelatedCoursesOptions
          key={index}
          title={item.title}
          image={item.imageAddress}
        />
      ))}
    </div>
  );
};

export default RelatedCourses;
