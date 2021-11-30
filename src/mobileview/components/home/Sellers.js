import * as React from "react";
import Swiper from "react-id-swiper";

import Fab from "@material-ui/core/Fab";

//images
import Seller1 from "../../../assets/images/seller1.jpg";
import Seller2 from "../../../assets/images/seller2.jpg";
import Seller3 from "../../../assets/images/seller3.jpg";
import Seller4 from "../../../assets/images/seller4.jpg";
import Seller5 from "../../../assets/images/seller5.jpg";
import Seller6 from "../../../assets/images/seller6.jpg";

const Sellers = () => {
  const params = {
    slidesPerView: 3.5,
    spaceBetween: 16,
    freeMode: true
  };

  return (
    <div className="mob-home-seller-slider-sec">
      <div className="mob-slider-sec">
        <div>
          <h3 className="mob-slider-title">
            Sellers Inspired By Your Purchase
          </h3>
          <h5 className="mob-slider-subtitle">
            Pick your favourite sellers & order
          </h5>
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
      <Swiper {...params}>
        <div>
          <div className="mob-home-seller-slider">
            <img src={Seller1} alt="Seller1" />
          </div>
        </div>
        <div>
          <div className="mob-home-seller-slider">
            <img src={Seller2} alt="Seller2" />
          </div>
        </div>
        <div>
          <div className="mob-home-seller-slider">
            <img src={Seller3} alt="Seller3" />
          </div>
        </div>
        <div>
          <div className="mob-home-seller-slider">
            <img src={Seller4} alt="Seller4" />
          </div>
        </div>
        <div>
          <div className="mob-home-seller-slider">
            <img src={Seller5} alt="Seller5" />
          </div>
        </div>
        <div>
          <div className="mob-home-seller-slider">
            <img src={Seller6} alt="Seller6" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Sellers;
