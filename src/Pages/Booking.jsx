import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useLocation } from "react-router";
import SuccessModal from "../Components/BookingSuccessfull.jsx"

const Booking = () => {
  const [showModal,setShowModal]=useState(false);
  const Location = useLocation();
  const data = Location.state?.data;

  const handlePayment = (event) => {
    event.preventDefault();
    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag",
      amount: 50000, // in paise (₹500)
      currency: "INR",
      name: "My Website",
      description: "Test Payment",
      handler: function (response) {
        console.log("Payment Success:", response);
        setShowModal(true);
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      },
      prefill: {
        name: "Anshu",
        email: "anshu@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
console.log(data);
  const { placeName, location, averageRating, date, price, image } = data;
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Confirm Your Booking
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 👉 Left Side — Tour Details */}
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <img
            src={image}
            alt=""
            className="w-full h-60 object-cover rounded"
          />

          <h3 className="text-xl font-semibold mt-4">{placeName}</h3>
          <span className="flex gap-4 items-center ">
            <h3 className="text-lg font-normal "> {location}</h3>
            <span className="flex items-center gap-1 text-yellow-500">
              <h3 className="text-lg text-green-900 font-bold">
                {averageRating}
              </h3>
              <FaStar />
            </span>
          </span>
          <p className="text-gray-600">₹{price}/ Person</p>
          <p className="mt-2 text-green-600 font-bold">{date}</p>
        </div>

        {/* 👉 Right Side — Booking Form */}
        <form className="space-y-4 bg-white p-4 rounded shadow-md"           
         onSubmit={handlePayment}>
          <input
            name="fullName"
            placeholder="Full Name"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="people"
            type="number"
            placeholder="Number of People"
            min="1"
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="address"
            placeholder="Address"
            required
            className="w-full p-2 border rounded"
          ></textarea>
          <textarea
            name="notes"
            placeholder="Special Notes (optional)"
            className="w-full p-2 border rounded"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
 
          >
            Confirm Booking
          </button>
           {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
        </form>
      </div>
    </div>

    // <div className="w-[90%]  mx-auto my-8 ">
    //   <h4 className="text-center text-orange-600 text-2xl font-semibold my-8 underline">
    //     Ordering Trip to Place
    //   </h4>
    //   <div className="flex w-full justify-around  ">
    //     <div className="w-[35%] ">
    //       <div className="rounded-xl  bg-slate-300 ">
    //         <h4 className="bg-[#517357] rounded-xl px-4 py-4 font-semibold text-white">
    //           1.Guest Info
    //         </h4>
    //         <form action="" className="w-full space-y-4 py-8 px-8">
    //           <p className="font-semibold">Guest 1</p>
    //           <input
    //             type="text"
    //             placeholder="Full Name "
    //             className="px-4 py-2 text-green-950 bg-white rounded-2xl w-full outline-none"
    //           />
    //           <input
    //             type="date"
    //             placeholder="Date Of Birth "
    //             className="px-4 py-2 text-green-950 bg-white rounded-2xl w-1/2 outline-none"
    //           />
    //           <p className="font-semibold">Guest 2</p>
    //           <input
    //             type="text"
    //             placeholder="Full Name "
    //             className="px-4 py-2 rounded-2xl w-full text-green-950 bg-white outline-none"
    //           />
    //           <input
    //             type="date"
    //             placeholder="Date Of Birth "
    //             className="px-4 py-2 rounded-2xl  text-green-950 bg-white w-1/2 outline-none"
    //           />
    //         </form>
    //       </div>

    //       {/* biling info */}
    //       <div className="rounded-xl my-4 bg-slate-300">
    //         <h4 className="bg-[#517357] px-4 rounded-xl py-4 text-white font-semibold">
    //           2.Billing Info
    //         </h4>
    //         <form action="" className="w-full py-8 px-8 space-y-4">
    //           <input
    //             type="text"
    //             placeholder="Address Info "
    //             className="px-4 py-2  text-green-950 bg-white rounded-2xl w-full outline-none"
    //           />
    //           <div className="flex gap-2">
    //             <input
    //               type="text"
    //               placeholder="Post Code"
    //               className="px-4  text-green-950 bg-white py-2 rounded-2xl w-2/3 outline-none"
    //             />{" "}
    //             <input
    //               type="text"
    //               placeholder="City"
    //               className="px-4 py-2  text-green-950 bg-white rounded-2xl w-2/3 outline-none"
    //             />
    //           </div>
    //         </form>
    //       </div>
    //       <div className="rounded-xl  bg-slate-300">
    //         <h4 className="bg-[#517357] text-white font-semibold rounded-xl px-4 py-4">
    //           3.Contact Info
    //         </h4>
    //         <form action="" className="w-full px-8 py-8 space-y-4">
    //           <input
    //             type="email"
    //             placeholder="Email Address "
    //             className="px-4 py-2 rounded-2xl w-full  text-green-950 bg-white outline-none"
    //           />
    //           <div className="flex gap-2 w-full">
    //             <input
    //               type="text"
    //               placeholder="Country Code"
    //               className="px-4 py-2 rounded-2xl w-[20%] text-green-950 bg-white  outline-none"
    //             />

    //             <input
    //               type="text"
    //               placeholder="Phone Number"
    //               className="px-4 py-2 rounded-2xl  text-green-950 bg-white w-[80%] outline-none"
    //             />
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //     <BillSection  data={data}/>
    //   </div>
    // </div>
  );
};

export default Booking;
