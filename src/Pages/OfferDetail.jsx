import TestimonialCarousel from "../Components/TestimonialCarousel";
import { useNavigate, useParams } from "react-router";
import { FaStar } from "react-icons/fa6";
import { tripData } from "../Utils/constants";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OfferDetail = () => {
  const { id } = useParams();
  const data = tripData.find((item) => String(item.id) === id);
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    window.scrollTo(0, 0);
    if (data) {
      setMainImage(data.image);
      setThumbnails(data.galleryImages.slice(0, 3));
    }
  }, [data]);

  if (!data) return <p className="text-center mt-20 text-gray-600">Offer not found.</p>;

  const {
    placeName,
    description,
    facilities,
    location,
    averageRating,
    price,
    packageDetails,
    nearestDestinations,
    endDate,
    startDate,
  } = data;

  // ✅ Swap Logic
  const handleImageSwap = (clickedImg, index) => {
    const newThumbs = [...thumbnails];
    const temp = mainImage;
    setMainImage(clickedImg);
    newThumbs[index] = temp;
    setThumbnails(newThumbs);
  };

  return (
    <div className="w-[90%] max-w-7xl mx-auto my-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-8" data-aos="fade-up">
        {/* Left: Images */}
        <div className="flex flex-col lg:w-1/2 gap-4">
          {/* Main Image */}
          <img
            src={mainImage}
            alt="Main"
            className="rounded-xl object-cover h-72 w-full shadow-md transition duration-300 ease-in-out"
            data-aos="zoom-in"
          />

          {/* Gallery Thumbnails */}
          <div className="flex justify-between gap-2">
            {thumbnails.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => handleImageSwap(item, index)}
                className={`w-1/3 h-24 object-cover rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 shadow-sm`}
                alt={`Gallery ${index}`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:w-1/2 flex flex-col gap-4" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-green-900">{placeName}</h2>
          <div className="flex gap-4 items-center">
            <p className="text-lg font-semibold">{location}</p>
            <div className="font-bold text-green-900 flex items-center gap-1">
              {averageRating}
              <span className="text-yellow-400">
                <FaStar />
              </span>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">{description}</p>

          {/* Nearest Destinations */}
          <div className="flex flex-wrap gap-2 items-center">
            <strong className="text-gray-800">Nearest Destinations:</strong>
            {nearestDestinations.map((item, index) => (
              <span
                key={index}
                className="bg-green-900/70 text-white px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Facilities */}
          <div className="flex flex-wrap gap-2">
            {facilities.map((item, index) => (
              <span
                key={index}
                className="text-sm bg-slate-200 px-3 py-1 rounded-full text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-gray-700">{packageDetails}</p>

          {/* Pricing */}
          <div className="mt-4 space-y-2">
            <p className="text-xl font-bold text-green-900">
              ${price}
              <strike className="text-red-500 ml-3 text-sm font-normal">$1800</strike>
            </p>
            <p className="text-md font-semibold text-gray-800">
              Starts from {startDate} to {endDate}
            </p>

            <button
              className="bg-orange-500 hover:bg-orange-600 px-5 py-2 mt-3 rounded-full text-white font-semibold transition duration-300 shadow-md hover:shadow-lg"
              onClick={() => navigate("/booking", { state: data })}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Similar Packages */}
      <div className="mt-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-green-900">Similar Packages</h2>
        <p className="text-gray-600 italic mb-6">More related trips will go here.</p>
      </div>

      {/* Testimonials */}
      <div className="mt-20" data-aos="fade-up">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default OfferDetail;
