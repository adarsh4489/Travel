import { filterBoxData } from "../Utils/constants";

const SideFilterSection = ({ filterTags, setFilterTags }) => {
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
      className="w-1/4 bg-slate-2
     00 bg-slate-200 p-4 rounded-xl flex flex-col gap-4"
    >
      <h4 className="text-lg font-bold">Filters</h4>
      {filterBoxData.map((item) => {
        return (
          <div className="space-y-1 " key={item.id}>
            <h4 className="text-lg font-bold">{item.label}</h4>
            <div className="flex flex-wrap gap-2">
              {item.options.map((tag, index) => {
                return (
                  <span
                    className={`px-3 py-1 rounded-xl cursor-pointer font-semibold border transition
                  ${
      filterTags.includes(tag)
        ? "bg-orange-500 text-white border-orange-500"
        : "bg-white text-orange-500 border-orange-500 hover:bg-orange-100"
    }
  `}
                    onClick={(e) => handleTag(e)}
                    key={index}
                  >
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
