import Image from "next/image";
import React from "react";

function Banner() {
  const services = [
    "Meme Marketing",
    "Social Media Marketing",
    "Content Marketing",
  ];

  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#7ED957] text-[#10012B] overflow-hidden py-4">
      <div className="flex w-max animate-marquee">
        {/* Repeat services twice for seamless loop */}
        {[...services, ...services].map((service, ind) => (
          <div
            key={ind}
            className="flex flex-shrink-0 gap-2 items-center text-5xl mx-4"
          >
            <span>{service}</span>
            <Image src="/bannerStar.svg" alt="star" width={56} height={56} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
