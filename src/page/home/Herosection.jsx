import React from "react";

const Herosection = () => {
  return (
    <section className="relative w-[100vw] h-screen overflow-hidden md:h-[80vh] lg:h-[100vh]">
      <video
        className="w-full h-full object-cover"
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
