import React from "react";

const Herosection = () => {
  return (
    <section className="relative w-full h-screen md:h-[80vh] lg:h-[100vh] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://cdn.pixabay.com/video/2024/10/27/238542_large.mp4"
      />

      
    </section>
  );
};

export default Herosection;
