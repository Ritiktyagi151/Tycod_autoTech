import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Sample posts data
const posts = [
  {
    img: "",
    tag: "DIE CASTING",
    title: "High-precision aluminium die-cast components for automotive needs",
    author: "Tycod Autotech",
    date: "2021",
    time: "2 min read",
    comments: 0,
  },
  {
    img: "",
    tag: "AUTO PARTS",
    title: "Supplying premium components to Tata Motors, Honda, Maruti & Hero MotoCorp",
    author: "Tycod Autotech",
    date: "2022",
    time: "3 min read",
    comments: 1,
  },
  {
    img: "",
    tag: "MACHINING",
    title: "Precision machining solutions for complex automotive parts",
    author: "Tycod Autotech",
    date: "2022",
    time: "2 min read",
    comments: 0,
  },
  {
    img: "",
    tag: "QUALITY",
    title: "Committed to delivering high-quality, durable auto components",
    author: "Tycod Autotech",
    date: "2022",
    time: "1 min read",
    comments: 0,
  },
  {
    img: "",
    tag: "INNOVATION",
    title: "Innovative solutions in aluminium die casting since 1984",
    author: "Tycod Autotech",
    date: "2023",
    time: "2 min read",
    comments: 2,
  },
  {
    img: "",
    tag: "OEM SUPPLY",
    title: "Trusted supplier for major OEMs across India",
    author: "Tycod Autotech",
    date: "2023",
    time: "1 min read",
    comments: 0,
  },
  {
    img: "",
    tag: "ALUMINIUM PARTS",
    title: "Delivering lightweight, high-performance aluminium components",
    author: "Tycod Autotech",
    date: "2024",
    time: "3 min read",
    comments: 1,
  },
  {
    img: "",
    tag: "EXPERTISE",
    title: "Over 40 years of expertise in die casting and machining",
    author: "Tycod Autotech",
    date: "2024",
    time: "2 min read",
    comments: 0,
  },
];

export default function PostsCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // No need for swiperReady state; refs are stable and can be used directly
  useEffect(() => {
    // Ensure refs are attached (optional, for debugging)
    if (prevRef.current && nextRef.current) {
      console.log("Navigation refs are set");
    }
  }, []);

  return (
    <div className="bg-[#E7D7CF] py-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[20px] font-semibold">Posts Carousel</h2>
          <button className="text-sm flex items-center gap-1 font-bold hover:underline">
            View All →
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            // Ensure navigation is updated after Swiper initialization
            setTimeout(() => {
              swiper.navigation.update();
            }, 0);
          }}
          className="pb-12"
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-md shadow-md overflow-hidden h-[330px] flex flex-col">
                <img
                  src={post.img || "https://via.placeholder.com/150"} // Fallback image
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-[10px] text-gray-500 mb-2">
                    <span className="flex items-center gap-1">⏳ {post.time}</span>
                    <span className="flex items-center gap-1">💬 {post.comments}</span>
                  </div>
                  <p className="text-[11px] font-bold text-orange-500">{post.tag}</p>
                  <h3 className="text-sm font-semibold leading-5 mt-1 mb-3 flex-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-6 text-xs text-gray-600">
                    <span className="flex items-center gap-1">👤 {post.author}</span>
                    <span className="flex items-center gap-1">📅 {post.date}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Centered Arrows */}
        <div className="flex justify-center gap-2 mt-[-32px]">
          <button
            ref={prevRef}
            className="border px-3 py-1 rounded hover:bg-gray-200 disabled:opacity-50"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="border px-3 py-1 rounded hover:bg-gray-200 disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}