import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage from "../assets/bgImage.png";
import ifter1 from "../assets/ifter.jpg";
import meeting1 from "../assets/meeting.jpg";
import event1 from "../assets/event.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const events = [
    {
      id: 1,
      title: "Annual Ifter Party",
      subtitle: "Join us for our grand gathering",
      description: "Celebrate Ramadan with delicious food and great company",
      image: ifter1,
      cta: "Register Now",
      link: "/ifter-registration"
    },
    {
      id: 2,
      title: "General Meeting",
      subtitle: "Monthly Association Meeting",
      description: "Discuss important matters and future plans for our school",
      image: meeting1,
      cta: "View Agenda",
      link: "/meetings"
    },
    {
      id: 3,
      title: "Upcoming Events",
      subtitle: "Mark your calendars",
      description: "Exciting activities planned for this semester",
      image: event1,
      cta: "See Schedule",
      link: "/events"
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <section 
      className="relative py-12 md:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg md:text-xl text-[#FFD700] font-medium">
              {events[currentSlide].subtitle}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {events[currentSlide].title}
            </h1>
            <p className="text-gray-200 text-lg mb-6">
              {events[currentSlide].description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex  gap-4 justify-center lg:justify-start"
          >
            <Link
              to={events[currentSlide].link}
              className="px-6 py-3 bg-[#FFD700] text-[#003366] font-semibold rounded-lg hover:bg-[#FFC000] transition duration-500"
            >
              {events[currentSlide].cta}
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#003366] transition duration-500"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Image Slider */}
        <div className="lg:w-1/2 relative">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              src={events[currentSlide].image} 
              alt={events[currentSlide].title}
              className="w-full h-auto max-h-96 object-cover"
            />
          </motion.div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#FFD700]' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated decorative elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </section>
  );
};

export default HeroSection;