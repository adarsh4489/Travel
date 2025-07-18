import React from "react";
import { filterBoxData } from "../Utils/constants";

const SideFilterSection = () => {
  return (
    <div
      className="w-1/4 bg-slate-2
     00 bg-slate-200 p-4 rounded-xl flex flex-col gap-4"
    >
      <h4 className="text-lg font-bold">Filters</h4>
      {filterBoxData.map((item) => {
        return (
          <div className="space-y-1 " key={item.id}>
            <h4 className="text-lg font-semibold">{item.label}</h4>
            <div className="flex flex-wrap gap-2">
              {item.options.map((tag, index) => {
                return (
                  <span className="bg-slate-100 px-2 rounded-xl " key={index}>
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideFilterSection;
