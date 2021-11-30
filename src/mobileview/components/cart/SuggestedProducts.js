import * as React from "react";
import Swiper from "react-id-swiper";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

//images
import SliderImg from "../../../assets/images/home-slider-img.jpg";
import Shortbook from "../../../assets/mobImages/shortbook-grey/shortbook.png";
import Item1 from "../../../assets/mobImages/item1.png";
import Item2 from "../../../assets/mobImages/item2.png";
import Item3 from "../../../assets/mobImages/item3.png";
import Item4 from "../../../assets/mobImages/item4.png";
import Item5 from "../../../assets/mobImages/item5.png";
import Item6 from "../../../assets/mobImages/item6.png";

const SuggestedProducts = () => {
  const params = {
    slidesPerView: 2.2,
    spaceBetween: 16,
    freeMode: true
  };

  return (
    <div className="mob-cart-items-wrapper">
      <div className="mob-home-seller-slider-sec">
        <div className="mob-slider-sec">
          <div>
            <h3 className="mob-slider-title">Suggested Products</h3>
          </div>
        </div>
        <div className="mob-home-slider">
          <Swiper {...params}>
            <div>
              <div className="mob-home-slide top-ordered-slider">
                <div className="center shortbook-sec">
                  <img
                    src={Shortbook}
                    alt="Shortbook"
                    className="shortbook-icon"
                  />
                  <img
                    src={Item1}
                    alt="homeSliderImg"
                    className="slider-img"
                  />
                </div>
                <h5 className="mob-home-slider-title">Bronko Med Syrup</h5>
                <h6 className="mob-home-slider-subtitle">
                  Pack Size: 60ml syrup
                </h6>
                <h6 className="mob-home-slider-mtp">MRP 28.00</h6>
                <h6 className="mob-home-slider-contains">
                  <span>Contains</span>
                  <span className="contains-ele">Paracetamol</span>
                </h6>
                <Button
                  variant="contained"
                  color="primary"
                  className="fast-moving-addtocart mob-home-addtocart "
                >
                  Add To Cart
                </Button>
              </div>
            </div>
            <div>
              <div className="mob-home-slide top-ordered-slider">
                <div className="center shortbook-sec">
                  <img
                    src={Shortbook}
                    alt="Shortbook"
                    className="shortbook-icon"
                  />
                  <img
                    src={Item2}
                    alt="homeSliderImg"
                    className="slider-img"
                  />
                </div>
                <h5 className="mob-home-slider-title">Refort 200ml Syrup</h5>
                <h6 className="mob-home-slider-subtitle">
                  Pack Size: 60ml syrup
                </h6>
                <h6 className="mob-home-slider-mtp">MRP 28.00</h6>
                <h6 className="mob-home-slider-contains">
                  <span>Contains</span>
                  <span className="contains-ele">Paracetamol</span>
                </h6>
                <Button
                  variant="contained"
                  color="primary"
                  className="fast-moving-addtocart mob-home-addtocart "
                >
                  Add To Cart
                </Button>
              </div>
            </div>
            <div>
              <div className="mob-home-slide top-ordered-slider">
                <div className="center shortbook-sec">
                  <img
                    src={Shortbook}
                    alt="Shortbook"
                    className="shortbook-icon"
                  />
                  <img
                    src={Item3}
                    alt="homeSliderImg"
                    className="slider-img"
                  />
                </div>
                <h5 className="mob-home-slider-title">Benadryl Cough Syrup</h5>
                <h6 className="mob-home-slider-subtitle">
                  Pack Size: 60ml syrup
                </h6>
                <h6 className="mob-home-slider-mtp">MRP 28.00</h6>
                <h6 className="mob-home-slider-contains">
                  <span>Contains</span>
                  <span className="contains-ele">Paracetamol</span>
                </h6>
                <Button
                  variant="contained"
                  color="primary"
                  className="fast-moving-addtocart mob-home-addtocart "
                >
                  Add To Cart
                </Button>
              </div>
            </div>
            <div>
              <div className="mob-home-slide top-ordered-slider">
                <div className="center shortbook-sec">
                  <img
                    src={Shortbook}
                    alt="Shortbook"
                    className="shortbook-icon"
                  />
                  <img
                    src={Item4}
                    alt="homeSliderImg"
                    className="slider-img"
                  />
                </div>
                <h5 className="mob-home-slider-title">ChildLife Cough Syrup</h5>
                <h6 className="mob-home-slider-subtitle">
                  Pack Size: 60ml syrup
                </h6>
                <h6 className="mob-home-slider-mtp">MRP 28.00</h6>
                <h6 className="mob-home-slider-contains">
                  <span>Contains</span>
                  <span className="contains-ele">Paracetamol</span>
                </h6>
                <Button
                  variant="contained"
                  color="primary"
                  className="fast-moving-addtocart mob-home-addtocart "
                >
                  Add To Cart
                </Button>
              </div>
            </div>
            <div>
              <div className="mob-home-slide top-ordered-slider">
                <div className="center shortbook-sec">
                  <img
                    src={Shortbook}
                    alt="Shortbook"
                    className="shortbook-icon"
                  />
                  <img
                    src={Item5}
                    alt="homeSliderImg"
                    className="slider-img"
                  />
                </div>
                <h5 className="mob-home-slider-title">Bronko Med Syrup</h5>
                <h6 className="mob-home-slider-subtitle">
                  Pack Size: 60ml syrup
                </h6>
                <h6 className="mob-home-slider-mtp">MRP 28.00</h6>
                <h6 className="mob-home-slider-contains">
                  <span>Contains</span>
                  <span className="contains-ele">Paracetamol</span>
                </h6>
                <Button
                  variant="contained"
                  color="primary"
                  className="fast-moving-addtocart mob-home-addtocart "
                >
                  Add To Cart
                </Button>
              </div>
            </div>
            <div>
              <div className="mob-home-slide top-ordered-slider">
                <div className="center shortbook-sec">
                  <img
                    src={Shortbook}
                    alt="Shortbook"
                    className="shortbook-icon"
                  />
                  <img
                    src={Item6}
                    alt="homeSliderImg"
                    className="slider-img"
                  />
                </div>
                <h5 className="mob-home-slider-title">Dolo 250 MG Syrup</h5>
                <h6 className="mob-home-slider-subtitle">
                  Pack Size: 60ml syrup
                </h6>
                <h6 className="mob-home-slider-mtp">MRP 28.00</h6>
                <h6 className="mob-home-slider-contains">
                  <span>Contains</span>
                  <span className="contains-ele">Paracetamol</span>
                </h6>
                <Button
                  variant="contained"
                  color="primary"
                  className="fast-moving-addtocart mob-home-addtocart "
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SuggestedProducts;
