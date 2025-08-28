import { Link, useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex px-[5%] rounded-md items-center justify-between py-3 shadow-md bg-white relative z-50">
      {/* Logo */}
      <h2
        className="text-3xl font-bold cursor-pointer text-orange-600"
        onClick={() => navigate("/")}
      >
        Bhraman
      </h2>

      {/* Desktop Menu */}
      <ul className="lg:flex gap-6 hidden">
        <Link to="/">
          <li className="cursor-pointer font-semibold hover:underline hover:text-orange-600">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer font-semibold hover:underline hover:text-orange-600">
            About
          </li>
        </Link>
        <Link to="/deals">
          <li className="cursor-pointer font-semibold hover:underline hover:text-orange-600">
            Our Offers
          </li>
        </Link>
        <Link to="/blogs">
          <li className="cursor-pointer font-semibold hover:underline hover:text-orange-600">
            Blogs
          </li>
        </Link>
        <Link to="/faq">
          <li className="cursor-pointer font-semibold hover:underline hover:text-orange-600">
            FAQ
          </li>
        </Link>
      </ul>

      {/* Mobile Hamburger */}
      <div
        className="lg:hidden text-3xl cursor-pointer text-orange-600"
        onClick={() => setIsOpen(true)}
      >
        <IoMenu />
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 text-3xl text-orange-600 cursor-pointer">
          <IoClose onClick={() => setIsOpen(false)} />
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 text-lg font-semibold px-6">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <li className="hover:underline hover:text-orange-600">Home</li>
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            <li className="hover:underline hover:text-orange-600">About</li>
          </Link>
          <Link to="/deals" onClick={() => setIsOpen(false)}>
            <li className="hover:underline hover:text-orange-600">Our Offers</li>
          </Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)}>
            <li className="hover:underline hover:text-orange-600">Blogs</li>
          </Link>
          <Link to="/faq" onClick={() => setIsOpen(false)}>
            <li className="hover:underline hover:text-orange-600">FAQ</li>
          </Link>
        </ul>
      </div>

      {/* Overlay background when menu open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/40  z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
