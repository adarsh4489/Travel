
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="
        group flex flex-col items-center text-center
        bg-[#DFD9CE] text-orange-600
        gap-3 px-8 py-8 h-66 rounded-xl
        shadow-md hover:shadow-xl transition-colors duration-300 ease-in-out
        cursor-pointer
        hover:bg-orange-300 hover:text-black
        transform hover:scale-105
      "
    >
      <div
        className="
          bg-white border-orange-600 border-2
          rounded-full px-4 py-4 transition-all duration-300
          group-hover:rotate-3 group-hover:shadow-md
        "
      >
        <Icon className="text-4xl" />
      </div>

      <h4 className="font-bold text-lg text-black">{title}</h4>

      <p className="text-slate-800 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
