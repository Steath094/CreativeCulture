import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#10012B] to-[#240046] flex justify-center">
      <div className="w-3/4 text-white flex-col">
        <NavBar/>
        <Hero/>
      </div>
    </div>
  );
}
