import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Slider from "react-slick";
import SellerOne from "../../../assets/images/seller1.jpg";
import SellerTwo from "../../../assets/images/seller2.jpg";
import SellerThree from "../../../assets/images/seller3.jpg";
import SellerFour from "../../../assets/images/seller4.jpg";
import SellerFive from "../../../assets/images/seller5.jpg";
import SellerSix from "../../../assets/images/seller6.jpg";



const PreferredSeller = (props) => {
  const { handleOpenOrderNowModal, preferedSellerResult, PreferedSellerCall } = props;

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  useEffect(() => {
    PreferedSellerCall()
  }, [])

  console.log(preferedSellerResult, "<<PreferedsellerResult")
  return (
    <div>
      <div className="home-title-section">
        <div>
          <h4>Preferred Sellers Inspired By Your Purchase</h4>
          <h5>Pick your favourite sellers & order</h5>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className="home-title-sectionbtn-green animate-shimmmer"
            onClick={handleOpenOrderNowModal}
          >
            Order Now
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="home-title-sectionbtn"
          >
            View All
          </Button>
        </div>
      </div>


      {/* <div className="preferred-seller-sec">
      <div className="preferred-seller-width">
            <div className="preferred-seller-tile">
              <a href ="" target="_blank">
              <img src = {SellerOne} alt="SellerOne" />
              </a>
            </div>
        </div>

        <div className="preferred-seller-width">
            <div className="preferred-seller-tile">
              <a href ="" target="_blank">
              <img src = {SellerTwo} alt="SellerTwo" />
              </a>
            </div>
        </div>
        <div className="preferred-seller-width">
            <div className="preferred-seller-tile">
              <a href ="" target="_blank">
              <img src = {SellerThree} alt="SellerThree" />
              </a>
            </div>
        </div>
        <div className="preferred-seller-width">
            <div className="preferred-seller-tile">
              <a href ="" target="_blank">
              <img src = {SellerFour} alt="SellerFour" />
              </a>
            </div>
        </div>
        <div className="preferred-seller-width">
            <div className="preferred-seller-tile">
              <a href ="" target="_blank">
              <img src = {SellerFive} alt="SellerFive" />
              </a>
            </div>
        </div>
        <div className="preferred-seller-width">
            <div className="preferred-seller-tile">
              <a href ="" target="_blank">
              <img src = {SellerSix} alt="SellerSix" />
              </a>
            </div>
        </div>
      </div> */}



      <div className="preferred-seller-sec">
        {/* <Slider {...settings} className="preferred-seller-slider"> */}
        {Array.isArray(preferedSellerResult.payload) && preferedSellerResult.payload.length > 0 &&
          (preferedSellerResult.payload).map((item) => (
            
            <div>
              <div className="preferred-seller-tile">
                <a href={item.value} target="_blank">
                  <img src={item.c_seller_image} alt="SellerOne" />
                </a>
              </div>
            </div>
          ))}

        {/* <div>
            <div className="preferred-seller-tile">
            <a href ={Array.isArray(preferedSellerResult.payload) && preferedSellerResult.payload.length > 0 ? preferedSellerResult.payload[0].value : ""} target="_blank">
              <img src={Array.isArray(preferedSellerResult.payload) && preferedSellerResult.payload.length > 0 ? preferedSellerResult.payload[0].key : ""} alt="SellerOne" />
              </a> 
            </div>
          </div>
          <div>
            <div className="preferred-seller-tile">
            <a href ={Array.isArray(preferedSellerResult.payload) && preferedSellerResult.payload.length > 0 ? preferedSellerResult.payload[1].value : ""} target="_blank">
              <img src={Array.isArray(preferedSellerResult.payload) && preferedSellerResult.payload.length > 0 ? preferedSellerResult.payload[1].key : ""} alt="SellerOne" />
              </a> 
            </div>
          </div>
          <div>
            <div className="preferred-seller-tile">
            <a href ={Array.isArray(preferedSellerResult.payload) && preferedSellerResult.payload.length > 0 ? preferedSellerResult.payload[2].value : ""} target="_blank">
              <img src={Array.isArray(preferedSellerResult.payload) && preferedSellerResult.payload.length > 0 ? preferedSellerResult.payload[2].key : ""} alt="SellerOne" />
              </a> 
            </div>
          </div>
          <div>
            <div className="preferred-seller-tile">
            <a href ={Array.isArray(preferedSellerResult.payload) && preferedSellerResult.payload.length > 0 ? preferedSellerResult.payload[3].value : ""} target="_blank">
              <img src={Array.isArray(preferedSellerResult.payload) && preferedSellerResult.payload.length > 0 ? preferedSellerResult.payload[3].key : ""} alt="SellerOne" />
              </a> 
            </div>
          </div>
          <div>
            <div className="preferred-seller-tile">
            <a href ={Array.isArray(preferedSellerResult.payload) && preferedSellerResult.payload.length > 0 ? preferedSellerResult.payload[4].value : ""} target="_blank">
              <img src={Array.isArray(preferedSellerResult.payload) && preferedSellerResult.payload.length > 0 ? preferedSellerResult.payload[4].key : ""} alt="SellerOne" />
              </a> 
            </div>
          </div> */}


        {/* </Slider> */}
      </div>
    </div>
  );
};

export default PreferredSeller;
