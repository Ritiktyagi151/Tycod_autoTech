import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

<<<<<<< HEAD
// Sample posts data with random images
const posts = [
  {
    img: "https://source.unsplash.com/400x300/?car,auto",
=======
// --- Helper function to get a random image ---
// Using a seed ensures that each post gets a consistent "random" image on every render.
const getRandomImage = (seed) => `https://picsum.photos/seed/${seed}/400/300`;

// Sample posts data (without the img property initially)
const initialPosts = [
  {
>>>>>>> 40e9f2b (add blogs images)
    tag: "DIE CASTING",
    title: "High-precision aluminium die-cast components for automotive needs",
    author: "Tycod Autotech",
    date: "2021",
    time: "2 min read",
    comments: 0,
  },
  {
<<<<<<< HEAD
    img: "https://source.unsplash.com/400x300/?engine,car",
=======
>>>>>>> 40e9f2b (add blogs images)
    tag: "AUTO PARTS",
    title:
      "Supplying premium components to Tata Motors, Honda, Maruti & Hero MotoCorp",
    author: "Tycod Autotech",
    date: "2022",
    time: "3 min read",
    comments: 1,
  },
  {
<<<<<<< HEAD
    img: "https://source.unsplash.com/400x300/?machining,workshop",
=======
>>>>>>> 40e9f2b (add blogs images)
    tag: "MACHINING",
    title: "Precision machining solutions for complex automotive parts",
    author: "Tycod Autotech",
    date: "2022",
    time: "2 min read",
    comments: 0,
  },
  {
<<<<<<< HEAD
    img: "https://source.unsplash.com/400x300/?quality,industrial",
=======
>>>>>>> 40e9f2b (add blogs images)
    tag: "QUALITY",
    title: "Committed to delivering high-quality, durable auto components",
    author: "Tycod Autotech",
    date: "2022",
    time: "1 min read",
    comments: 0,
  },
  {
<<<<<<< HEAD
    img: "https://source.unsplash.com/400x300/?innovation,technology",
=======
>>>>>>> 40e9f2b (add blogs images)
    tag: "INNOVATION",
    title: "Innovative solutions in aluminium die casting since 1984",
    author: "Tycod Autotech",
    date: "2023",
    time: "2 min read",
    comments: 2,
  },
  {
<<<<<<< HEAD
    img: "https://source.unsplash.com/400x300/?factory,production",
=======
>>>>>>> 40e9f2b (add blogs images)
    tag: "OEM SUPPLY",
    title: "Trusted supplier for major OEMs across India",
    author: "Tycod Autotech",
    date: "2023",
    time: "1 min read",
    comments: 0,
  },
  {
<<<<<<< HEAD
    img: "https://source.unsplash.com/400x300/?aluminium,parts",
=======
>>>>>>> 40e9f2b (add blogs images)
    tag: "ALUMINIUM PARTS",
    title: "Delivering lightweight, high-performance aluminium components",
    author: "Tycod Autotech",
    date: "2024",
    time: "3 min read",
    comments: 1,
  },
  {
<<<<<<< HEAD
    img: "https://source.unsplash.com/400x300/?engineering,expertise",
=======
>>>>>>> 40e9f2b (add blogs images)
    tag: "EXPERTISE",
    title: "Over 40 years of expertise in die casting and machining",
    author: "Tycod Autotech",
    date: "2024",
    time: "2 min read",
    comments: 0,
  },
];

// --- Add random images to each post ---
const posts = initialPosts.map((post, index) => ({
  ...post,
  img: getRandomImage(`post${index + 1}`), // e.g., seed will be "post1", "post2", etc.
}));

export default function PostsCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

<<<<<<< HEAD
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      console.log("Navigation refs are set");
    }
  }, []);

=======
>>>>>>> 40e9f2b (add blogs images)
  return (
    <div className="bg-[#E7D7CF] py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Latest From The Blog
          </h2>
          <button className="text-sm flex items-center gap-1 font-bold text-gray-700 hover:text-black hover:underline">
            View All →
          </button>
        </div>

        {/* Swiper */}
<<<<<<< HEAD
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
                  src={post.img}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-[10px] text-gray-500 mb-2">
                    <span className="flex items-center gap-1">⏳ {post.time}</span>
                    <span className="flex items-center gap-1">💬 {post.comments}</span>
=======
        <div className="relative">
          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
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
            onInit={(swiper) => {
              // Directly assign navigation elements to Swiper instance
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="pb-12"
          >
            {posts.map((post, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[380px] flex flex-col group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <div className="overflow-hidden h-48">
                    <img
                      src={post.img} // Use the new random image URL
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
>>>>>>> 40e9f2b (add blogs images)
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <p className="font-bold text-red-600 uppercase tracking-wider">
                        {post.tag}
                      </p>
                      <span className="flex items-center gap-1">
                        ⏳ {post.time}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold leading-tight mt-1 mb-3 flex-1 text-gray-800 group-hover:text-red-700 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-600 border-t pt-3 mt-auto">
                      <span className="flex items-center gap-2">
                        👤 {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        📅 {post.date}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-10 px-[-2.5rem]">
            <button
              ref={prevRef}
              className="bg-white/80 backdrop-blur-sm text-gray-800 w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-white transition-all disabled:opacity-0"
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="bg-white/80 backdrop-blur-sm text-gray-800 w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-white transition-all disabled:opacity-0"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
