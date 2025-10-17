import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Product() {
<<<<<<< HEAD
const products = [
  {
    img: "/assets/image/product/RBD-HERO-HONDA.png",
    title: "Red Hero Honda",
    desc: "High-quality rear engine cover crafted for Hero Honda models, ensuring enhanced protection and long-term performance.",
  },
  {
    img: "/images/scorty-auto-parts/front-cover-1ton.jpg",
    title: "Activa 6G",
    desc: "Premium-grade front engine cover for Activa 6G, offering perfect fit, corrosion resistance, and stylish finish.",
  },
  {
    img: "/images/scorty-auto-parts/rear-half-5s.jpg",
    title: "Rbd Activa New Model",
    desc: "Rear half crankcase designed for the latest Activa model, providing precision alignment and superior strength.",
  },
  {
    img: "/images/scorty-auto-parts/rear-half-4s.jpg",
    title: "Fbd Hero Honda",
    desc: "Durable 4-stroke rear housing made for Hero Honda models, delivering improved stability and vibration control.",
  },
  {
    img: "/images/scorty-auto-parts/bracket-cam-sensor.jpg",
    title: "Scooty Pep",
    desc: "Accurately machined bracket suitable for Scooty Pep, ensuring firm sensor placement and better performance.",
  },
  {
    img: "/images/scorty-auto-parts/front-cover-fe.jpg",
    title: "Rbd Yamaha",
    desc: "Front engine cover for Yamaha models, made from high-grade aluminum for lightweight strength and durability.",
  },
  {
    img: "/images/scorty-auto-parts/front-cover-4s.jpg",
    title: "Fbd Yamaha",
    desc: "Precision front cover for Yamaha 4-stroke variants, designed to reduce oil leaks and improve engine efficiency.",
  },
  {
    img: "/images/scorty-auto-parts/lock-plate.jpg",
    title: "Fbd Super Splender",
    desc: "Reliable lock plate engineered for Super Splendor models, ensuring tight engine assembly and secure fitting.",
  },
  {
    img: "/images/scorty-auto-parts/thermostat-cover.jpg",
    title: "Clutch Cover 70CC",
    desc: "High-performance clutch cover for 70CC bikes, designed for perfect sealing and smooth clutch operation.",
  },
  {
    img: "/images/scorty-auto-parts/top-cover-4s.jpg",
    title: "RR Suzuki",
    desc: "Top engine cover for Suzuki 4-stroke models, combining durability with easy maintenance and sleek design.",
  }
];

=======
  const products = [
    {
      img: "/images/scorty-auto-parts/rear-cover-4s.jpg",
      title: "Rear Cover-4S",
      desc: "Durable rear engine cover designed for 4-stroke engines, ensuring better protection and heat resistance.",
    },
    {
      img: "/images/scorty-auto-parts/front-cover-1ton.jpg",
      title: "Front Cover-1Ton",
      desc: "Robust front cover designed for heavy-duty 1-ton engines, providing excellent sealing and structural strength.",
    },
    {
      img: "/images/scorty-auto-parts/rear-half-5s.jpg",
      title: "Rear Half-5S",
      desc: "Precision-engineered rear half housing for 5-speed systems, ensuring smooth gear alignment.",
    },
    {
      img: "/images/scorty-auto-parts/rear-half-4s.jpg",
      title: "Rear Half-4S",
      desc: "Compact rear half assembly suitable for 4-stroke vehicles, enhancing durability and efficiency.",
    },
    {
      img: "/images/scorty-auto-parts/bracket-cam-sensor.jpg",
      title: "Bracket Cam Sensor",
      desc: "High-precision mounting bracket for cam sensors, ensuring stable positioning and accurate readings.",
    },
    {
      img: "/images/scorty-auto-parts/front-cover-fe.jpg",
      title: "Front Cover - Fe",
      desc: "Front engine cover made from FE-grade aluminum, offering lightweight performance and long-lasting reliability.",
    },
    {
      img: "/images/scorty-auto-parts/front-cover-4s.jpg",
      title: "Front Cover - 4S",
      desc: "Efficient and precision-cast front cover suitable for 4-stroke engines, ensuring reduced oil leakage.",
    },
    {
      img: "/images/scorty-auto-parts/lock-plate.jpg",
      title: "Lock Plate",
      desc: "High-tensile lock plate ensuring secure fastening of engine components under high stress conditions.",
    },
    {
      img: "/images/scorty-auto-parts/thermostat-cover.jpg",
      title: "Assly. Thermostat Cover",
      desc: "Complete thermostat cover assembly designed to maintain optimal engine cooling performance.",
    },
    {
      img: "/images/scorty-auto-parts/top-cover-4s.jpg",
      title: "Top Cover - 4S",
      desc: "Protective top cover for 4-stroke models, designed for easy fitting and improved engine aesthetics.",
    },
  ];
>>>>>>> 6f2bb7e (add animation and video)

  return (
    <div
      className="w-full bg-fixed py-4 mt-24 flex flex-col items-center bg-gray-100 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/image/background-img/scene-with-photorealistic-logistics-operations-proceedings.jpg')",
      }}
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-2xl font-bold text-center text-white backdrop-blur-sm px-2 mb-4"
      >
        Explore Our Full Product Range
      </motion.h2>
      <div className="w-24 h-1 bg-red-500 mb-10"></div>

      {/* Swiper Section */}
      <div className="w-[90%] md:w-[80%]">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10"
      >
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition">
          View All Products
        </button>
      </motion.div>
    </div>
  );
}
