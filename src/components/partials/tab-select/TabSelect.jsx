import React from "react";
import { Tabs, Tab } from "@heroui/react";

const TabSelect = () => {
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  return (
    <div>
      <div className="flex flex-wrap gap-4">
          <Tabs
            aria-label="Tabs colors"
            color={""}
            radius="full"
            classNames={{
                cursor: `bg-gray-500`,
                tabList: "bg-[#fff] drop-shadow-[0_0_2px_#00000040] border border-[#00000040]",
                tabContent: `text-gray-600 font-b-yekan active:text-gray-50`,
                base: `visited:text-gray-50`
            }}
          >
            <Tab key="photos" title="دوره ها" className="font-b-yekan visited:text-gray-50"/>
            <Tab key="music" title="اخبارها" />
          </Tabs>
      </div>
    </div>
  );
};

export default TabSelect;
