import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled ? "bg-white shadow-md" : "bg-transparent";
  const navText = scrolled ? "text-black" : "text-gray-100";
  const inputText = scrolled
    ? "text-black placeholder-gray-500"
    : "text-white placeholder-white";
  const borderColor = scrolled ? "border-gray-300" : "border-gray-100";

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Product", path: "/product" },
    { name: "Industries", path: "/industries" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg} ${navText}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/">
            <img
              className="h-10 w-28"
              src="/assets/image/logo/logo1.png"
              alt="Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 font-semibold">
            {menuItems.map((item) => (
              <li key={item.name} className={`hover:text-[#BB0F02] cursor-pointer`}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>

          {/* Search + Button */}
          <div className="hidden md:flex items-center space-x-3">
            <div
              className={`flex items-center border rounded-full px-4 py-2 w-60 ${borderColor}`}
            >
              <SearchIcon color={scrolled ? "black" : "white"} />
              <input
                type="text"
                placeholder="Search products..."
                className={`ml-2 w-full bg-transparent outline-none text-sm ${inputText}`}
              />
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#BB0F02] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#a10c00] transition-all shadow-md"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 ${navText} bg-current`}></span>
            <span className={`w-6 h-0.5 ${navText} bg-current`}></span>
            <span className={`w-6 h-0.5 ${navText} bg-current`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul
            className={`md:hidden flex flex-col px-6 py-4 space-y-4 font-semibold transition-colors duration-300 ${
              scrolled ? "bg-white text-black" : "bg-gray-800 text-gray-100"
            }`}
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
            <div className={`flex items-center border rounded-full px-4 py-2 ${borderColor}`}>
              <SearchIcon color={scrolled ? "black" : "white"} />
              <input
                type="text"
                placeholder="Search products..."
                className={`ml-2 w-full outline-none text-sm ${inputText}`}
              />
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#BB0F02] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#a10c00] transition-all"
            >
              Get a Quote
            </button>
          </ul>
        )}
      </nav>

      {/* ================= MODAL FORM ================= */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background Blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowForm(false)}
          ></div>

          {/* Form Box */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-lg p-8 z-50 animate-fadeIn">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-[#BB0F02] text-xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center text-[#BB0F02]">
              Get a Quote
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#BB0F02]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#BB0F02]"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#BB0F02]"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#BB0F02]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#BB0F02] text-white py-2 rounded-lg font-semibold hover:bg-[#a10c00] transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
