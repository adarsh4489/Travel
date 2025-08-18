import { useEffect } from "react";
import AOS from "aos";
import { filterBoxData } from "../Utils/constants";

const SideFilterSection = ({ filterTags, setFilterTags }) => {
  useEffect(() => {
    AOS.refresh();
  }, [filterTags]);

  const handleTag = (e) => {
    const tag = e.target.innerText;
    if (filterTags.includes(tag)) {
      setFilterTags((prev) => prev.filter((t) => t !== tag));
    } else {
      setFilterTags((prev) => [...prev, tag]);
    }
  };

  return (
    <div
      className="w-1/4 bg-slate-200 p-4 rounded-xl flex flex-col gap-6 select-none"
      data-aos="fade-right"
    >
      <h4 className="text-lg font-bold border-b border-orange-500 pb-2">Filters</h4>
      {/** Assuming filterBoxData is imported from constants **/}
      {filterBoxData.map((item) => (
        <div className="space-y-2" key={item.id}>
          <h4 className="text-lg font-semibold">{item.label}</h4>
          <div className="flex flex-wrap gap-2">
            {item.options.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-xl cursor-pointer font-semibold border transition
                  ${
                    filterTags.includes(tag)
                      ? "bg-orange-500 text-white border-orange-500 shadow-lg"
                      : "bg-white text-orange-500 border-orange-500 hover:bg-orange-100 hover:scale-105"
                  }`}
                onClick={handleTag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideFilterSection;
