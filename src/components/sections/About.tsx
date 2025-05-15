'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading text-primary">About Us</h2>
          <div className="accent-line"></div>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            style={{
              transform: isInView ? "none" : "translateX(-50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <Image 
              src="/images/aboutusmap.png" 
              alt="Global map showing our consulting presence"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div
            style={{
              transform: isInView ? "none" : "translateX(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Who We Are</h3>
            <p className="subtitle-text text-gray-700 mb-4">
              Crescent Consulting brings together experienced independent consultants who deliver tailored solutions 
              to businesses across the UK, US, and the Middle East.
            </p>
            <p className="subtitle-text text-gray-700 mb-4">
              Our expertise spans various sectors, allowing us to provide comprehensive advisory services 
              that address the unique challenges faced by our clients.
            </p>
            <p className="subtitle-text text-gray-700">
              We pride ourselves on delivering effective strategies and practical solutions, 
              helping businesses navigate complexities and achieve sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 