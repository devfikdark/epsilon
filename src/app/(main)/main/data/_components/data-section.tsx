import React from "react";
import { CategoryNav } from "./category-nav";

const DataSection = () => {
  return (
    <>
      <CategoryNav className="[&>a:first-child]:text-primary" />
      {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="hidden md:block md:col-span-1 h-20 bg-pink-300">sidebar filter</div>
        <div className="md:col-span-2 lg:col-span-3 h-20 bg-gray-300">table</div>
      </div> */}
    </>
  );
};

export default DataSection;
