import Image from "next/image";
import ServiceCard from "./ServiceCard";


function ServicesSection() {
  return (
    <section id="services" className="bg-gradient-to-b from-[#240046] via-[#7E04A1] to-[#240046] text-white py-16 px-4 w-screen relative left-1/2 -translate-x-1/2">
      <div className="max-w-3/4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <div className="flex justify-center md:justify-start items-center gap-3">
                <Image src={'./star.svg'} alt='star logo' width={42} height={42}></Image>
              <p className="text-xl md:text-4xl text-gray-300">Our Services</p>
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-2xl">
              Boost Your Brand With Our Expertise
            </h2>
          </div>
          <div>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#7ED957] text-[#10012B] text-lg font-semibold rounded-4xl hover:bg-[#6cc546] transition-colors duration-200"
            >
              View All Services
              <Image src={'./arrow.svg'} alt='arrow' width={26} height={10} />
            </a>
          </div>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Social Media Marketing (Image on top) */}
          <ServiceCard
            title="Social Media Marketing"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sed do eiusmod tempor incididunt..."
            imageSrc="/card.png" // Replace with your image
            hasTopImage={true}
          />

          {/* Card 2: Meme Marketing (Highlighted, image in middle) */}
          <ServiceCard
            title="Meme Marketing"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
            imageSrc="/card1.png" // Replace with your image
            isHighlighted={true}
          />

          {/* Card 3: Content Marketing (Image on top) */}
          <ServiceCard
            title="Content Marketing"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sed do eiusmod tempor incididunt..."
            imageSrc="/card2.png" // Replace with your image
            hasTopImage={true}
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;