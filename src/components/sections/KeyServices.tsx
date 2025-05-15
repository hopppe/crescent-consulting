'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiTrendingUp, FiDollarSign, FiBarChart2, FiSearch } from 'react-icons/fi';

const services = [
  {
    icon: <FiTrendingUp className="w-10 h-10" />,
    title: "Marketing and Branding",
    description: "Strategic marketing and branding solutions to enhance your market presence."
  },
  {
    icon: <FiDollarSign className="w-10 h-10" />,
    title: "Structural and Financial",
    description: "Organizational and financial strategy to optimize your business operations."
  },
  {
    icon: <FiBarChart2 className="w-10 h-10" />,
    title: "Sales Strategy",
    description: "Targeted sales approaches to reach your ideal customers and boost revenue."
  },
  {
    icon: <FiSearch className="w-10 h-10" />,
    title: "General Reviews",
    description: "Comprehensive business assessments to identify opportunities for improvement."
  }
];

const KeyServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading text-primary">Key Services</h2>
          <div className="accent-line"></div>
          <p className="subtitle-text text-gray-700">
            Our expert consultants provide tailored advisory services across a range of sectors.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card p-8 transition-all hover:shadow-xl border border-gray-200"
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: `all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.1 * index}s`
              }}
            >
              <div className="text-secondary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServices; 