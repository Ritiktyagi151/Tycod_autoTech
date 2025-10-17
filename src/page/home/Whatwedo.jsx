import React from "react";
import "../../WhatWeDo.css"; // We'll create this file for the custom CSS

const WhatWeDo = () => {
  // Function to get a random placeholder image

  const cards = [
    {
      id: 1,
      title: "Products",
      desc: "High-quality auto parts including bearings, gears, brake components, and engine accessories for superior vehicle performance.",
      link: "View products",
      image: "/assets/image/different-car-accessories-assortment.jpg", // Random image for products
    },
    {
      id: 2,
      title: "Services",
      desc: "Comprehensive automotive services including maintenance, repair, and custom assembly solutions to keep vehicles running smoothly.",
      link: "View services",
      image: "/assets/image/car-accessories-with-copy-space (1).jpg", // Random image for services
    },
    {
      id: 3,
      title: "Industries",
      desc: "Tailored solutions for automotive, two-wheeler, and commercial vehicle sectors, ensuring efficiency and reliability across industries.",
      link: "View industries",
      image: "/assets/image/open-hard-disk-black-background.jpg", // Random image for industries
    },
  ];

  return (
    <section className="bg-[#EEECEA] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#B91C1C] mb-12">What we do</h2>

        {/* The container for the 3D cards */}
        <div className="what-we-do-container">
          {cards.map((card) => (
            <div key={card.id} className="what-we-do-card">
              {/* Image Container for the front face */}
              <div className="img-container">
                <img src={card.image} alt={card.title} />
              </div>

              {/* Card Details for the back face */}
              <div className="card-details">
                <h3 className="text-2xl font-bold text-[#B91C1C] mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {card.desc}
                </p>
                <a
                  href="#"
                  className="text-[#B91C1C] font-medium inline-flex items-center gap-2 hover:underline"
                >
                  {card.link} <span>›</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
