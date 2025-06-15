import React from "react";
import TextComp from "@/components/TextComp";
import { myCourseReserveMockApi } from "@/data/mock";

const MyCourses = () => {
  const lang = "fa"; // Change to "en" if you want English

  return (
    <div>
      <TextComp
        dataMaper={myCourseReserveMockApi}
        lang={lang}
        boxContainerStyle="w-full"
        boxControlStyle="w-full justify-between"
      />

      {/* Below here: your list of course items */}
    </div>
  );
};

export default MyCourses;
