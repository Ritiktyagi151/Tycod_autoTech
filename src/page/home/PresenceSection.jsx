import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules"; 

const locations = [
  { id: "vadodara", name: "Vadodara", icon: "/icons/vadodara.svg", top: "42%", left: "67%" },
  { id: "surat", name: "Surat", icon: "/icons/surat.svg", top: "47%", left: "37%" },
  { id: "ludhiana", name: "Ludhiana", icon: "/icons/ludhiana.svg", top: "29%", left: "76%" },
  { id: "ahmedabad", name: "Ahmedabad", icon: "/icons/ahmedabad.svg", top: "38%", left: "50%" },
  { id: "jaipur", name: "Jaipur", icon: "/icons/jaipur.svg", top: "32%", left: "61%" },
];

const HexIcon = ({ src, alt }) => (
  <div className="w-20 h-20 relative flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="absolute w-full h-full">
      <polygon
        points="50,4 90,26 90,74 50,96 10,74 10,26"
        fill="#F7F9FF"
        stroke="#E6E9F8"
        strokeWidth="2"
      />
    </svg>
    <img src={src} alt={alt} className="w-11 h-11 relative z-10" />
  </div>
);

const PresenceSection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="w-full bg-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start gap-10">
        {/* LEFT - Swiper */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl lg:text-4xl font-extrabold text-[#B91C1C] mb-10">
            Our Presence
          </h2>

          <Swiper
            modules={[Autoplay]} 
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setSelected(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {locations.map((loc) => (
              <SwiperSlide key={loc.id}>
                <div
                  className={`relative group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-200 cursor-pointer
                    ${
                      selected === locations.indexOf(loc)
                        ? "bg-gray-50 border-2 border-gray-300"
                        : "bg-white border border-gray-100"
                    }
                    shadow-[0_10px_20px_rgba(13,37,83,0.04)] hover:shadow-lg
                  `}
                  onClick={() => setSelected(locations.indexOf(loc))}
                >
                  <HexIcon src={loc.icon} alt={loc.name} />
                  <p className="mt-4 text-lg font-semibold text-[#0b3b6b]">{loc.name}</p>

                  <div className="absolute -bottom-3 left-4 right-4 h-3 rounded-b-2xl overflow-hidden">
                    <div className="h-full bg-[#BB0F02]"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT MAP */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            src="https://wallpapers.com/images/hd/india-map-silhouette-ujdxr0le2vdbc42n.jpg"
            alt="India Map"
            className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[350px] sm:h-[420px] md:h-[500px] lg:h-[360px] object-contain"
          />

          {/* Map Markers */}
          {locations.map((loc, index) => (
            <div
              key={loc.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{ top: loc.top, left: loc.left }}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  selected === index ? "bg-yellow-400 animate-pulse" : "bg-black"
                }`}
              ></div>
              <span className="mt-1 text-xs font-semibold text-[#0b3b6b]">{loc.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;
