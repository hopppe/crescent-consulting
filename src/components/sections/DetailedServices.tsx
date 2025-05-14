'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const detailedServices = [
  {
    title: "English Language Brand and Marketing",
    description: "Businesses across the Middle East use some English branding and marketing throughout their product range, but it is often badly translated, poorly communicated, or simply ineffective at reaching the English-speaking customers they want to reach. We offer tailored sessions reviewing and editing English branding to boost our clients' brand communication."
  },
  {
    title: "Management and Strategy Reviews",
    description: "We offer short reviews of your business's organisational structure and market strategy, advising on operational and financial efficiencies, structural changes, and market reach."
  },
  {
    title: "Sales Reviews",
    description: "We review your business's sales strategy, clarifying your target market, and advising on future approaches to boost your sales reach."
  }
];

const DetailedServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="section-heading text-primary">Our Services in Detail</h2>
          <div className="accent-line"></div>
          <p className="text-gray-600 text-lg font-normal">
            We provide comprehensive consulting services tailored to your specific needs.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="space-y-16"
        >
          {detailedServices.map((service, index) => (
            <motion.div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center"
              style={{
                transform: isInView ? "none" : index % 2 === 0 ? "translateX(-50px)" : "translateX(50px)",
                opacity: isInView ? 1 : 0,
                transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.2 * index}s`
              }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="md:col-span-8 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-primary mb-3 md:mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-base md:text-lg font-normal leading-relaxed">{service.description}</p>
                  </div>
                  <div className="md:col-span-4">
                    {index === 0 ? (
                      <div className="rounded-lg overflow-hidden shadow-lg h-60 sm:h-72 md:h-full">
                        <Image 
                          src="/images/business_walking.png" 
                          alt="Business people discussing marketing strategy"
                          width={600}
                          height={400}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          priority
                        />
                      </div>
                    ) : (
                      <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-primary to-primary-light h-40 sm:h-48 md:h-48 flex items-center justify-center">
                        <div className="text-white text-4xl md:text-5xl font-bold opacity-60">{index + 1}</div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="md:col-span-4 order-1 md:order-1 mb-6 md:mb-0">
                    {index === 1 ? (
                      <div className="rounded-lg overflow-hidden shadow-lg h-60 sm:h-72 md:h-full">
                        <Image 
                          src="/images/business-meeting.png" 
                          alt="Business leaders discussing management strategy"
                          width={600}
                          height={400}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          priority
                        />
                      </div>
                    ) : (
                      <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-secondary to-secondary h-40 sm:h-48 md:h-48 flex items-center justify-center">
                        <div className="text-white text-4xl md:text-5xl font-bold opacity-60">{index + 1}</div>
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-8 order-2 md:order-2">
                    <h3 className="text-2xl font-bold text-primary mb-3 md:mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-base md:text-lg font-normal leading-relaxed">{service.description}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices; 