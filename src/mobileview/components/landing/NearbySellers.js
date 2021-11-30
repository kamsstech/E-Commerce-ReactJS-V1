import * as React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Swiper from "react-id-swiper";

//images
import SliderImg1 from "../../../assets/mobImages/seller1.png";
import SliderImg2 from "../../../assets/mobImages/seller2.png";
import SliderImg3 from "../../../assets/mobImages/seller3.png";

const NearBySellers = () => {
  const params = {
    slidesPerView: 2.3,
    spaceBetween: 16,
    freeMode: true,
    pagination: {
      clickable: true
    }
  };
  return (
    <div>
      <div className="mob-slider-sec">
        <div>
          <h3 className="mob-slider-title">Near By Sellers</h3>
          <h5 className="mob-slider-subtitle">All over Bangalore</h5>
        </div>
        <div>
          <Link to="/nearby-sellers">
            <Fab
              variant="extended"
              size="small"
              color="default"
              className="mob-viewall-button"
              aria-label="add"
            >
              View All
            </Fab>
          </Link>
        </div>
      </div>
      <div className="mob-home-slider">
        <Swiper {...params}>
          <div>
            <div className="mob-home-slide">
              <div className="center">
                <img
                  src={SliderImg1}
                  alt="medicalsImg"
                  className="slider-img sellers-img"
                />
              </div>
              <h5 className="mob-home-slider-title no-ellipsis">Srinivasa Medisales Pvt. Ltd.</h5>
              <h5 className="mob-home-sposore">Sponsored</h5>
            </div>
          </div>
          <div>
            <div className="mob-home-slide">
              <div className="center">
                <img
                  src={SliderImg2}
                  alt="medicalsImg"
                  className="slider-img sellers-img"
                />
              </div>
              <h5 className="mob-home-slider-title no-ellipsis">Mahaveer Medisales Pvt. Ltd.</h5>
              <h5 className="mob-home-sposore">Sponsored</h5>
            </div>
          </div>
          <div>
            <div className="mob-home-slide">
              <div className="center">
                <img
                  src={SliderImg3}
                  alt="medicalsImg"
                  className="slider-img sellers-img"
                />
              </div>
              <h5 className="mob-home-slider-title no-ellipsis">Focus Medisales Pvt. Ltd.</h5>
              <h5 className="mob-home-sposore">Sponsored</h5>
            </div>
          </div>
          <div>
            <div className="mob-home-slide">
              <div className="center">
                <img
                  src={SliderImg1}
                  alt="medicalsImg"
                  className="slider-img sellers-img"
                />
              </div>
              <h5 className="mob-home-slider-title no-ellipsis">Sun Pharma Pvt. Ltd.</h5>
              <h5 className="mob-home-sposore">Sponsored</h5>
            </div>
          </div>
          <div>
            <div className="mob-home-slide">
              <div className="center">
                <img
                  src={SliderImg2}
                  alt="medicalsImg"
                  className="slider-img sellers-img"
                />
              </div>
              <h5 className="mob-home-slider-title no-ellipsis">Orphelia Pharma Pvt. Ltd.</h5>
              <h5 className="mob-home-sposore">Sponsored</h5>
            </div>
          </div>
          <div>
            <div className="mob-home-slide">
              <div className="center">
                <img
                  src={SliderImg3}
                  alt="medicalsImg"
                  className="slider-img sellers-img"
                />
              </div>
              <h5 className="mob-home-slider-title no-ellipsis">Vardhman Pharma Pvt. Ltd.</h5>
              <h5 className="mob-home-sposore">Sponsored</h5>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default NearBySellers;
