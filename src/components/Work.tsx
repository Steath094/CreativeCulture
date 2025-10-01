"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const cookSteps = [
    // ... your data is the same
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
            "Custom meme formats are tailored to your audience's humour.    ",
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
    description:
        "📊 Tracking every post’s reach, engagement, and conversions to refine for peak performance.",
    imageSrc: "/cook5.webp",
    },
];

export default function HowWeCook() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const scrollPosition = window.scrollY;
            const containerTop = container.offsetTop;
            const containerHeight = container.offsetHeight;
            const viewportHeight = window.innerHeight;

            // Total scrollable distance inside the container
            const scrollableHeight = containerHeight - viewportHeight;
            if (scrollableHeight <= 0) return;

            // --- REVISED LOGIC ---
            // Calculate progress as a value from 0 to 1
            const currentProgress = Math.min(1, Math.max(0, (scrollPosition - containerTop) / scrollableHeight));
            setProgress(currentProgress);

            // Map the overall progress directly to the active step index
            const newIndex = Math.floor(currentProgress * cookSteps.length);
            
            // Clamp the index to be within the bounds of the array
            setActiveIndex(Math.min(cookSteps.length - 1, newIndex));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    useEffect(() => {
        setSubIndex(0);
        const descriptions = cookSteps[activeIndex].description;
        if (descriptions.length <= 1) return;
        const intervalId = setInterval(() => {
            setSubIndex(prev => (prev + 1) % descriptions.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [activeIndex]);

    const activeCookStep = cookSteps[activeIndex];

    return (
        <div ref={containerRef} style={{ height: `${100 + (cookSteps.length - 1) * 75}vh` }} className="relative">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center text-white bg-[#2D0A42] overflow-hidden">
                {/* ... The rest of your JSX remains exactly the same ... */}
                <div className="text-center absolute top-10 left-1/2 -translate-x-1/2 w-full z-10">
                    <div className="flex justify-center items-center gap-3">
                        <Image src={'/star.svg'} alt='star logo' width={42} height={42} />
                        <h2 className="text-4xl md:text-5xl font-bold">How <span className="text-[#7ED957]">We Cook</span></h2>
                    </div>
                </div>
                <div className="flex items-center w-full max-w-6xl mx-auto">
                    <div className="w-1/2 flex justify-center items-center">
                         <AnimatePresence mode="wait">
                            <motion.div key={activeIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                                <Image src={activeCookStep.imageSrc} width={500} height={375} alt={activeCookStep.title} className="rounded-lg shadow-lg" />
                            </motion.div>
                         </AnimatePresence>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 h-48 flex flex-col justify-between items-center">
                        <div className="w-0.5 h-full bg-gray-600"></div>
                        <motion.div className="w-0.5 h-full bg-[#7ED957] absolute top-0 origin-top" style={{ scaleY: progress }} />
                        {cookSteps.map((_, index) => (
                             <div key={index} className={`w-3 h-3 rounded-full absolute transition-all duration-300 ${index === activeIndex ? 'bg-[#7ED957] scale-125' : 'bg-gray-500'}`} style={{ top: `calc(${(index / (cookSteps.length - 1)) * 100}%)` }}></div>
                        ))}
                    </div>
                    <div className="w-1/2 px-6 flex items-start gap-4">
                        <div className="bg-[#BBDDCB] p-4 w-28 h-24 flex justify-center items-center transform -skew-y-12 rounded-md shadow-lg shrink-0">
                            <span className="text-black text-5xl font-bold skew-y-12 inline-block">{activeCookStep.step}</span>
                        </div>
                        <div className="relative w-full h-48">
                            <AnimatePresence>
                                <motion.div key={`${activeIndex}-${subIndex}`} className="absolute w-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                                    <h4 className="text-[#7ED957] text-3xl font-medium">{activeCookStep.title}</h4>
                                    <p className="text-gray-300 text-base mt-2">{activeCookStep.description[subIndex]}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {activeIndex === 0 && (
                        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                           <div className="text-sm text-gray-400 animate-bounce">Scroll Down</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}