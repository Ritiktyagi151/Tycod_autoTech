import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* ---------------- BANNER SECTION ---------------- */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80"
          alt="Contact Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center tracking-wide">
            Contact Us
          </h1>
        </div>
      </div>

      {/* ---------------- CONTACT FORM SECTION ---------------- */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-1 xl:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone No
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        placeholder="Enter your number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        placeholder="Tell us how we can help you..."
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-indigo-700 py-10 px-6 sm:px-10 lg:col-span-1 xl:p-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <p className="mt-6 text-lg text-indigo-200 max-w-3xl">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>

                <dl className="mt-8 space-y-6">
                  <div className="flex">
                    <dt className="flex-shrink-0">
                      <span className="sr-only">Address</span>
                      <svg
                        className="h-6 w-6 text-indigo-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </dt>
                    <dd className="ml-3 text-base text-indigo-200">
                      <p>Plot No-34, Sector -11</p>
                      <p>Sidcul, Rudrapur, Udham Singh Nagar</p>
                    </dd>
                  </div>

                  <div className="flex">
                    <dt className="flex-shrink-0">
                      <span className="sr-only">Phone</span>
                      <svg
                        className="h-6 w-6 text-indigo-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </dt>
                    <dd className="ml-3 text-base text-indigo-200">
                      <p>+91 99906 98236</p>
                    </dd>
                  </div>

                  <div className="flex">
                    <dt className="flex-shrink-0">
                      <span className="sr-only">Email</span>
                      <svg
                        className="h-6 w-6 text-indigo-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </dt>
                    <dd className="ml-3 text-base text-indigo-200">
                      <p>daksh@tycod.in</p>
                    </dd>
                  </div>
                </dl>

                <div className="mt-12 flex space-x-6 flex-wrap">
                  {/* Facebook */}
                  <a
                    href="#"
                    className="text-indigo-200 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    className="text-indigo-200 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.25 6a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a
                    href="#"
                    className="text-indigo-200 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19.633 7.997c.013.176.013.352.013.529 0 5.39-4.102 11.606-11.606 11.606-2.31 0-4.462-.676-6.273-1.84a8.214 8.214 0 0 0 6.077-1.696 4.108 4.108 0 0 1-3.833-2.85c.253.037.506.05.772.05.374 0 .747-.05 1.095-.137a4.103 4.103 0 0 1-3.29-4.027v-.05a4.136 4.136 0 0 0 1.853.52A4.102 4.102 0 0 1 3.112 6.64a11.648 11.648 0 0 0 8.457 4.29 4.63 4.63 0 0 1-.101-.94 4.1 4.1 0 0 1 7.098-2.802 8.093 8.093 0 0 0 2.605-.996 4.093 4.093 0 0 1-1.804 2.27 8.19 8.19 0 0 0 2.361-.64 8.786 8.786 0 0 1-2.095 2.375Z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="#"
                    className="text-indigo-200 hover:text-white transition-colors"
                  >
                    <span className="sr-only">WhatsApp</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12.04 2c5.52 0 10 4.48 10 10 0 1.79-.47 3.53-1.36 5.06L22 22l-5.06-1.32A9.9 9.9 0 0 1 12 22C6.48 22 2 17.52 2 12S6.48 2 12.04 2Zm0 1.8A8.2 8.2 0 0 0 3.8 12c0 1.62.48 3.16 1.4 4.5l-.9 3.3 3.38-.88A8.16 8.16 0 0 0 12 20.2a8.2 8.2 0 0 0 8.2-8.2c0-4.54-3.66-8.2-8.16-8.2Zm-2.16 4.8h.33c.27 0 .52.17.64.43l.47 1.1a.69.69 0 0 1-.07.66l-.48.68a6.47 6.47 0 0 0 3.1 3.1l.68-.48c.2-.13.46-.14.66-.07l1.1.47c.26.12.43.37.43.64v.33c0 .37-.3.67-.67.67h-.06c-1.18 0-2.35-.3-3.39-.87a8.7 8.7 0 0 1-3.19-3.19 7.43 7.43 0 0 1-.87-3.39c0-.37.3-.67.67-.67Z" />
                    </svg>
                  </a>

                  {/* Google Map */}
                  <div className="pt-12 rounded-lg shadow-lg w-full lg:w-[650px] xl:w-[750px]">
                    <iframe
                      title="Google Map - Tycod Location"
                      src="https://www.google.com/maps?q=Plot+No-34,+Sector-11,+Sidcul,+Rudrapur,+Udham+Singh+Nagar&output=embed"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
