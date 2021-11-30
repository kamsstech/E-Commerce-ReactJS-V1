import * as React from "react";
import Swiper from "react-id-swiper";

import Fab from "@material-ui/core/Fab";

//images
import MFC1 from "../../../assets/images/mfc1.jpg";
import MFC2 from "../../../assets/images/mfc2.jpg";
import MFC3 from "../../../assets/images/mfc3.jpg";
import MFC4 from "../../../assets/images/mfc4.jpg";
import MFC5 from "../../../assets/images/mfc5.svg";
import MFC6 from "../../../assets/images/mfc6.jpg";

const ShopByMfc = () => {
  const params = {
    slidesPerView: 3.5,
    spaceBetween: 16,
    freeMode: true
  };

  return (
    <div className="mob-home-seller-slider-sec">
      <div className="mob-slider-sec">
        <div>
          <h3 className="mob-slider-title">Shop By Manufacturer</h3>
          <h5 className="mob-slider-subtitle">
            Best manufacturer picked for you
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
          <div className="mob-home-mfc-slider">
            <img src={MFC1} alt="MFC1" />
          </div>
        </div>
        <div>
          <div className="mob-home-mfc-slider">
            <img src={MFC2} alt="MFC2" />
          </div>
        </div>
        <div>
          <div className="mob-home-mfc-slider">
            <img src={MFC3} alt="MFC3" />
          </div>
        </div>
        <div>
          <div className="mob-home-mfc-slider">
            <img src={MFC4} alt="MFC4" />
          </div>
        </div>
        <div>
          <div className="mob-home-mfc-slider">
            <img src={MFC5} alt="MFC5" />
          </div>
        </div>
        <div>
          <div className="mob-home-mfc-slider">
            <img src={MFC6} alt="MFC6" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ShopByMfc;
