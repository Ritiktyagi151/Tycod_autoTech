import React from 'react';

const Footer = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden  pt-10 ">
      <div className="absolute top-0 w-full">
        <svg className="w-full h-10 rotate-180" viewBox="0 0 240 24" preserveAspectRatio="none">
          <path fill="#fff" d="M119.849,0C47.861,0,0,24,0,24h240C240,24,191.855,0.021,119.849,0z"></path>
        </svg>
      </div>

      <div className="mx-auto sm:px-6 lg:px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 pt-10">
          {/* Quick Links */}
          <div className="mt-3">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
              <img
                src="/assets/image/logo/logo1.png"
                alt="logo"
                loading="lazy"
                width="60"
                height="60"
                className="w-20 h-10"
                style={{ color: 'transparent' }}
              />
            </h3>
            <p className="text-sm sm:text-base mb-3 sm:mb-4">
          Tycod Autotech was established in 2021. Earlier known as brand KU has been acquired by Tycod. KU brand is well established in the field of high-pressure die casting and machining since 1984. KU was supplying many aluminium components to major O.E.Ms like Tata Motors, Honda(HSMI), Maruti, Hero MotoCorp and many more.

            </p>
            <a
              href="about"
              className="inline-flex items-center text-sm sm:text-base text-[#B80600] hover:text-[#B80600] transition-colors font-medium group"
            >
              Read more
              <svg
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>

            {/* Social Links */}
            <div className="mt-5 sm:mt-6">
              <h4 className="font-semibold text-gray-200 mb-2 sm:mb-3 text-sm sm:text-base">Follow Us</h4>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="https://www.facebook.com/polypackenterpriseofficial/"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#B80600] transition-colors group"
                >
                  <svg
                    className="w-4 h-4 text-gray-300 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/polypackenterprise/"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#B80600] transition-colors group"
                >
                  <svg
                    className="w-4 h-4 text-gray-300 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/polypack-enterprises/"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#B80600] transition-colors group"
                >
                  <svg
                    className="w-4 h-4 text-gray-300 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 19H5V9h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75S5.53 4.22 6.5 4.22 8.25 5 8.25 5.97s-.78 1.75-1.75 1.75zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V19h-3V9h2.89v1.37h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.63V19z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Link */}
          <div className="mt-3">
            <h3 className="text-xl font-bold mb-4 sm:text-3xl text-white sm:mb-7 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-[#B80600]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              Quick link
            </h3>
            <ul className="space-y-2 text-sm flex flex-col gap-4">
              {['About Us', 'Blogs', 'Gallery', 'Contact Us'].map((item, index) => (
                <li key={index} className="border-b border-gray-500 group overflow-hidden">
                  <a
                    href={item.toLowerCase().replace(' ', '')}
                    className="text-[18px] text-white flex items-center hover:text-[#B80600] transition-all duration-300 ease-in-out"
                  >
                    <span className="absolute opacity-0 transform -translate-x-4.5 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      ➤
                    </span>
                    <span className="pl-0 group-hover:pl-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="mt-3">
            <h3 className="text-xl font-bold mb-4 sm:text-3xl text-white sm:mb-7 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-[#B80600]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              Our Products
            </h3>
            <ul className="space-y-2 text-sm flex flex-col gap-2">
              {[
                'Red Hero Honda',
                'Activa 6G',
                'Rbd Activa New Model',
                'Fbd Hero Honda ',
                'Scooty Pep',
                'Rbd Yamaha',
                'Fbd Yamaha',
                'Fbd Super Splender',
              ].map((item, index) => (
                <li key={index} className="border-b border-gray-500 group overflow-hidden">
                  <a
                    href={item.toLowerCase().replace(/\s+/g, '-')}
                    className="text-[18px] text-white flex items-center hover:text-[#B80600] transition-all duration-300 ease-in-out"
                  >
                    <span className="absolute opacity-0 transform -translate-x-4.5 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      ➤
                    </span>
                    <span className="pl-0 group-hover:pl-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-3">
            <h3 className="text-3xl font-semibold mb-7">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              {/* Phone Number Section */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 pt-1">
                  <svg
                    className="w-5 h-5 text-[#B80600] group-hover:animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-200 text-sm sm:text-base">Call Us</h4>
                  <p className="mt-1 hover:text-[#B80600] transition-colors text-sm sm:text-base">
                    <a href="tel:+9990698236">+91 9990698236</a>
                  </p>
                  {/* <p className="mt-1 hover:text-[#B80600] transition-colors text-sm sm:text-base">
                    <a href="tel:+919810997795">+91 9810997795</a>
                  </p> */}
                </div>
              </div>

              {/* Email Section */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 pt-1">
                  <svg
                    className="w-5 h-5 text-[#B80600] group-hover:animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-200 text-sm sm:text-base">Email Us</h4>
                  <p className="mt-1 hover:text-[#B80600] transition-colors text-sm sm:text-base">
                    <a href="mailto:daksh@tycod.in ">daksh@tycod.in </a>
                  </p>
                  {/* <p className="mt-1 hover:text-[#B80600] transition-colors text-sm sm:text-base">
                    <a href="mailto:info@polypackenterprises.com"></a>
                  </p> */}
                </div>
              </div>

              {/* Address Section */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 pt-1">
                  <svg
                    className="w-5 h-5 text-[#B80600] group-hover:animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-200 text-sm sm:text-base">Visit Us</h4>
                  <p className="mt-1 text-sm sm:text-base">
                    Plot No-34, Sector -11, Sidcul, Rudrapur, Udham Singh Nagar, 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>© 2025 Tycod Autotech Pvt Ltd. All rights reserved.</p>
          <p>
            © 2025 Designed & Developed By{' '}
            <a href="https://www.jaikviktechnology.com/" target="_blank" className="text-[#B80600] hover:underline">
              Jaikvik Technology India Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;