import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const BookingSuccessfull = ({ transaction, onClose }) => {
  if (!transaction) return null; // agar transaction data nahi hai toh modal hi na dikhe

  const amountInRupees = (transaction.amount || 0) / 100; // Razorpay paise ko ₹ me convert

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Dark background */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Modal Box */}
      <div className="relative w-[90%] lg:w-1/2 bg-white rounded-2xl shadow-2xl p-6 text-center">
        {/* Icon */}
        <div className="flex justify-center text-5xl text-green-600">
          <IoMdCheckmarkCircleOutline />
        </div>

        {/* Heading */}
        <h2 className="mt-2 text-2xl font-bold text-green-700">
          Yay! Booking Confirmed 🎉
        </h2>

        {/* Message */}
        <p className="mt-3 text-gray-700">
          Thank you for confirming your booking. <br />
          We will get back to you soon.
        </p>

        {/* Transaction Details */}
        <div className="mt-4 space-y-1 text-sm text-gray-600 text-left">
          <p>
            <span className="font-semibold">Transaction ID:</span>{" "}
            {transaction.razorpay_payment_id || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Order ID:</span>{" "}
            {transaction.razorpay_order_id || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Amount Paid:</span> ₹{amountInRupees}
          </p>
          {transaction.placeName && (
            <p>
              <span className="font-semibold">Package:</span>{" "}
              {transaction.placeName}
            </p>
          )}
          {transaction.people && (
            <p>
              <span className="font-semibold">Travellers:</span>{" "}
              {transaction.people}
            </p>
          )}
        </div>

        {/* Screenshot Note */}
        <p className="mt-3 text-red-500 text-sm">
          ⚠️ Please take a screenshot of this screen for future reference.
        </p>

        {/* OK Button */}
        <button
          onClick={onClose}
          className="mt-5 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default BookingSuccessfull;
