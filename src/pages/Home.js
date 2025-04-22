import React from "react";


import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import FeaturedSection from "../components/FeaturedSection";
import UpcomingEvents from "../components/UpcomingEvents"
import Subscription from "../components/Subscription"

import TopNews from "../components/TopNews";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div className="w-full">
      {/* Page Content */}
      <Navbar />
      <HeroSection />

      <FeaturedSection />
      <TopNews />
      <UpcomingEvents/>
      <Subscription/>

      <Footer />
    </div>
  );
};

export default Home;
