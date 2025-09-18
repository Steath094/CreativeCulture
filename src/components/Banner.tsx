import Image from "next/image";
import React from "react";

function Banner() {
  const services = [
    "Meme Marketing",
    "Social Media Marketing",
    "Content Marketing",
  ];
  return (
    <div className='w-screen relative left-1/2 -translate-x-1/2 bg-[#7ED957] text-[#10012B] overflow-x-hidden py-4 whitespace-nowrap'>
      <div className='flex animate-marquee'>
        {services.map((service, ind) => (
          <div key={ind} className="flex flex-shrink-0 gap-2 items-center text-5xl mx-4">
            <div>{service}</div>
            <Image src={'./bannerStar.svg'} alt="" width={56} height={56} />
          </div>
        ))}
        {services.map((service, ind) => (
          <div key={`dup-${ind}`} aria-hidden="true" className="flex flex-shrink-0 gap-2 items-center text-5xl mx-4">
            <div>{service}</div>
            <Image src={'./bannerStar.svg'} alt="" width={56} height={56} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
