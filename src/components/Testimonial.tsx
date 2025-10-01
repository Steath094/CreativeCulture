"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- 1. Testimonial Data ---
// You can replace this with your actual data
const testimonials = [
  {
    name: "Vijay Verma",
    role: "Actor, Model",
    text: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    imageSrc: "/vijay.avif", // Replace with your image path
  },
  {
    name: "Alia Bhatt",
    role: "Lead Actress",
    text: "An incredible experience from start to finish. The results were beyond our expectations and the process was seamless.",
    imageSrc: "/alia.jpg", // Replace with your image path
  },
  {
    name: "Shah Rukh Khan",
    role: "Producer",
    text: "Working with this team was a game-changer. Their attention to detail and creative approach is unparalleled.",
    imageSrc: "/shahrukh.jpg", // Replace with your image path
  },
];

// --- 2. Helper Components ---

// Arrow SVG for buttons
const Arrow = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={direction === "left" ? "transform rotate-180" : ""}
  >
    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
  </svg>
);

// --- 3. Main Testimonial Slider Component ---
export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[index];

  return (
    <section className="text-white min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Success, Straight from the Source
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          
          {/* Left Side: Image Card Stack */}
          <div className="w-full md:w-3/5 flex items-center justify-center">
            <div className="relative w-[26rem] h-[26rem] sm:w-[30rem] sm:h-[30rem]">
              {/* Removed AnimatePresence from here as we animate each card individually */}
                {testimonials.map((testimonial, i) => {
                  const position = i - index;
                  
                  // Properties for cards in the stack
                  // The main card is at 90% scale, and subsequent cards are scaled down from there.
                  const scale = Math.pow(0.9, Math.abs(position)) * 0.9;
                  const y = Math.abs(position) * 15;
                  const rotate = position * 5;
                  const zIndex = testimonials.length - Math.abs(position);
                  const opacity = Math.abs(position) < 3 ? 1 : 0; // Show center and a couple of cards behind

                  // Override properties for the card in the center
                  const finalY = position === 0 ? 0 : y;
                  const finalRotate = position === 0 ? 0 : rotate;
                  // The main image is larger than the background ones
                  const finalScale = position === 0 ? 1 : scale;


                  return (
                    <motion.div
                      key={testimonial.name}
                      className="absolute w-full h-full"
                      initial={false} // Prevents animation on initial load
                      animate={{
                        y: finalY,
                        scale: finalScale,
                        rotate: finalRotate,
                        zIndex: zIndex,
                        opacity: opacity,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl shadow-2xl"
                      />
                    </motion.div>
                  );
                })}
            </div>
          </div>

          {/* Right Side: Testimonial Info */}
          <div className="w-full md:w-2/5 text-center md:text-left">
            <div className="relative h-48">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-full"
                >
                  <h3 className="text-2xl sm:text-3xl font-semibold">{currentTestimonial.name}</h3>
                  <p className="text-gray-400 mb-4">{currentTestimonial.role}</p>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    "{currentTestimonial.text}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <button
                onClick={handlePrev}
                className="bg-[#A0E85B] text-[#1E0A30] p-3 rounded-full hover:bg-white transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <Arrow direction="left" />
              </button>
              <button
                onClick={handleNext}
                className="bg-[#A0E85B] text-[#1E0A30] p-3 rounded-full hover:bg-white transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <Arrow direction="right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

