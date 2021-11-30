import React,{useState,useEffect} from "react";
import Swiper from "react-id-swiper";
import Button from "@material-ui/core/Button";

//images
import BG from "../../../assets/images/bg3.svg";
import CiplaLogo from "../../../assets/images/cipla-logo.png";
import BannerImg1 from "../../../assets/images/banner.png";

const RoadblockSlider = (props) => {
  const {bannerResponse}= props
  const [arrayRes,setArrayRes] = useState([]);

  useEffect(() => {
    
    if(bannerResponse.payload)
    {
        setArrayRes(bannerResponse.payload.j_list)
    }
 }, [bannerResponse.payload !== []])
  const params = {
    // effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.14,
    loop: true,
    spaceBetween: 12
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true
    // }
  };

  // const params = {
  //   effect: "coverflow",
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: 1.2,
  //   loop: true,
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true
  //   }
  // };
  return (
    <div className="roadblock-slider">
      <Swiper {...params}>
      {Array.isArray(arrayRes) && arrayRes.length > 0 && arrayRes.map((item, index) => (
        <div className="roadblock-slider-sec" 
        >
          
          <img 
            src={item.c_banner_image_url} 
            onError={(e) => {
              e.target.src = BannerImg1
              }} 
              className="main-slider-img" 
              alt="site_img" />
        </div>
        ))
      }
        {<div>
          <div
            className="roadblock-slider-sec"
            style={{ backgroundImage: `url(${BG})` }}
          >
            <div className="roadblock-slider-space">
              <img
                src={CiplaLogo}
                alt="CiplaLogo"
                className="mob-roadblock-img"
              />
              <h3 className="roadblock-slider-subtitle">Special Ugadi Offer</h3>
              <h2 className="roadblock-slider-title">
                Flat <span>25% Off</span> On All Cardiac
                <br />
                Division Products{" "}
              </h2>
              <p className="mfc-popup-text">Offer valid till 31st March </p>
              <Button
                variant="contained"
                color="primary"
                className="ordernow-slider-btn"
              >
                order now
              </Button>
            </div>
          </div>
        </div>}
        {<div>
          <div
            className="roadblock-slider-sec"
            style={{ backgroundImage: `url(${BG})` }}
          >
            <div className="roadblock-slider-space">
              <img
                src={CiplaLogo}
                alt="CiplaLogo"
                className="mob-roadblock-img"
              />
              <h3 className="roadblock-slider-subtitle">Special Ugadi Offer</h3>
              <h2 className="roadblock-slider-title">
                Flat <span>25% Off</span> On All Cardiac
                <br />
                Division Products{" "}
              </h2>
              <p className="mfc-popup-text">Offer valid till 31st March </p>
              <Button
                variant="contained"
                color="primary"
                className="ordernow-slider-btn"
              >
                order now
              </Button>
            </div>
          </div>
        </div>}
      </Swiper>
    </div>
  );
};
export default RoadblockSlider;
