import * as React from "react";
import { useState,useEffect } from "react";
import Slider from "react-slick";


const Banner = (props) => {
  const {bannerResponse} = props;

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true,
    fade: true,
    speed: 200,
    autoplaySpeed: 100,
    cssEase: "ease-in-out",
    loop: true
  };
  let [arrayRes,setArrayRes] = useState([]);

  useEffect(() => {
     if(bannerResponse.payload)
     {
         setArrayRes(bannerResponse.payload.j_list)
     }
  }, [bannerResponse])

  return (
    <div className="home-banner-sec">
      <Slider {...settings}>
        {
          Array.isArray(arrayRes) && arrayRes.length > 0 && arrayRes.map((item, index) => (
          <div className="single-img">
            <img src={item.c_banner_image_url} alt="banner" />
          </div>
        ))
       }
      </Slider>
    </div>
  );
};


export default Banner;
