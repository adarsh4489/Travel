import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import SuccessModal from "../Components/BookingSuccessfull.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

const Booking = () => {
  const [showModal, setShowModal] = useState(false);
  const [transaction, setTransaction] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  // ✅ Agar data missing hai
  if (!data) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center space-y-4">
        <h2 className="text-2xl font-bold">No booking details found</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
        >
          ⬅ Go Back
        </button>
      </div>
    );
  }

  const { placeName, location: placeLocation, averageRating, date, price, image } = data;

  // ✅ Payment integration
  const handlePayment = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const fullName = form.get("fullName");
    const email = form.get("email");
    const phone = form.get("phone");
    const people = Number(form.get("people") || 1);

    // amount calculate
    const amountRupees = Number(price) * people;
    const amountPaise = Math.max(1, Math.round(amountRupees * 100));

    if (!window.Razorpay) {
      toast.error("Razorpay SDK not loaded. Please refresh and try again.");
      return;
    }

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag",
      amount: amountPaise,
      currency: "INR",
      name: "Travelly",
      description: `Booking: ${placeName}`,
      handler: function (response) {
        // ✅ Payment ke turant baad modal open
        setTransaction({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id || "N/A",
          amount: amountRupees,
          people,
          placeName,
        });
        setShowModal(true);
      },
      prefill: {
        name: String(fullName || ""),
        email: String(email || ""),
        contact: String(phone || ""),
      },
      theme: { color: "#f97316" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-6xl mx-auto p-6 relative">
      {/* Blur background when modal is open */}
      <div className={showModal ? "blur-sm pointer-events-none select-none" : ""}>
        <h2
          className="text-3xl font-bold mb-6 text-center text-orange-600 underline"
          data-aos="fade-down"
        >
          Confirm Your Booking
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div
            className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition"
            data-aos="fade-right"
          >
            <img
              src={image}
              alt={placeName}
              className="w-full h-64 object-cover rounded-xl"
            />

            <h3 className="text-2xl font-bold mt-4 text-green-900">{placeName}</h3>

            <div className="flex gap-4 items-center mt-2">
              <p className="text-lg font-medium text-gray-600">{placeLocation}</p>
              <span className="flex items-center gap-1 text-yellow-500">
                <span className="text-lg text-green-900 font-bold">{averageRating}</span>
                <FaStar />
              </span>
            </div>

            <p className="text-gray-700 mt-1">₹{price} / Person</p>
            <p className="mt-2 text-green-600 font-bold">{date}</p>

            <button
              onClick={() => navigate(-1)}
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
               Go Back
            </button>
          </div>

          <form
            onSubmit={handlePayment}
            className="space-y-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Enter Your Details</h3>

            <input
              name="fullName"
              placeholder="Full Name"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <input
              name="people"
              type="number"
              placeholder="Number of People"
              min="1"
              defaultValue={1}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <textarea
              name="address"
              placeholder="Address"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <textarea
              name="notes"
              placeholder="Special Notes (optional)"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
               Confirm Booking & Pay
            </button>
          </form>
        </div>
      </div>

     
      {showModal && (
        <SuccessModal
          transaction={transaction}
          onClose={() => {
            setShowModal(false);
            navigate("/"); // OK click → Home
          }}
        />
      )}
    </div>
  );
};

export default Booking;
