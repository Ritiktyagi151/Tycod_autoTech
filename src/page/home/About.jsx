import React, { useState, useEffect } from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const content = [
    {
      title: "ABOUT US",
      text: [
        "Tycod Autotech was established in 2021 with a vision to become a leading player in the automotive components industry. The company grew stronger after acquiring the well-known KU brand, a trusted name in high-pressure die casting and machining since 1984. Over the decades, KU built a strong reputation for delivering high-quality aluminium components, earning the trust of major OEMs such as Tata Motors, Honda (HSMI), Maruti Suzuki, Hero MotoCorp, and others. KU’s expertise in precision die casting, machining, and quality assurance laid a solid foundation for Tycod Autotech to expand its capabilities and product portfolio. Tycod Autotech combines KU’s legacy of technical excellence with modern manufacturing practices, innovation, and a customer-centric approach. The company specializes in producing high-precision aluminium components for automotive and industrial sectors, ensuring durability, reliability, and adherence to international quality standards. With a strong commitment to research, process improvement, and sustainable manufacturing, Tycod Autotech aims to support the evolving needs of the automotive industry while empowering partners and clients with innovative, cost-effective solutions.",
      ],
    },
    {
      title: "OUR MISSION",
      text: [
        "At Tycod Autotech, our mission is to build upon KU’s strong legacy and set new benchmarks in the automotive components industry. We strive to deliver high-precision aluminium components that are durable, reliable, and meet the dynamic needs of modern automotive and industrial sectors. Through continuous research, advanced manufacturing techniques, and adherence to international quality standards, we aim to innovate products that combine performance with sustainability. We are committed to empowering clients and partners by offering cost-effective, high-quality solutions while fostering long-term relationships built on trust. Sustainability, efficiency, and excellence form the core of our operations as we minimize environmental impact and promote responsible manufacturing. Our mission includes nurturing talent and skill development, encouraging creativity, precision, and problem-solving. By integrating KU’s decades-long expertise in high-pressure die casting and machining with Tycod Autotech’s forward-looking vision, we aspire to contribute to the automotive industry’s growth while delivering innovative, reliable, and socially responsible solutions.",
      ],
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <section className="w-full h-[390px] bg-white grid grid-cols-2 relative">
      {/* Heading Slider */}
      <header className="absolute top-0 left-0 w-full bg-[#F3F4F6] text-black text-center py-3 z-10 animate-slide-in-down">
        <h1 className="text-4xl font-bold tracking-wider" style={{ fontFamily: "Arial Black, sans-serif" }}>
          {content[activeIndex].title}
        </h1>
      </header>
      

      {/* Left Section: Image + Social Icons */}
      <div className="relative bg-[#F3F4F6] flex flex-col items-center justify-start p-4 pt-16 animate-slide-in-left">
        {/* Image */}
        <div className="bg-[#F3F4F6] rounded-2xl overflow-hidden mt-5 shadow-2xl">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHVnbnJuNXFrb3RsN2cxMzd3MGw2d2FwcDI5bHU2dDdpbDRmODFjNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/llxkS0wUmLOMuPHRqy/giphy.gif"
            alt="Woman in denim overalls with measuring tape"
            className="w-96 h-[344px] object-cover"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-3 ml-1">
          <Link
            to="/twitter"
            className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <Twitter className="w-4 h-4" />
          </Link>
          <Link
            to="/facebook"
            className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <Facebook className="w-4 h-4" />
          </Link>
          <Link
            to="/instagram"
            className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <Instagram className="w-4 h-4" />
          </Link>
          <Link
            to="/whatsapp"
            className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <FaWhatsapp className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Right Section: Text + Navigation Dots */}
      <div className="bg-[#F3F4F6] flex flex-col justify-start mt-4 pt-16 pl-16 animate-slide-in-right">
        <div className="max-w-xl">
          <div className="space-y-5 text-gray-700 text-[14px] leading-relaxed mb-10">
            {content[activeIndex].text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex gap-2 justify-end mr-16 items-center">
            {content.map((_, index) => (
              <div
                key={index}
                className={`w-16 h-0.5 cursor-pointer transition ${activeIndex === index ? "bg-black" : "bg-gray-400"}`}
                onClick={() => setActiveIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInLeft { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slide-in-left { animation: slideInLeft 1s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 1s ease-out forwards; }
        .animate-slide-in-down { animation: slideInDown 1s ease-out forwards; }
      `}</style>
    </section>
  );
}
