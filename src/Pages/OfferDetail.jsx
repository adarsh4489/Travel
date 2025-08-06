import TestimonialCarousel from "../Components/TestimonialCarousel";
import {useNavigate, useParams } from "react-router";
import { FaStar } from "react-icons/fa6";
import { tripData } from "../Utils/constants";

const OfferDetail = () => {
  const { id } = useParams();
  const data = tripData.find((item) => String(item.id) === id);
  const {
    placeName,
    description,
    facilities,
    location,
    image,
    galleryImages,
    averageRating,
    price,
    packageDetails,
    nearestDestinations,endDate,startDate
  } = data;
  const navigate=useNavigate();

  return (
    <div className="w-[90%] my-20 mx-12 ">
      <div className="flex ">
        <div className="flex flex-col w-1/2 gap-1">
          <img src={image} alt="" className="rounded-lg" />
          <div className="flex justify-between gap-2 w-full">
            {galleryImages.map((item, index) => (
              <img
                key={index}
                className="w-[24%] rounded-xl object-cover"
                src={item}
                alt={`Gallery ${index}`}
              />
            ))}
          </div>
        </div>
        <div className="details flex flex-col w-1/2 gap-2 ml-24">
          <h2 className="text-2xl font-semibold">{placeName}</h2>
          <div className="flex gap-4 items-center">
            <p className="text-lg font-semibold">{location}</p>
            <div className="font-bold text-green-900 flex items-center gap-1">
              {averageRating}{" "}
              <span className="text-yellow-400">
                {" "}
                <FaStar />
              </span>{" "}
            </div>
          </div>
          <p className="font-light">{description}</p>
          <div className="flex flex-wrap gap-2">
            <strong>Nearest Destinations:</strong>{" "}
            {nearestDestinations.map((item, index) => {
              return (
                <span
                  className="bg-green-950/60 text-white px-2 py-1 rounded-xl "
                  key={index}
                >
                  {item}
                </span>
              );
            })}
          </div>
          <div className="flex gap-2 flex-wrap">
            {facilities.map((item, index) => {
              return (
                <span
                  className="text-sm bg-slate-200 px-2 py-1 rounded-xl"
                  key={index}
                >
                  {item}
                </span>
              );
            })}
          </div>
          <p className="text-gray-600">{packageDetails}</p>
          <div>
            <p className="font-bold text-green-900">
              ${price}/- <strike className="text-red-600 ml-2">$1800/-</strike>
            </p>
            <p className="text-lg font-semibold">Starts From {startDate} To {endDate}</p>
            <button className="bg-orange-500 hover:bg-orange-600 px-2 rounded-lg my-4 py-2 font-semibold text-white" onClick={()=>{navigate("/booking",{state:data})}}>
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold">Similar Packages</h2>
        here more related cards
      </div>
      <TestimonialCarousel />
    </div>
  );
};

export default OfferDetail;
