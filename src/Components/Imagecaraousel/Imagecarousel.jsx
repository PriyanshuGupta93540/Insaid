import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import I85 from '../../images/85.jpg'
import I86 from '../../images/86.jpg'
import I87 from '../../images/87.jpg'
import I88 from '../../images/88.jpg'
import I89 from '../../images/89.jpg'
import I90 from '../../images/90.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Imagecarousel.css'

import { Pagination, Navigation } from "swiper";
const Imagecarousel = () => {
  return (
    <div className="Imagecarousel">
      
      <div className="Imagecarousel_heading">
          <h1>Client Testimonials</h1>
      </div>

<Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > 

      
        <SwiperSlide>
          <img src={I85} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={I86} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={I87} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={I88} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={I89} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={I90} alt="" />
        </SwiperSlide>
        
      </Swiper>

    </div>
  )
}

export default Imagecarousel