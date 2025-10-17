import React from "react";


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
      <section className="min-h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 ">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center space-y-6 text-white p-6">
            <h1 className="text-5xl lg:text-4xl font-bold leading-tight">
              Precision Auto Parts Engineered for Excellence
            </h1>

            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>ISO 9001:2008 Certified Manufacturing Facility</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>High-Quality Materials for Durable Auto Components</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>On-Time Delivery for All Automotive Orders</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Competitive Pricing Without Compromising Quality</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Customer-Focused Approach for Tailored Solutions</span>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>
                  Custom Auto Parts Designed to Meet Specific Vehicle
                  Requirements
                </span>
              </li>
            </ul>
          </div>
          {/* Right Image Section */}
          <div className="flex  bg-gradient-to-br from-gray-400 to-gray-500 h-[80vh]">
            <img
              src="https://img.freepik.com/premium-photo/composition-new-bolts-nuts-different-sizes-gray-background_268192-4291.jpg"
              className="object-cover"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
}
