import React from "react";

const WhatWeDo = () => {
 const cards = [
  {
    id: 1,
    title: "Products",
    desc: "High-quality auto parts including bearings, gears, brake components, and engine accessories for superior vehicle performance.",
    link: "View products"
  },
  {
    id: 2,
    title: "Services",
    desc: "Comprehensive automotive services including maintenance, repair, and custom assembly solutions to keep vehicles running smoothly.",
    link: "View services"
  },
  {
    id: 3,
    title: "Industries",
    desc: "Tailored solutions for automotive, two-wheeler, and commercial vehicle sectors, ensuring efficiency and reliability across industries.",
    link: "View industries"
  }
];


  return (
    <section className="bg-[#EEECEA] py-4">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#B91C1C] mb-8">What we do</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left px-20">
          {cards.map((card) => (
            <div
              key={card.id}
              className="p-5 cursor-pointer rounded-lg select-none border border-transparent bg-transparent 
                         hover:border-gray-500 hover:bg-gray-200 hover:shadow-lg 
                         transform transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-[#B91C1C] mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{card.desc}</p>
              <a href="#" className="text-[#B91C1C] font-medium inline-flex items-center gap-2">
                {card.link} <span>›</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
