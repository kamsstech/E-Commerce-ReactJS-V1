

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ban1 from "../../../assets/images/banner/ban1.webp"
import ban2 from "../../../assets/images/banner/ban2.webp"
import ban3 from "../../../assets/images/banner/ban3.webp"

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./css/Banner.css";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


export default function BannerNew() {



  return (
    <>
      <Swiper
        direction={'vertical'}
        infinite={false}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          "delay": 2000,
          "disableOnInteraction": false
        }} pagination={{
          "clickable": true
        }}
        navigation={false}
        className="home-banner-sec"
      >
        <SwiperSlide>
          <div className="single-img" style={{height:"100%"}}>
            <img src={`${"https://devlcms.blob.core.windows.net/dev-msliveconnet-banner/banner/Banner1.png"}`} alt="" />
            {/* <img  src={ban1} alt="" /> */}
          </div>

        </SwiperSlide>

        <SwiperSlide>
          <div className="single-img">
            <img src={`${"https://devlcms.blob.core.windows.net/dev-msliveconnet-banner/banner/Banner2.png"}`} alt="" />
            {/* <img   src={ban2} alt="" /> */}
          </div>

        </SwiperSlide>

        <SwiperSlide>
          <div className="single-img">
            <img src={`${"https://devlcms.blob.core.windows.net/dev-msliveconnet-banner/banner/Banner1.png"}`} alt="" />
            {/* <img   src={ban3} alt="" /> */}
          </div>

        </SwiperSlide>

        <SwiperSlide>
          <div className="single-img">
            <img src={`${"https://devlcms.blob.core.windows.net/dev-msliveconnet-banner/banner/Banner2.png"}`} alt="" />
          </div>

        </SwiperSlide>


      </Swiper>
    </>
  )
}










//   

// BannerNew