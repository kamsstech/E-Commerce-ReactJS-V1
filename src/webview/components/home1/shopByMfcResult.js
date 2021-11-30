import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import mfcOne from "../../../assets/images/manufacturer/mfc1.jpg";
import mfcTwo from "../../../assets/images/manufacturer/mfc2.jpg";
import mfcThree from "../../../assets/images/manufacturer/mfc3.jpg";
import mfcFour from "../../../assets/images/manufacturer/mfc4.jpg";
import mfcFive from "../../../assets/images/manufacturer/mfc5.png";
import mfcSix from "../../../assets/images/manufacturer/mfc6.svg";
import Fade from '@material-ui/core/Fade';
import { Link,useHistory } from "react-router-dom";
import { ShopByMfcActionResultEntity } from "../../../common/model";

import Slider from "react-slick";

// interface Props{
//   handleOpenOrderNowModal(): void;
//   shopByMfcRes: ShopByMfcActionResultEntity[];
//   shopByManfacturer():void;
// }


// const { shopByMfcResult } = props;


const ShopByManufacturer = (props) => {
  // const {handleOpenOrderNowModal,shopByMfcRes,shopByManfacturer} = props;
  const {handleOpenOrderNowModal,preferedSellerResult,PreferedSellerCall, shopByManfacturer} = props;

  useEffect(()=>{
    shopByManfacturer()
  },[])

 
    const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
        <span {...props}>{children}</span>
    );
    const settings = {
        infinite: true,
        speed: 1800,
        slidesToShow: 6,
        slidesToScroll: 4,
        autoplay: true,
        // onAfterChange: afterChange,
        autoplaySpeed: 2000,
        // nextArrow: (<SlickButtonFix><div className="arrowsNext" ><SampleNextArrow /></div></SlickButtonFix>),
        // prevArrow: (<SlickButtonFix><div className="arrowsPrev"><SamplePrevArrow /></div></SlickButtonFix>)
    };
    let payload = [
        {
            c_item_img: `${mfcOne}`,
            c_item_name: "Telpres CT 40/6.25 Tablet",
            c_item_code: "1",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 72.50,
        },
        {
            c_item_img: `${mfcTwo}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "2",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 95.50,
        },
        {
            c_item_img: `${mfcThree}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "3",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 65.50,
        },
        {
            c_item_img: `${mfcFour}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "4",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 95.50,
        },
        {
            c_item_img: `${mfcFive}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "5",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 95.50,
        },
        {
            c_item_img: `${mfcSix}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "6",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 95.50,
        },{
            c_item_img: `${mfcOne}`,
            c_item_name: "Telpres CT 40/6.25 Tablet",
            c_item_code: "7",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 72.50,
        },
        {
            c_item_img: `${mfcTwo}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "8",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 95.50,
        },
        {
            c_item_img: `${mfcThree}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "9",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 65.50,
        },
        {
            c_item_img: `${mfcFour}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "10",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 95.50,
        },
        {
            c_item_img: `${mfcFive}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "11",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 95.50,
        },
        {
            c_item_img: `${mfcSix}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "12",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 95.50,
        }
    ];
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    let tempArray = [];

    for (let i = 0; i <= payload.length; i++) {
        tempArray.push(false)
    }
    const [state, setState] = useState({
        open: false,
        Transition: Fade,
        message: "",
    });
    const [iconColor, setIconColor] = useState(tempArray);
    const handleIconColor = (index) => () => {
        let temp = [...iconColor]
        temp[index] = !temp[index];
        setIconColor(temp);
        console.log(index, iconColor)
    }
    const [wishListColor, setWishListColor] = useState(tempArray);
    const handleWishListColor = (index) => () => {
        let temp = [...wishListColor]
        temp[index] = !temp[index];
        setWishListColor(temp);
    }
    const handleClickShortBookAdded = (Transition, name) => () => {
        setTimeout(() =>{
          setState({
            open: true,
            Transition,
            message: `${name.toLowerCase()} successfully added to Shortbook`,
          });
      
        },500)
      
      };
      const handleClickShortBookRemoved = (Transition, name) => () => {
        setTimeout(() =>{
          setState({
            open: true,
            Transition,
            message: `${name.toLowerCase()} removed from Shortbook`,
          });
      
        },500)
      
      };
    const  handleClickWatchListAdded = (Transition, name) => () => {
        setTimeout(() =>{
          setState({
            open: true,
            Transition,
            message: `${name.toLowerCase()} successfully added to Watchlist`,
          });
        },500)
      }
      const  handleClickWatchListRemoved= (Transition, name) => () => {
        setTimeout(() =>{
          setState({
            open: true,
            Transition,
            message: `${name.toLowerCase()} removed from Watchlist`,
          });
        },500)
      }
    const handleCloseButton = () => {
        setState({
            ...state,
            open: false,
        });
    };

  return (
    <div>
      <div className="home-title-section">
        <div>
          <h4>Shop By Manufacturer</h4>
          <h5>Best manufacturer picked for you</h5>
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
          > View All
          </Button>
          
        </div>
      </div>
          <div className="fast-moving-sec">
              <Slider {...settings} className="preferred-seller-slider">

                      {(payload).map((item, index) => (
                              <div key={item.c_item_code} >

                                  <div className="preferred-seller-width" key={item.c_item_code} >
                                      <div className="mfc_tile">
                                          
                                              <Link to={`/`} key={item.c_item_code}>
                                                  <img src={`${item.c_item_img}`} alt="homeSliderImg" />
                                              </Link> 
                                          
                                      </div>
                                  </div>
                              </div>
                              
                          ))}
              </Slider>

              </div>


              



                          {/* {Array.isArray(shopByMfcRes) && shopByMfcRes.length > 0 && 
                      (shopByMfcRes).map((item) =>(
                      //  console.log(item,"item"), 
                      
                    <div className="mfcSec-tile">
                      <a href = {item.value} target="_blank">
                      <img src = {item.key} alt="mfcOne" />
                      </a>
                  </div>
                  
                  ))}   */} 


            </div>
    
  );
};

export default ShopByManufacturer;
