import * as React from "react";
import Swiper from "react-id-swiper";

import Fab from "@material-ui/core/Fab";

//images
import Offers1 from "../../../assets/images/offers1.jpg";
import Offers2 from "../../../assets/images/offers2.jpg";
import Offers3 from "../../../assets/images/offers3.jpg";

const Offers = (props) => {
  const {offersResult,GetOffers} = props;

  const params = {
    slidesPerView: 1.5,
    spaceBetween: 12,
    freeMode: true
  };

  return (
    <div className="home-grey-bg">
      <div className="mob-home-seller-slider-sec">
        <div className="mob-slider-sec">
          <div>
            <h3 className="mob-slider-title">
              Limited Period Offers By Distributors
            </h3>
            <h5 className="mob-slider-subtitle">Pick best offer & order</h5>
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
        {Array.isArray(offersResult.payload?.j_list) && offersResult.payload?.j_list.length > 0 && (offersResult.payload?.j_list).map((item, index) => (
          <div key={index} >
            <div className="mob-home-offer-slider" style={{width:"100%"}}>
              <img 
              src={`${item.c_offer_image}`} 
              alt="Offers1" 
              onError={(e) => {
                e.target.src = Offers1
             }}
              />
            </div>
          </div>
          
         ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Offers;
