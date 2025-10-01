"use client";

import React, { useState } from "react";
import Image from "next/image";
export default function ContactForm() {
  // Basic state to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted:", formData);
    alert("Form submitted! Check the console for data.");
  };

  return (
    <section className="text-white py-20 sm:py-24">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2">
            <Image src={'./star.svg'} alt='star logo' width={42} height={42}></Image>
            <p className="text-lg text-gray-300">Contact Us</p>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2">
            Get Your Free Quote Today!
          </h2>
        </div>

        {/* Main Content: Form + Image */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          
          {/* Left Side: Form */}
          <div className="w-full max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ex. Jhon Doe"
                    onChange={handleChange}
                    required
                    className="w-full bg-[#3a294d] text-white placeholder-gray-400 p-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#A0E85B]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    onChange={handleChange}
                    required
                    className="w-full bg-[#3a294d] text-white placeholder-gray-400 p-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#A0E85B]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter Your Phone Number"
                    onChange={handleChange}
                    required
                    className="w-full bg-[#3a294d] text-white placeholder-gray-400 p-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#A0E85B]"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Services Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    onChange={handleChange}
                    required
                    className="w-full bg-[#3a294d] text-white p-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#A0E85B]"
                  >
                    <option value="">Select Services</option>
                    <option value="web-design">Web Design</option>
                    <option value="seo">SEO</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Enter Here..."
                  onChange={handleChange}
                  required
                  className="w-full bg-[#3a294d] text-white placeholder-gray-400 p-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#A0E85B]"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#A0E85B] text-[#1E0A30] font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors duration-300"
                >
                  Send Messages
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center">
             <div className="relative w-full max-w-sm h-96">
                <Image 
                    src="/contact.png" // Replace with your image path
                    alt="Customer support representative"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-2xl"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
