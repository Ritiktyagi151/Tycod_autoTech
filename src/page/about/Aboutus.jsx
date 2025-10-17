import React from "react";

// Sample images (replace with your own URLs)
const bannerImage = "https://via.placeholder.com/1500x500";

export default function AboutPageimport React from "react";

// Sample images (replace with your own URLs)
const bannerImage = "https://via.placeholder.com/1500x500";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* ---------------- ABOUT US SECTION ---------------- */}
      <section className="w-full">
        {/* Banner */}
        <div className="relative">
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              About Us
            </h1>
          </div>
        </div>

        {/* About Us Content */}
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Image */}
          <div className="md:w-1/2">
            <img
              src="https://cpimg.tistatic.com/07052225/b/4/Two-Wheeler-Parts.jpg"
              alt="About Us"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              Tycod Autotech was established in 2021, building upon the strong
              legacy of the KU brand, which was acquired by Tycod. KU has been a
              well-recognized name in the field of high-pressure die casting and
              precision machining since 1984. Over the decades, KU has earned
              the trust of major OEMs such as Tata Motors, Honda (HSMI), Maruti
              Suzuki, Hero MotoCorp, and several others, consistently delivering
              high-quality aluminium components. With the formation of Tycod
              Autotech, the company continues this legacy while embracing modern
              engineering practices and innovative manufacturing solutions. Our
              goal is to provide cutting-edge automotive components that meet
              global standards of performance and reliability. By combining
              decades of expertise with a forward-looking approach, Tycod
              Autotech strives to be a preferred partner for OEMs worldwide,
              focusing on quality, efficiency, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- VISION MISSION & VALUES ---------------- */}
      <div className="text-center bg-white mb-4">
        <h1 className="text-5xl md:text-3xl font-bold text-gray-800">
          VISION MISSION & <span className="text-[#B00500]">VALUES</span>
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Our Vision */}
        <div className="bg-[#B00500] text-white p-4 flex flex-col justify-center min-h-[150px]">
          <h2 className="text-2xl font-bold mb-4">OUR VISION</h2>
          <p className="text-base leading-relaxed">
            " World Class Engineering Corporation that maximizes stake holders'
            value"
          </p>
        </div>

        {/* Center Image */}
        <div className="bg-gray-300 min-h-[150px] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop"
            alt="Industrial Facility"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Our Mission */}
        <div className="bg-[#B00500] text-white p-4 flex flex-col justify-center min-h-[150px]">
          <h2 className="text-2xl font-bold mb-4">OUR MISSION</h2>
          <p className="text-base leading-relaxed">
            " Building an employee driven and socially responsible global
            engineering corporation using innovative methods and efficient
            management for lasting customer loyalty "
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Left Image */}
        <div className="bg-gray-300 min-h-[150px] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop"
            alt="Factory Interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Values Content */}
        <div className="bg-[#B00500] text-white p-8 flex flex-col justify-center min-h-[200px]">
          <h2 className="text-2xl font-bold mb-6">OUR VALUES</h2>
          <ul className="space-y-3 text-base">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Customer Centric</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Respect for individuals & Trust in Relationship</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Accountability to Stakeholders</span>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="bg-gray-300 min-h-[200px] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop"
            alt="Manufacturing Equipment"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ---------------- COMPETITIVE BENCHMARK SECTION ---------------- */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center space-y-8 text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              The Competitive Benchmark Of Our Perseverance
            </h1>

            <ul className="space-y-6 text-lg">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Accreditation of ISO 9001:2008 Certificate</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Premium Quality Raw Materials for Fabrication</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Abiding By Timely Delivery</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Standard Competitive Pricing</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Customer-centric Approach</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Custom-designed Industrial Components as per Customer Specifications</span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="flex items-center justify-center bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg p-8 lg:p-12">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Nuts and Washers Stack */}
              <div className="relative">
                {/* Top Small Nut */}
                <div className="absolute -top-16 right-8 w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg transform rotate-12 shadow-2xl">
                  <div className="absolute inset-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                </div>

                {/* Middle Small Nut */}
                <div className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg transform -rotate-6 shadow-2xl">
                  <div className="absolute inset-2.5 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                </div>

                {/* Large Center Washer */}
                <div className="w-48 h-48 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-full shadow-2xl relative">
                  <div className="absolute inset-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-inner"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-600 to-transparent opacity-30 rounded-full"></div>
                </div>

                {/* Bottom Left Small Nut */}
                <div className="absolute bottom-4 -left-12 w-14 h-14 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg transform rotate-45 shadow-2xl">
                  <div className="absolute inset-2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                </div>

                {/* Medium Right Washer */}
                <div className="absolute bottom-8 right-12 w-28 h-28 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-2xl">
                  <div className="absolute inset-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-inner"></div>
                </div>

                {/* Small Bottom Washers */}
                <div className="absolute -bottom-8 right-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-xl">
                  <div className="absolute inset-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                </div>

                <div className="absolute -bottom-6 right-12 w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-xl">
                  <div className="absolute inset-2.5 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* ---------------- ABOUT US SECTION ---------------- */}
      <section className="w-full">
        {/* Banner */}
        <div className="relative">
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              About Us
            </h1>
          </div>
        </div>

        {/* About Us Content */}
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Image */}
          <div className="md:w-1/2">
            <img
              src="https://cpimg.tistatic.com/07052225/b/4/Two-Wheeler-Parts.jpg"
              alt="About Us"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              Tycod Autotech was established in 2021, building upon the strong
              legacy of the KU brand, which was acquired by Tycod. KU has been a
              well-recognized name in the field of high-pressure die casting and
              precision machining since 1984. Over the decades, KU has earned
              the trust of major OEMs such as Tata Motors, Honda (HSMI), Maruti
              Suzuki, Hero MotoCorp, and several others, consistently delivering
              high-quality aluminium components. With the formation of Tycod
              Autotech, the company continues this legacy while embracing modern
              engineering practices and innovative manufacturing solutions. Our
              goal is to provide cutting-edge automotive components that meet
              global standards of performance and reliability. By combining
              decades of expertise with a forward-looking approach, Tycod
              Autotech strives to be a preferred partner for OEMs worldwide,
              focusing on quality, efficiency, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- VISION MISSION & VALUES ---------------- */}
      <div className="text-center bg-white mb-4">
        <h1 className="text-5xl md:text-3xl font-bold text-gray-800">
          VISION MISSION & <span className="text-[#B00500]">VALUES</span>
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Our Vision */}
        <div className="bg-[#B00500] text-white p-4 flex flex-col justify-center min-h-[150px]">
          <h2 className="text-2xl font-bold mb-4">OUR VISION</h2>
          <p className="text-base leading-relaxed">
            " World Class Engineering Corporation that maximizes stake holders'
            value"
          </p>
        </div>

        {/* Center Image */}
        <div className="bg-gray-300 min-h-[150px] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop"
            alt="Industrial Facility"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Our Mission */}
        <div className="bg-[#B00500] text-white p-4 flex flex-col justify-center min-h-[150px]">
          <h2 className="text-2xl font-bold mb-4">OUR MISSION</h2>
          <p className="text-base leading-relaxed">
            " Building an employee driven and socially responsible global
            engineering corporation using innovative methods and efficient
            management for lasting customer loyalty "
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Left Image */}
        <div className="bg-gray-300 min-h-[150px] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop"
            alt="Factory Interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Values Content */}
        <div className="bg-[#B00500] text-white p-8 flex flex-col justify-center min-h-[200px]">
          <h2 className="text-2xl font-bold mb-6">OUR VALUES</h2>
          <ul className="space-y-3 text-base">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Customer Centric</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Respect for individuals & Trust in Relationship</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Accountability to Stakeholders</span>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="bg-gray-300 min-h-[200px] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop"
            alt="Manufacturing Equipment"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ---------------- COMPETITIVE BENCHMARK SECTION ---------------- */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center space-y-8 text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              The Competitive Benchmark Of Our Perseverance
            </h1>

            <ul className="space-y-6 text-lg">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Accreditation of ISO 9001:2008 Certificate</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Premium Quality Raw Materials for Fabrication</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Abiding By Timely Delivery</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Standard Competitive Pricing</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Customer-centric Approach</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Custom-designed Industrial Components as per Customer Specifications</span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="flex items-center justify-center bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg p-8 lg:p-12">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Nuts and Washers Stack */}
              <div className="relative">
                {/* Top Small Nut */}
                <div className="absolute -top-16 right-8 w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg transform rotate-12 shadow-2xl">
                  <div className="absolute inset-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                </div>

                {/* Middle Small Nut */}
                <div className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg transform -rotate-6 shadow-2xl">
                  <div className="absolute inset-2.5 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                </div>

                {/* Large Center Washer */}
                <div className="w-48 h-48 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-full shadow-2xl relative">
                  <div className="absolute inset-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-inner"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-600 to-transparent opacity-30 rounded-full"></div>
                </div>

                {/* Bottom Left Small Nut */}
                <div className="absolute bottom-4 -left-12 w-14 h-14 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg transform rotate-45 shadow-2xl">
                  <div className="absolute inset-2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                </div>

                {/* Medium Right Washer */}
                <div className="absolute bottom-8 right-12 w-28 h-28 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-2xl">
                  <div className="absolute inset-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-inner"></div>
                </div>

                {/* Small Bottom Washers */}
                <div className="absolute -bottom-8 right-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-xl">
                  <div className="absolute inset-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                </div>

                <div className="absolute -bottom-6 right-12 w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-xl">
                  <div className="absolute inset-2.5 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
