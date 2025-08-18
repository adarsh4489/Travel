import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#142316] text-white pt-12 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">Bhraman</h2>
          <p className="mt-2 text-sm">
            Explore. Dream. Discover. Your journey begins here with
            unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-orange-400">
            Quick Links
          </h3>
          <ul className="space-y-1 text-sm">
            {["Home", "About", "Offers", "Destinations", "Contact"].map(
              (item, index) => (
                <li
                  key={index}
                  className="cursor-pointer transition-all duration-300 hover:text-orange-500 hover:translate-x-2"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Popular Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-orange-400">
            Popular Categories
          </h3>
          <ul className="space-y-1 text-sm">
            {[
              "Beach Gateway",
              "Adventure Trips",
              "Exotic Trips",
              "Hidden Gems",
              "Cultural Trails",
              "Mountain Escapes",
            ].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer transition-all duration-300 hover:text-orange-500 hover:translate-x-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-orange-400">
            Newsletter
          </h3>
          <p className="text-sm mb-3">
            Subscribe to get the latest deals and destinations straight to your
            inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-full bg-white text-green-950 outline-none text-sm focus:ring-2 focus:ring-orange-500 transition"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-full text-white text-sm font-semibold transition-transform duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-800 my-6"></div>

      {/* Bottom Info */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2 px-2">
        <p>&copy; {new Date().getFullYear()} WanderWise. All rights reserved.</p>
        <div className="flex gap-4 text-lg">
          {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
            (Icon, index) => (
              <Icon
                key={index}
                className="hover:text-white cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            )
          )}
        </div>
        <p className="italic">
          Built by Adarsh Kumar Mishra – for learning purposes only.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
