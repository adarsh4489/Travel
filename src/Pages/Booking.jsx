import React from "react";
import BillSection from "../Components/BillSection";

const Booking = () => {
  return (
    <div className="w-[90%]  mx-auto my-8 ">
      <h4 className="text-center text-orange-600 text-2xl font-semibold my-8 underline">
        Ordering Trip to Place
      </h4>
      <div className="flex w-full justify-around  ">
        <div className="w-[35%] ">
          <div className="rounded-xl  bg-slate-300 ">
            <h4 className="bg-[#517357] rounded-xl px-4 py-4 font-semibold text-white">
              1.Guest Info
            </h4>
            <form action="" className="w-full space-y-4 py-8 px-8">
              <p className="font-semibold">Guest 1</p>
              <input
                type="text"
                placeholder="Full Name "
                className="px-4 py-2 text-green-950 bg-white rounded-2xl w-full outline-none"
              />
              <input
                type="date"
                placeholder="Date Of Birth "
                className="px-4 py-2 text-green-950 bg-white rounded-2xl w-1/2 outline-none"
              />
              <p className="font-semibold">Guest 2</p>
              <input
                type="text"
                placeholder="Full Name "
                className="px-4 py-2 rounded-2xl w-full text-green-950 bg-white outline-none"
              />
              <input
                type="date"
                placeholder="Date Of Birth "
                className="px-4 py-2 rounded-2xl  text-green-950 bg-white w-1/2 outline-none"
              />
            </form>
          </div>

          {/* biling info */}
          <div className="rounded-xl my-4 bg-slate-300">
            <h4 className="bg-[#517357] px-4 rounded-xl py-4 text-white font-semibold">
              2.Billing Info
            </h4>
            <form action="" className="w-full py-8 px-8 space-y-4">
              <input
                type="text"
                placeholder="Address Info "
                className="px-4 py-2  text-green-950 bg-white rounded-2xl w-full outline-none"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Post Code"
                  className="px-4  text-green-950 bg-white py-2 rounded-2xl w-2/3 outline-none"
                />{" "}
                <input
                  type="text"
                  placeholder="City"
                  className="px-4 py-2  text-green-950 bg-white rounded-2xl w-2/3 outline-none"
                />
              </div>
            </form>
          </div>
          <div className="rounded-xl  bg-slate-300">
            <h4 className="bg-[#517357] text-white font-semibold rounded-xl px-4 py-4">
              3.Contact Info
            </h4>
            <form action="" className="w-full px-8 py-8 space-y-4">
              <input
                type="email"
                placeholder="Email Address "
                className="px-4 py-2 rounded-2xl w-full  text-green-950 bg-white outline-none"
              />
              <div className="flex gap-2 w-full">
                <input
                  type="text"
                  placeholder="Country Code"
                  className="px-4 py-2 rounded-2xl w-[20%] text-green-950 bg-white  outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="px-4 py-2 rounded-2xl  text-green-950 bg-white w-[80%] outline-none"
                />
              </div>
            </form>
          </div>
        </div>

        <BillSection />
      </div>
    </div>
  );
};

export default Booking;
