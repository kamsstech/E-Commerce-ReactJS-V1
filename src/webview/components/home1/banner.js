import * as React from "react";
import Slider from "react-slick";
import BannerImg from "../../../assets/images/banner.jpg";

const Banner = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true,
    fade: true,
    speed: 2000,
    autoplaySpeed: 7000,
    cssEase: "ease-in-out",
    loop: true
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

export default Banner;
