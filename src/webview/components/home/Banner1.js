import * as React from "react";
import Slider from "react-slick";
import BannerImg from "../../../assets/images/banner.jpg";
import offersOne from "../../../assets/images/offers1.jpg";
import offersTwo from "../../../assets/images/offers2.jpg";
import offersThree from "../../../assets/images/offers3.jpg";

const Banner1 = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    speed: 2000,
    autoplaySpeed: 7000,
    cssEase: "ease-in-out",
    loop: true,
    infinite:true
  };

  return (
    <div className="home-banner-sec">
      <Slider {...settings}>
        <div className="single-img">
          <img src={BannerImg} alt="banner" />
        </div>
        <div className="single-img">
          <img src={BannerImg} alt="banner" />
        </div>
        <div className="single-img">
          <img src={BannerImg} alt="banner" />
        </div>
        <div className="single-img">
          <img src={BannerImg} alt="banner" />
        </div>
        <div className="single-img">
          <img src={BannerImg} alt="banner" />
        </div>
        <div className="single-img">
          <img src={BannerImg} alt="banner" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner1;
