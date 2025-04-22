import React from "react";
import { motion } from "framer-motion";

const TopNewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Annual Alumni Reunion 2023",
      description: "Join us for our biggest gathering of the year as we celebrate our shared history and future aspirations.",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "October 15, 2023"
    },
    {
      id: 2,
      title: "New Scholarship Program Launched",
      description: "We're proud to announce 10 new scholarships for deserving students from underprivileged backgrounds.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "September 28, 2023"
    },
    {
      id: 3,
      title: "Sports Complex Renovation Complete",
      description: "The newly renovated sports facility is now open with state-of-the-art equipment for all students.",
      image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "August 10, 2023"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-[#770504] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Top News
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Stay updated with the latest happenings in our alumni community
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-[#FFD700] font-medium bg-[#770504] px-3 py-1 rounded-full">
                    News
                  </span>
                  <span className="text-sm text-gray-500 ml-auto">
                    {news.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#770504] mb-3">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {news.description}
                </p>
                
                <button className="text-[#770504] font-medium hover:text-[#FFD700] transition-colors duration-300 flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="px-6 py-3 bg-[#770504] text-white rounded-lg hover:bg-[#5a0403] transition-colors duration-300 font-medium">
            View All News
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopNewsSection;