'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const shapes = containerRef.current.querySelectorAll('.geometric-shape');
      const scrollY = window.scrollY;
      
      shapes.forEach((shape, index) => {
        const speed = 0.08 + (index * 0.03);
        const yPos = -scrollY * speed;
        (shape as HTMLElement).style.transform = `translateY(${yPos}px) rotate(${scrollY * 0.03}deg)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 overflow-hidden z-10" style={{ top: "64px" }}>
        <div className="absolute left-0 right-0 bottom-0 h-80 md:h-96 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-15">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -left-40 top-1/3 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Geometric shapes container */}
        <div ref={containerRef} className="geometric-container">
          {/* Top left rectangle */}
          <motion.div 
            className="geometric-shape"
            style={{
              top: '8%',
              left: '8%',
              width: '250px',
              height: '120px',
              borderColor: '#3cc6f4',
              animation: 'floatUp 18s ease-in-out infinite alternate',
              borderWidth: '4px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2 }}
          />
          
          {/* Bottom right square */}
          <motion.div 
            className="geometric-shape"
            style={{
              bottom: '18%',
              right: '8%',
              width: '180px',
              height: '180px',
              borderColor: '#ff5a3d',
              animation: 'floatDown 15s ease-in-out infinite alternate',
              borderWidth: '4px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          {/* Top right diamond */}
          <motion.div 
            className="geometric-shape"
            style={{
              top: '12%',
              right: '12%',
              width: '200px',
              height: '200px',
              transform: 'rotate(45deg)',
              borderColor: '#3cc6f4',
              animation: 'floatSideways 12s ease-in-out infinite alternate',
              borderWidth: '4px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2, delay: 1 }}
          />
          
          {/* Bottom left rectangle */}
          <motion.div 
            className="geometric-shape"
            style={{
              bottom: '15%',
              left: '12%',
              width: '280px',
              height: '140px',
              borderColor: '#ff5a3d',
              animation: 'floatDown 14s ease-in-out infinite alternate',
              borderWidth: '4px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2, delay: 1.5 }}
          />

          {/* SVG Triangle */}
          <motion.svg 
            width="300" 
            height="260" 
            viewBox="0 0 300 260" 
            className="absolute"
            style={{
              top: '35%',
              right: '28%',
              animation: 'floatSideways 16s ease-in-out infinite alternate',
              zIndex: 1,
              opacity: 0.6
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2, delay: 2 }}
          >
            <polygon 
              points="150,10 10,250 290,250" 
              fill="none" 
              stroke="#ff5a3d" 
              strokeWidth="4"
            />
          </motion.svg>

          {/* SVG Hexagon */}
          <motion.svg 
            width="280" 
            height="240" 
            viewBox="0 0 280 240" 
            className="absolute"
            style={{
              top: '20%',
              left: '25%',
              animation: 'floatUp 15s ease-in-out infinite alternate',
              zIndex: 1,
              opacity: 0.6
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2, delay: 2.5 }}
          >
            <polygon 
              points="70,10 210,10 270,120 210,230 70,230 10,120" 
              fill="none" 
              stroke="#3cc6f4" 
              strokeWidth="4"
            />
          </motion.svg>
        </div>
      </div>
      
      <div className="container z-20 px-4 md:px-6 text-center">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Trusted Partner in Tailored Advisory Services
          </motion.h1>
          
          <motion.p 
            className="subtitle-text text-gray-800 opacity-90 max-w-3xl mx-auto mb-10 font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are a collection of independent consultants who work across the UK, US, and the Middle East, 
            offering tailored advisory services in a range of sectors including sales, marketing, branding, 
            and financial management.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#services" 
              className="btn-accent text-lg px-8 py-3 rounded-md font-medium inline-block text-dark-bg"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 