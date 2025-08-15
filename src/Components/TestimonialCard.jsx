import { useState } from "react";
import nature from "../assets/nature.jpg";
import { FaStar,FaStarHalfAlt,FaRegStar  } from "react-icons/fa"; // ⭐ star icon

const TestimonialCard = ({ item }) => {
  const { name, rating, message } = item;
  const words = message.split(" ");
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="bg-green-900/70 hover:bg-green-900 transition-all duration-300 shadow-xl rounded-2xl px-6 py-8 flex flex-col items-center gap-4 min-h-60 mx-2">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <img
          className="rounded-full w-16 h-16 object-cover ring-2 ring-white shadow-md"
          src={nature}
          alt={name}
        />
        <div className="flex flex-col">
          <p className="text-white font-semibold text-lg">{name}</p>
          <div className="flex items-center text-yellow-400">
            <div className="flex items-center text-yellow-400">
  {
    [...Array(5)].map((_, index) => {
      const full = Math.floor(rating);
      const hasHalf = rating % 1 !== 0;
      
      if (index < full) {
        return <FaStar key={index} className="text-sm" />;
      } else if (index === full && hasHalf) {
        return <FaStarHalfAlt key={index} className="text-sm" />;
      } else {
        return <FaRegStar key={index} className="text-sm text-yellow-300/50" />;
      }
    })
  }
</div>

          </div>
        </div>
      </div>

      {/* Message */}
      <div className="w-full text-white text-sm text-justify leading-relaxed">
        {
          !readMore
            ? `${words.slice(0, 20).join(" ")}... `
            : `${message} `
        }
        <span
          onClick={() => setReadMore(!readMore)}
          className="text-orange-400 font-medium cursor-pointer hover:underline ml-1"
        >
          {readMore ? "Read Less" : "Read More"}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
