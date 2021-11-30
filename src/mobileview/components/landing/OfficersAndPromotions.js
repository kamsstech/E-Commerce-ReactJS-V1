import * as React from "react";
import Fab from "@material-ui/core/Fab";
import Swiper from "react-id-swiper";

//images
import offersImg from "../../../assets/images/offers-img.webp";
import offersImg1 from "../../../assets/images/offers-img1.webp";
import directionImg from "../../../assets/images/direction.svg";

const OfficersAndPromotions = () => {
  const params = {
    slidesPerView: 2.3,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      clickable: true
    }
  };
  return (
    <div>
      <div className="mob-slider-sec">
        <div>
          <h3 className="mob-slider-title">Offers & Promotions </h3>
          <h5 className="mob-slider-subtitle">See all offers near by you</h5>
        </div>
        <div>
          <Fab
            variant="extended"
            size="small"
            color="default"
            className="mob-viewall-button"
            aria-label="add"
          >
            View All
          </Fab>
        </div>
      </div>
      <div className="mob-home-slider">
        <Swiper {...params}>
          <div>
            <div className="mob-home-slide p-0">
              <img
                src={offersImg}
                alt="offersImg"
                className="slider-offer-img"
              />
              <div className="p-1">
                <h5 className="mob-home-slider-title">Om Medical Store</h5>
                <div className="dis-direction">
                  <h6 className="mob-home-slider-subtitle">1.1 Km</h6>
                  <div className="dis-direction-imgsec">
                    <h6 className="mob-home-slider-contains">
                      <span className="contains-ele">+6</span>
                    </h6>
                    <img
                      src={directionImg}
                      alt="directionImg"
                      className="direction-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mob-home-slide p-0">
              <img
                src={offersImg1}
                alt="offersImg"
                className="slider-offer-img"
              />
              <div className="p-1">
                <h5 className="mob-home-slider-title">Medico Pharmacy</h5>
                <div className="dis-direction">
                  <h6 className="mob-home-slider-subtitle">1.5 Km</h6>
                  <div className="dis-direction-imgsec">
                    <h6 className="mob-home-slider-contains">
                      <span className="contains-ele">+6</span>
                    </h6>
                    <img
                      src={directionImg}
                      alt="directionImg"
                      className="direction-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mob-home-slide p-0">
              <img
                src={offersImg}
                alt="offersImg"
                className="slider-offer-img"
              />
              <div className="p-1">
                <h5 className="mob-home-slider-title">Om Medical Store</h5>
                <div className="dis-direction">
                  <h6 className="mob-home-slider-subtitle">1.1 Km</h6>
                  <div className="dis-direction-imgsec">
                    <h6 className="mob-home-slider-contains">
                      <span className="contains-ele">+6</span>
                    </h6>
                    <img
                      src={directionImg}
                      alt="directionImg"
                      className="direction-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mob-home-slide p-0">
              <img
                src={offersImg1}
                alt="offersImg"
                className="slider-offer-img"
              />
              <div className="p-1">
                <h5 className="mob-home-slider-title">Medico Pharmacy</h5>
                <div className="dis-direction">
                  <h6 className="mob-home-slider-subtitle">1.5 Km</h6>
                  <div className="dis-direction-imgsec">
                    <h6 className="mob-home-slider-contains">
                      <span className="contains-ele">+6</span>
                    </h6>
                    <img
                      src={directionImg}
                      alt="directionImg"
                      className="direction-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mob-home-slide p-0">
              <img
                src={offersImg}
                alt="offersImg"
                className="slider-offer-img"
              />
              <div className="p-1">
                <h5 className="mob-home-slider-title">Om Medical Store</h5>
                <div className="dis-direction">
                  <h6 className="mob-home-slider-subtitle">1.1 Km</h6>
                  <div className="dis-direction-imgsec">
                    <h6 className="mob-home-slider-contains">
                      <span className="contains-ele">+6</span>
                    </h6>
                    <img
                      src={directionImg}
                      alt="directionImg"
                      className="direction-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mob-home-slide p-0">
              <img
                src={offersImg1}
                alt="offersImg"
                className="slider-offer-img"
              />
              <div className="p-1">
                <h5 className="mob-home-slider-title">Medico Pharmacy</h5>
                <div className="dis-direction">
                  <h6 className="mob-home-slider-subtitle">1.5 Km</h6>
                  <div className="dis-direction-imgsec">
                    <h6 className="mob-home-slider-contains">
                      <span className="contains-ele">+6</span>
                    </h6>
                    <img
                      src={directionImg}
                      alt="directionImg"
                      className="direction-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default OfficersAndPromotions;
