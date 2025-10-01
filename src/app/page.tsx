import About from "@/components/About";
import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ServicesSection from "@/components/Service";
import TestimonialSlider from "@/components/Testimonial";
import WorkSection from "@/components/Work";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#10012B] to-[#240046] flex justify-center">
      <div className="w-3/4 text-white flex-col">
        <NavBar/>
        {/* <div className="w-screen relative left-1/2 -translate-x-1/2 border-b-1 border-[#f5f5f543]"></div> */}
        <Hero/>
        <div className="p-2"></div>
        <Banner/>
        <About/>
        <ServicesSection/>
        <WorkSection/>
        <div className="p-2"></div>
        <Banner/>
        <TestimonialSlider/>
        <ContactForm/>
        <Footer/>
      </div>
    </div>
  );
}
