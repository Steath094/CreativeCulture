"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const cookSteps = [
    {
        step: "01",
        title: "Trends & Audience Research",
        description: [
            "🔍 We analyse meme trends, viral formats, and audience humour styles to match with your brand.",
        ],
        imageSrc: "/cook1.webp",
    },
    {
        step: "02",
        title: "Selecting the Perfect Meme Pages",
        description: [
            "📊 Hyper-targeted selection from meme pages with high real engagement (not bots!).",
        ],
        imageSrc: "/cook2.webp",
    },
    {
        step: "03",
        title: "Meme Creation & Optimisation",
        description: [
            "Custom meme formats are tailored to your audience's humour.",
            "A/B testing is done for maximum engagement & virality.",
        ],
        imageSrc: "/cook3.webp",
    },
    {
    step: "04",
    title: "Meme Distribution & Amplification",
    description: [
        "📢 Cross-platform posting via top-tier meme pages on Instagram, Twitter & Reddit.",
        "📈 Ensuring massive organic conversations & shares."
    ],
    imageSrc: "/cook4.webp",
    },
    {
    step: "05",
    title: "Real-Time Analytics & Optimisation",
    description: [
        "📊 Tracking every post's reach, engagement, and conversions to refine for peak performance."],
    imageSrc: "/cook5.webp",
    },
];

export default function HowWeCook() {
    const [activeIndex, setActiveIndex] = useState(0);
    // REMOVED: The subIndex state is no longer needed
    // const [subIndex, setSubIndex] = useState(0); 
    const containerRef = useRef<HTMLDivElement>(null);

    // This is the improved scroll logic that removes the extra padding
    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const scrollY = window.scrollY;
            const containerTop = container.offsetTop;
            const stepHeight = window.innerHeight;

            let newIndex = Math.round((scrollY - containerTop) / stepHeight);
            newIndex = Math.max(0, Math.min(cookSteps.length - 1, newIndex));
            
            setActiveIndex(newIndex);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const activeCookStep = cookSteps[activeIndex];

    return (
        <div ref={containerRef} style={{ height: `${cookSteps.length * 100}vh` }} className="relative pt-14">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center text-white overflow-hidden">
                <div className="text-center absolute top-10 left-1/2 -translate-x-1/2 w-full z-10">
                    <div className="flex justify-center items-center gap-3">
                        <Image src={'/star.svg'} alt='star logo' width={42} height={42} />
                        <h2 className="text-4xl md:text-5xl font-bold">How <span className="text-[#7ED957]">We Cook</span></h2>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-6xl mx-auto">
                    {/* Left Side: Animated GIF */}
                    <div className="w-1/2 px-6 flex justify-center items-center">
                         <AnimatePresence mode="wait">
                            <motion.div key={activeIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                                <Image src={activeCookStep.imageSrc} width={500} height={375} alt={activeCookStep.title} className="rounded-lg shadow-lg" />
                            </motion.div>
                         </AnimatePresence>
                    </div>

                    {/* Right Side: Animated Text with Number Box */}
                    <div className="w-1/2 px-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Number Box */}
                                <div className="bg-[#BBDDCB] p-4 w-28 h-24 flex justify-center items-center transform -skew-y-12 rounded-md shadow-lg shrink-0">
                                    <span className="text-black text-6xl">{activeCookStep.step}</span>
                                </div>

                                {/* Text Container */}
                                <div>
                                    <h4 className="text-[#7ED957] text-4xl font-medium">{activeCookStep.title}</h4>
                                    
                                    {/* MODIFIED: Map over descriptions to show all of them */}
                                    {activeCookStep.description.map((desc, index) => (
                                        <p key={index} className="text-gray-300 text-2xl  mt-2">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                 <AnimatePresence>
                    {activeIndex === 0 && (
                        <motion.div 
                            className="absolute bottom-10 left-1/2 -translate-x-1/2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                           <div className="text-sm text-gray-400 animate-bounce">Scroll Down</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}