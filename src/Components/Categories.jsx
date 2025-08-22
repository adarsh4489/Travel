import React from "react";
import CategoriesCard from "./CategoriesCard";
import { categoryData } from "../Utils/constants";

const Categories = () => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-12">
      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Travel Categories
      </h3>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {categoryData.map((data) => (
          <CategoriesCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
