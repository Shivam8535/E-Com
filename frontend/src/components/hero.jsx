import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
    alt: "Nature",
  },
  {
    id: 2,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
    alt: "Technology",
  },
  {
    id: 3,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192747/m5-exterior-rear-view.jpeg?isig=0&q=80",
    alt: "Travel",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full h-[80vh] flex flex-col md:flex-row items-center justify-center px-4 md:px-16 mb-10 mt-4 container mx-auto" >
      {/* Sliders */}
      <div className="w-full md:w-1/2 h-[300px] md:h-full overflow-hidden relative rounded-2xl shadow-xl mb-6 md:mb-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].id}
            src={slides[index].image}
            alt={slides[index].alt}
            className="w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>

      {/* Details */}
      <div className="w-full md:w-1/2 text-center md:text-left px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Discover innovation and excellence through our range of services. Stay inspired with
          top-tier content and interactive experiences.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
