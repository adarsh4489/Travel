import React from "react";
import { tripData } from "../Utils/constants";
import TripCard from "../Components/TripCard";
import { Link } from "react-router";

const Deals = () => {
  return (
    <div className="my-4 ">
      <div className="w-full flex justify-center items-center gap-12 my-8 px-4">
        <span className="bg-slate-200 rounded-full px-4 py-2 ">
          <select name="" id="" className="outline-none">
            <option className="" value="Dates">
              Date
            </option>
            <option value="Dates">1-3</option>
            <option value="Dates">4-7</option>
            <option value="Dates">8-11</option>
          </select>
        </span>

        <span className="bg-slate-200 rounded-full px-4 py-2 ">
          <select name="" id="" className="outline-none">
            <option value="Guests">Guests</option>
            <option value="Dates">1</option>
            <option value="Dates">2</option>
            <option value="Dates">3</option>
          </select>
        </span>

        <span className="bg-slate-200 rounded-full px-4 py-2 ">
          <select name="" id="" className="outline-none">
            <option value="Dates">Location</option>
            <option value="Dates">1-3</option>
            <option value="Dates">4-7</option>
            <option value="Dates">8-11</option>
          </select>
        </span>

        <span className="bg-slate-200 rounded-full px-4 py-2 ">
          <select name="" id="" className="outline-none ">
            <option value="Dates">Transfer Type</option>
            <option value="Dates">1-3</option>
            <option value="Dates">4-7</option>
            <option value="Dates">8-11</option>
          </select>
        </span>

        <span className="bg-slate-200 rounded-full px-4 py-2 ">
          <select name="" id="" className="outline-none">
            <option value="Dates">Price</option>
            <option value="Dates">1-3</option>
            <option value="Dates">4-7</option>
            <option value="Dates">8-11</option>
          </select>
        </span>
      </div>
      <div className=" px-8">
        <h5 className="text-lg font-bold my-8">150 Trips Available</h5>
        <div className="flex w-[90%]  my-4 justify-evenly mx-auto flex-wrap gap-4">
          {tripData.map((data) => {
          return<Link to={`/deals/${data.id}`}  key={data.id} ><TripCard data={data} /></Link>;
          })}
        </div>
        <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 block mx-auto rounded-full text-white font-semibold ">Load More</button>
      </div>
    </div>
  );
};

export default Deals;
