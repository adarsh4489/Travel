import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const BookingSuccessfull = () => {
  return (
    <div className="w-[90%] lg:w-1/2 bg-yellow">
        <h2>Yay! Booking Confirmed</h2>
        <span className="text-green-600">
            <IoMdCheckmarkCircleOutline/>
        </span>

        <p className="text-center">Thank You for Confirming your Booking <br/>
        We will get back to you soon
        </p>

    </div>
  )
}

export default BookingSuccessfull