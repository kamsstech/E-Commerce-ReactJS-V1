import * as React from "react";
import Button from "@material-ui/core/Button";
import offerOne from "../../../assets/images/offer-1@2x.png";
import offerTwo from "../../../assets/images/offer-2@2x.png";
import offerThree from "../../../assets/images/offer-3@2x.png";
import { OffersReducerEntity, OffersResultEntity } from "../../../common/model";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link, useHistory } from "react-router-dom";

// interface Props {
//   GetOffers(): void;
//   offersResult: OffersReducerEntity;
// }



const Offers = (props) => {
  const {offersResult,GetOffers} = props;
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}>{children}</span>
);
const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    // onAfterChange: afterChange,
    autoplaySpeed: 3000,
    // nextArrow: (<SlickButtonFix><div className="arrowsNext" ><SampleNextArrow /></div></SlickButtonFix>),
    // prevArrow: (<SlickButtonFix><div className="arrowsPrev"><SamplePrevArrow /></div></SlickButtonFix>)
};
let payload = [
    {
        c_item_img: `${offerOne}`,
        c_item_name: "Telpres CT 40/6.25 Tablet",
        c_item_code: "1",
        c_pack_name: " Strip of 10 tablets",
        c_cont_name: "Telmisartan(40mg...",
        n_mrp: 72.50,
    },
    {
        c_item_img: `${offerTwo}`,
        c_item_name: "Telpres CT 40/12.5 Tablet",
        c_item_code: "2",
        c_pack_name: " Strip of 10 tablets",
        c_cont_name: "Telmisartan(40mg...",
        n_mrp: 95.50,
    },
    {
        c_item_img: `${offerThree}`,
        c_item_name: "Telpres CT 40/12.5 Tablet",
        c_item_code: "3",
        c_pack_name: " Strip of 10 tablets",
        c_cont_name: "Telmisartan(40mg...",
        n_mrp: 65.50,
    },
    {
        c_item_img: `${offerOne}`,
        c_item_name: "Telpres CT 40/12.5 Tablet",
        c_item_code: "4",
        c_pack_name: " Strip of 10 tablets",
        c_cont_name: "Telmisartan(40mg...",
        n_mrp: 95.50,
    },
    {
        c_item_img: `${offerTwo}`,
        c_item_name: "Telpres CT 40/12.5 Tablet",
        c_item_code: "5",
        c_pack_name: " Strip of 10 tablets",
        c_cont_name: "Telmisartan(40mg...",
        n_mrp: 95.50,
    },
    {
        c_item_img: `${offerThree}`,
        c_item_name: "Telpres CT 40/12.5 Tablet",
        c_item_code: "6",
        c_pack_name: " Strip of 10 tablets",
        c_cont_name: "Telmisartan(40mg...",
        n_mrp: 95.50,
    }, {
        c_item_img: `${offerOne}`,
        c_item_name: "Telpres CT 40/6.25 Tablet",
        c_item_code: "7",
        c_pack_name: " Strip of 10 tablets",
        c_cont_name: "Telmisartan(40mg...",
        n_mrp: 72.50,
    },
    {
        c_item_img: `${offerTwo}`,
        c_item_name: "Telpres CT 40/12.5 Tablet",
        c_item_code: "8",
        c_pack_name: " Strip of 10 tablets",
        c_cont_name: "Telmisartan(40mg...",
        n_mrp: 95.50,
    },
    {
        c_item_img: `${offerThree}`,
        c_item_name: "Telpres CT 40/12.5 Tablet",
        c_item_code: "9",
        c_pack_name: " Strip of 10 tablets",
        c_cont_name: "Telmisartan(40mg...",
        n_mrp: 65.50,
    },
    {
        c_item_img: `${offerOne}`,
        c_item_name: "Telpres CT 40/12.5 Tablet",
        c_item_code: "10",
        c_pack_name: " Strip of 10 tablets",
        c_cont_name: "Telmisartan(40mg...",
        n_mrp: 95.50,
    },
    {
        c_item_img: `${offerOne}`,
        c_item_name: "Telpres CT 40/12.5 Tablet",
        c_item_code: "11",
        c_pack_name: " Strip of 10 tablets",
        c_cont_name: "Telmisartan(40mg...",
        n_mrp: 95.50,
    },
    {
        c_item_img: `${offerTwo}`,
        c_item_name: "Telpres CT 40/12.5 Tablet",
        c_item_code: "12",
        c_pack_name: " Strip of 10 tablets",
        c_cont_name: "Telmisartan(40mg...",
        n_mrp: 95.50,
    }
];
 
  
 useEffect(() =>{
  GetOffers()
 },[])
  return (
    <div>
      <div className="home-title-section">
        <div>
          <h4>Limited Period Offers By Distributors</h4>
          <h5>Pick best offer & order</h5>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className="home-title-sectionbtn"
          >
            View All
          </Button>
        </div>
      </div>
      {/* <div className="offerSec">
        {Array.isArray(offersResult.payload) && offersResult.payload.length > 0 && (offersResult.payload).map((item) =>(
           <div className="offerSec-tile">
          <a href ={item.value} target="_blank">
          <img src={item.key} alt="offersOne" />
      
        </a> 
        </div>
        ))}

      </div> */}

      <div className="fast-moving-sec">
                <Slider {...settings} className="preferred-seller-slider">

                    {(payload).map((item, index) => (
                        <div key={item.c_item_code} >

                            <div className="preferred-seller-width" key={item.c_item_code} >
                                <div className="offer-tile">

                                    <Link to={`/`} key={item.c_item_code}>
                                        <img src={`${item.c_item_img}`} alt="homeSliderImg" />
                                    </Link>

                                </div>
                            </div>
                        </div>

                    ))}
                </Slider>

            </div>


    </div>
  );
};

export default Offers;
