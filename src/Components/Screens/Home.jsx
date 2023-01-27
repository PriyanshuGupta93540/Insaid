import React from "react";
import Uppernavbar from "../Uppernavbar/Uppernavbar";

import Navbar from "../Navbar/Navbar";

import Intro from "../Intro/Intro";
import FeaturedProduct from "../FeatureProduct/FeaturedProduct";
import OurService from "../Moneyback/OurService";
import Imagecarousel from "../Imagecaraousel/Imagecarousel";
import "swiper/css/bundle";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Uppernavbar />
      <Navbar/>
      <Intro />
      <FeaturedProduct />
      <OurService />
      <Imagecarousel />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
