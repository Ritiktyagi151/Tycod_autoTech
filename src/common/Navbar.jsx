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

  // Effect to handle navbar style changes on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --- MODIFIED LOGIC ---
  // Now, the background becomes more opaque on scroll but stays dark.
  const navBg = scrolled
    ? "bg-black/80 shadow-md"
    : "bg-black/20";
    
  // Since the background is always dark, the text should always be white.
  const navText = "text-white";
  const inputText = "text-white placeholder-gray-300";
  const borderColor = "border-gray-100";
  // --- END OF MODIFICATIONS ---

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
      <nav
        // The navBg variable now controls the background completely.
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-[2px] transition-all duration-300 ${navBg} ${navText}`}
      >
        {/* Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo with hover effect */}
          <Link
            to="/"
            className="flex items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              className="h-10 sm:h-12 w-32"
              src="/assets/image/logo/logo1.png" // Ensure this path is correct
              alt="Logo"
            />
          </Link>

          {/* Desktop Menu with animated underline on hover */}
          <ul className="hidden lg:flex items-center space-x-6 font-semibold text-sm xl:text-base">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative group transition-colors duration-200 hover:text-[#BB0F02]"
              >
                <Link to={item.path} className="block py-2">
                  {item.name}
                </Link>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#BB0F02] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </li>
            ))}
          </ul>

          {/* Desktop Search + Button with hover effects */}
          <div className="hidden lg:flex items-center space-x-3">
            <div
              className={`flex items-center border rounded-full px-3 py-2 w-44 xl:w-60 ${borderColor} transition-all duration-300 focus-within:ring-2 focus-within:ring-[#BB0F02] focus-within:ring-offset-2 focus-within:ring-offset-transparent`}
            >
              <SearchIcon color="white" />
              <input
                type="text"
                placeholder="Search products..."
                className={`ml-2 w-full bg-transparent outline-none text-sm ${inputText}`}
              />
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#BB0F02] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#a10c00] transition-all shadow-md text-sm xl:text-base transform hover:scale-105 hover:shadow-lg"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Animated Toggle Button */}
          <button
            className="lg:hidden flex flex-col h-6 w-6 justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`h-0.5 w-6 my-1 rounded-full bg-current ${navText} transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`h-0.5 w-6 my-1 rounded-full bg-current ${navText} transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-0.5 w-6 my-1 rounded-full bg-current ${navText} transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu with slide-down animation */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          } bg-black/90 text-gray-100`}
        >
          <ul className="flex flex-col px-6 pt-4 space-y-4 font-medium">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full hover:text-[#BB0F02] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Search */}
          <div
            className={`flex items-center border mx-6 my-4 rounded-full px-4 py-2 ${borderColor}`}
          >
            <SearchIcon color="white" />
            <input
              type="text"
              placeholder="Search products..."
              className={`ml-2 w-full bg-transparent outline-none text-sm ${inputText}`}
            />
          </div>

          {/* Mobile Button */}
          <div className="px-6 pb-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#BB0F02] text-white w-full py-2 rounded-lg font-medium hover:bg-[#a10c00] transition-all transform hover:scale-105"
            >
              Get a Quote
            </button>
          </div>
        </div>
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