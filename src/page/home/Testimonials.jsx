import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    img: "/images/user1.jpg",
    text: "Xero for iOS devices adds to the convenience, offering users a chance to view financial information on the go.",
    name: "Philip Butler",
  },
  {
    img: "/images/user2.jpg",
    text: "Using this app made managing my business finances so much easier and faster than before.",
    name: "Emily Watson",
  },
  {
    img: "/images/user3.jpg",
    text: "The mobile interface is clean, intuitive, and works perfectly for quick financial insights.",
    name: "John Carter",
  },
  {
    img: "/images/user4.jpg",
    text: "It’s the perfect blend of simplicity and performance — highly recommended!",
    name: "Sophia Lee",
  },
  {
    img: "/images/user5.jpg",
    text: "A must-have tool for anyone who needs financial updates anytime, anywhere.",
    name: "Michael Davis",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="py-4 bg-[#eeecea]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Testimonial</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="flex">
              <div className="flex flex-col justify-between h-full min-h-[240px] bg-white rounded-2xl shadow-md overflow-hidden relative flex-1">
                
                {/* Image */}
                <div className="absolute -top-12 w-full flex justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                {/* Quote */}
                <div className="pt-16 pb-10 px-6 text-center flex-1 flex items-center justify-center">
                  <p className="text-gray-700 text-[17px] leading-relaxed italic">
                    “{item.text}”
                  </p>
                </div>

                {/* Name Bar */}
                <div className="bg-[#A10C00] w-full py-3 text-center">
                  <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
