import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "../assets/bgImage.png";
import ifter1 from "../assets/ifter.jpg";
import meeting1 from "../assets/meeting.jpg";
import event1 from "../assets/event.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  
  const minSwipeDistance = 50;

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

  const goToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToSlide = (index) => {
    if (isAnimating || currentSlide === index) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  const onTouchStart = (e) => {
    if (isAnimating) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!touchStart || isAnimating) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || isAnimating) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNextSlide();
    } else if (isRightSwipe) {
      goToPrevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section 
      className="relative overflow-hidden min-h-[650px] md:min-h-[700px] flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 py-12 md:py-16">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
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
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 justify-center lg:justify-start"
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
        <div 
          className="lg:w-1/2 relative h-[300px] md:h-[400px] w-full"
          ref={sliderRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src={events[currentSlide].image} 
                alt={events[currentSlide].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2 absolute -bottom-6 left-0 right-0">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#FFD700] w-6' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;