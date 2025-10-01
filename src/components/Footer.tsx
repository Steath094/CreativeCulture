import Image from "next/image";
import React from "react";

// --- SVG Icon Components for Social Media ---

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#A0E85B] hover:text-white transition-colors"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#A0E85B] hover:text-white transition-colors"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#A0E85B] hover:text-white transition-colors"
  >
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

// --- Main Footer Component ---
export default function Footer() {
  return (
    <footer className="text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Logo */}
          <div className="text-center md:text-left">
                <Image src={'./logo.svg'} alt='logo' width={250} height={88}/>
          </div>

          {/* Middle: Text Content */}
          <div className="text-center text-sm text-gray-400">
            <p>
              Want to work with us? Drop your CVs at{" "}
              <a href="mailto:business.creativeculture@gmail.com" className="text-[#A0E85B] hover:underline">
                business.creativeculture@gmail.com
              </a>
            </p>
            <p className="mt-2">
              All rights reserved by CreativeCulture 2025
            </p>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="#" aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
