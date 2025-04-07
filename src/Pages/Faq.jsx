import React from "react";
import { bookingAccordianData, covidAccordianData } from "../Utils/constants";
import Accordian from "../Components/Accordian";
import { paymentAccordianData } from "../Utils/constants";

const Faq = () => {
  return (
    <div className=" w-[80%] my-8 mx-auto space-y-8">
      <div className="">
        <h2 className="text-2xl font-semibold">Bookings</h2>
        {bookingAccordianData.map((data) => {
          return <Accordian data={data} />;
        })}
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold">Payments</h2>
        {paymentAccordianData.map((data) => {
          return <Accordian data={data} />;
        })}
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold">Covid</h2>
        {covidAccordianData.map((data) => {
          return <Accordian data={data} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
