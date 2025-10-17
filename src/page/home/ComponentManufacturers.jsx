import React from "react";

export default function ComponentManufacturers() {
  return (
    <section className="py-8 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b3358]">
          Built for Component Manufacturers
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Nationwide Distribution: Genuine Parts from Brand to Mechanic, No Investment Required
        </p>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left Side - Problems */}
        <div className="flex flex-col justify-start lg:w-1/4">
          <h3 className="text-2xl font-bold text-[#1b3358] mb-6">The Problem</h3>

          <div className="bg-white shadow-md rounded-2xl p-6 mb-6 border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
                <i className="fa-solid fa-box-open text-gray-500"></i>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Struggle with spurious spare parts which are sold in similar looking packaging
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 mb-6 border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
                <i className="fa-solid fa-globe text-gray-500"></i>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Often lack nationwide distribution or require sizable investment to serve nationwide
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
                <i className="fa-solid fa-network-wired text-gray-500"></i>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                High dependency on the offline distributor network with limited visibility into sales data and insights
              </p>
            </div>
          </div>
        </div>

        {/* Middle - Two Maps Side by Side */}
        <div className="flex flex-row justify-between items-center gap-6 mt-10 lg:mt-0 lg:w-1/2">
          {/* Left Map */}
          <div className="w-1/2 rounded-2xl overflow-hidden shadow-lg border border-yellow-400 bg-yellow-400 p-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/India-locator-map-blue.svg"
              alt="India Map Left"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Right Map */}
          <div className="w-1/2 rounded-2xl overflow-hidden shadow-lg border border-yellow-400 bg-yellow-400 p-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/India-locator-map-blue.svg"
              alt="India Map Right"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Right Side - Solutions */}
        <div className="flex flex-col justify-start lg:w-1/4">
          <h3 className="text-2xl font-bold text-[#1b3358] mb-6">Our Solution</h3>

          <div className="bg-white shadow-md rounded-2xl p-6 mb-6 border-b-4 border-yellow-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
                <i className="fa-solid fa-shipping-fast text-gray-500"></i>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Partnr offers direct distribution of genuine spare parts from component manufacturers
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 mb-6 border-b-4 border-yellow-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
                <i className="fa-solid fa-map-marked-alt text-gray-500"></i>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Partnr provides manufacturers with nationwide exposure to mechanics, with no investment required
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 border-b-4 border-yellow-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
                <i className="fa-solid fa-magnifying-glass-chart text-gray-500"></i>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Partnr has micro-market-level insights into the buying behavior of mechanics, including their brand and product preferences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
