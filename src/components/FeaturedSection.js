import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const FeatureCard = ({ 
  title, 
  icon, 
  description, 
  bgColor, 
  textColor, 
  buttonHoverColor, 
  delay 
}) => {
  return (
    <motion.div
      className={`${bgColor} rounded-xl shadow-lg overflow-hidden p-8 flex flex-col items-center text-center h-full transform hover:scale-[1.02] transition-transform duration-300`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-6 p-3 bg-white bg-opacity-10 rounded-full">
        {icon}
      </div>
      <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>
        {title}
      </h3>
      <p className={`mb-6 ${textColor} opacity-90 leading-relaxed`}>
        {description}
      </p>
      <motion.button 
        className={`px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${
          bgColor.includes("770504") 
            ? "bg-[#FFD700] text-[#770504] hover:bg-[#FFC000]" 
            : "bg-[#770504] text-[#FFD700] hover:bg-[#600403]"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  buttonHoverColor: PropTypes.string,
  delay: PropTypes.number.isRequired
};

const FeaturedSection = () => {
  const features = [
    {
      id: 1,
      title: "Our Mission",
      icon: (
        <svg className="w-10 h-10 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "To foster unity among alumni, support current students through mentorship programs, and maintain strong connections with our alma mater through various initiatives and events.",
      bgColor: "bg-[#770504]",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "About Us",
      icon: (
        <svg className="w-10 h-10 text-[#770504]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: "Founded in 2005, our association has grown to over 1,000 active members. We organize annual reunions, career workshops, and fundraising events to support school development projects.",
      bgColor: "bg-[#FFD700]",
      textColor: "text-[#770504]"
    },
    {
      id: 3,
      title: "Past Leaders",
      icon: (
        <svg className="w-10 h-10 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "Honoring the contributions of our past presidents: Ahmed Rahman (2015-2018), Fatima Khan (2018-2021), and Jamal Uddin (2021-2023) who helped shape our association's growth and success.",
      bgColor: "bg-[#770504]",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-10 bg-[#F6F8D5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 lg:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#770504] mb-4">
            Our Association
          </h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              bgColor={feature.bgColor}
              textColor={feature.textColor}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;