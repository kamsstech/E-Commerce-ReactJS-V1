import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';
import Grow from "@material-ui/core/Grow";

import homeSliderImg from "../../../assets/images/home-slider-img.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { PdpPageItemsEntity, AlternativesEntity, AlternativesResultEntity } from "../../../common/model";
import SellerDropDown from "../orderHistory/SellerDropDown";

import medicine from "../../../assets/images/medicine-syrup-plp-page.jpg"
import wishlist from "../../../assets/images/wishlist_plp_page.svg"
import wishlist_colorIcon from "../../../assets/images/wishlist_colorIcon.svg";
import commerce_offer from "../../../assets/images/commerce-and-shopping_plp_page.svg"
import shortbook_icon from "../../../assets/images/shortbook_pdpIcon.svg";
import shortbook_colorIcon from "../../../assets/images/shortbook_colorIcon.svg";
import BackArrow from "../../../assets/images/down-arrow-line-grey.svg";
import ForwardArrow from "../../../assets/images/leftarrowline.svg";

import oral_sus from "../../../assets/images/oral_sus.svg";
import capsules from "../../../assets/images/capsules.svg";
import injectable from "../../../assets/images/injectable.svg";
import tablet from "../../../assets/images/tablet.svg";
import drops from "../../../assets/images/drops.svg";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div >
      <img src={BackArrow} alt="arrow" />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div >
      <img src={ForwardArrow} alt="arrow" />
    </div>
  );
}

function GrowTransition(props) {
  return <Grow {...props} />;
}
const Alternatives = (props) => {
  const { match, GetPdpPageItems, pdpPageItemsResult, GetPdpPageAlternatives, pdpPageAlternativesResult } = props;
  const [count, setCount] = useState([1, 2, 3, 4]);
  const [errorMsgAlternatives, setErrorMsgAlternatives] = useState("")
  useEffect(() => {
    if (!pdpPageAlternativesResult.loading) {
      setErrorMsgAlternatives(pdpPageAlternativesResult.error)
    }
  }, [!pdpPageAlternativesResult.loading]);

  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}>{children}</span>
  );

  var settings = {
    infinite: false,
    speed: 1200,
    slidesToShow: 4.5,
    slidesToScroll: 4.5,
    autoplay: false,
    // onAfterChange: afterChange,
    // autoplaySpeed: 2000,
    nextArrow: (<SlickButtonFix><div className="arrowsNext" ><SampleNextArrow /></div></SlickButtonFix>),
    prevArrow: (<SlickButtonFix><div className="arrowsPrev"><SamplePrevArrow /></div></SlickButtonFix>)
  };

  const Data = pdpPageItemsResult.payload;
  const c_cont_code = (Data && Data.j_sub_detail.c_cont_code);
  const c_item_name = (Data && Data.c_item_name.toLowerCase())

  const limitNumber = 10;
  useEffect(() => {
    c_cont_code && GetPdpPageAlternatives(c_cont_code, limitNumber);
  }, [c_cont_code])

  let array = {
    key: 123,
    image: medicine,
    wishList: wishlist,
    commerce_offer: commerce_offer,
    title: "Bronlo Med Syrup",
    pack_name: "100 ml syrup",
    mrp: "196",
    medicine_contains: "Paracetamol"
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  // console.log("pdpPageAlternativesResult", pdpPageAlternativesResult)
  let tempArray = [];
  let payloadLength = Array.isArray(pdpPageAlternativesResult.payload) && pdpPageAlternativesResult.payload.length
  for (let i = 0; i <= payloadLength; i++) {
    tempArray.push(false)
  }

  const [state, setState] = useState({
    open: false,
    Transition: Fade,
    message: "",
  });

  const [iconColor, setIconColor] = useState(tempArray);
  const handleIconColor = ( index) => () => {
    let temp = [...iconColor]
    temp[index] = !temp[index];
    setIconColor(temp);
    console.log(index, iconColor)
  }
  const [wishListColor, setWishListColor] = useState(tempArray);
  const handleWishListColor = ( index) => () => {
    let temp = [...wishListColor]
    temp[index] = !temp[index];
    setWishListColor(temp);
  }
  const handleClickShortBookAdded = (Transition, name) => () => {
    setTimeout(() => {
      setState({
        open: true,
        Transition,
        message: `${name.toLowerCase()} successfully added to Shortbook`,
      });
    },500)   
  };
  const handleClickShortBookRemoved = (Transition, name) => () => {
    setTimeout(() => {
      setState({
        open: true,
        Transition,
        message: `${name.toLowerCase()} removed from Shortbook`,
      });
    },500)   
  };
  const  handleClickWatchListAdded= (Transition, name) => () => {
    setTimeout(() =>{
      setState({
        open: true,
        Transition,
        message: `${name.toLowerCase()} successfully added to Watchlist`,
      });
    },500)
    
  };
  const   handleClickWatchListRemoved = (Transition, name) => () => {
    setTimeout(() =>{
      setState({
        open: true,
        Transition,
        message: `${name.toLowerCase()} removed from Watchlist`,
      });
    },500)
    
  };
 

  const handleCloseButton = () => {
    setState({
      ...state,
      open: false,
    });
  };
  return (
    <div>
      <p className="login-error-msg">{errorMsgAlternatives}</p>
      {Array.isArray(pdpPageAlternativesResult.payload) && pdpPageAlternativesResult.payload.length !== 0 &&
        <>
          <div className="home-title-section">
            <div>
              <h4 className="pdp-alter-title">90 Alternates {c_item_name}</h4>
            </div>
            <div>
              <Link to={`/plp/${c_cont_code}/${c_item_name}/`} >
                <Button
                  variant="contained"
                  color="primary"
                  className="home-title-sectionbtn"
                >
                  View All
          </Button>
              </Link>
            </div>
          </div>


          <div className="fast-moving-sec ">



            <div className="fast-moving-sec ">
              <Slider {...settings} className="preferred-seller-slider">
                {(pdpPageAlternativesResult.payload).map((item, index) => (
                  <div key={item.c_item_code} >

                    <div key={item.c_item_code} className="fast-moving-sec-25 sec-25" >
                      <div className="fast-moving-tile" >
                        <div className="fast-moving-tile-imgsec" >

                          <Link to={`/pdp/${item.c_item_code}/${item.c_item_name}`} >
                            {item.a_image_urls && item.a_image_urls.length > 0 &&

                              // <img src={item.a_image_urls[0]} alt="homeSliderImg" onClick={() => GetPdpPageItems(item.c_item_code)} />}
                              item.c_item_name.toLowerCase().includes("cap") ? <img src={capsules} alt="homeSliderImg-1" className="imgsec" /> :
                              (item.c_item_name.toLowerCase().includes("oral_sus") ? <img src={oral_sus} alt="homeSliderImg-1" className="imgsec" /> :
                                  (item.c_item_name.toLowerCase().includes("injectable") ? <img src={injectable} alt="homeSliderImg-1" className="imgsec" /> :
                                      (item.c_item_name.toLowerCase().includes("tab") ? <img src={tablet} alt="homeSliderImg-1" className="imgsec" /> :
                                          (item.c_item_name.toLowerCase().includes("drops") ? <img src={drops} alt="homeSliderImg-1" className="imgsec" /> : <img src={tablet} alt="homeSliderImg-1" className="imgsec" />
                                          ))
                                  ))
                        
                        }

                            <img src={array.commerce_offer} alt="wishListImg-1" className="fast-moving-tile-offer" />
                          </Link>
                          
                          <div   onClick={handleWishListColor( index)}   >
                          <Tooltip title="Watchlist" TransitionComponent={Zoom}>
                          {wishListColor[index] === true ? 
                          <img src={wishlist_colorIcon} alt="wishListImg-1" className="fast-moving-tile-fav color" onClick={handleClickWatchListRemoved(GrowTransition,  item.c_item_name)} /> :  
                          <img src={wishlist} alt="wishListImg-1" className="fast-moving-tile-fav" onClick={handleClickWatchListAdded(GrowTransition,  item.c_item_name)}/>}
                           </Tooltip>
                            </div>
                         
                        </div>
                        <div className="fast-moving-tile-details">
                          <div onClick={() => GetPdpPageItems(item.c_item_code)}>
                            <Link to={`/pdp/${item.c_item_code}/${item.c_item_name}`} >
                            <Tooltip title={item.c_item_name.toLowerCase()} TransitionComponent={Zoom}>
                              <h4 className="medicine-title">{item.c_item_name.toLowerCase()}</h4>
                              </Tooltip>
                              <h5 className="medicine-packsize">Pack Size: {item.j_sub_detail.c_pack_name}</h5>
                              <h5 className="medicine-mrp">MRP {item.n_mrp}</h5>
                              <h5 className="medicine-contains">
                                Contains<span>{item.j_sub_detail.c_cont_name}</span>
                              </h5>
                            </Link>
                          </div>
                          <div className="fast-moving-buttons-sec">
                            <Button
                              variant="contained"
                              color="primary"
                              className="fast-moving-addtocart"
                              onClick={handleOpen}
                            >
                              Add To Cart
                            </Button>
                            {console.log(index, iconColor)}
                            <Tooltip title="Shortbook" TransitionComponent={Zoom}>
                              <div className="addtoshortbook-icon-sec" onClick={handleIconColor( index)}   >
                                {iconColor[index] === true ? <img src={shortbook_colorIcon} alt="addtoshortbook-icon-1" className="addtoshortbook-icon"  onClick={handleClickShortBookRemoved(GrowTransition,  item.c_item_name)}/>
                                  : <img src={shortbook_icon} alt="addtoshortbook-icon-1" className="addtoshortbook-icon" onClick={handleClickShortBookAdded(GrowTransition,  item.c_item_name)} />}
                              </div>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                ))}
              </Slider>
            </div>



          </div>
        </>


      }

      <Snackbar
        open={state.open}
        onClose={handleCloseButton}
        TransitionComponent={state.Transition}
        message={state.message}
        key={state.Transition.name}
        autoHideDuration={5000}
        action={
          <React.Fragment>
            <Checkbox
              icon={<CheckBoxIcon />}
              color="primary"
              disabled
              className="msg-checkbox checkbox-listItem"
            />

          </React.Fragment>
        }
      />
       <SellerDropDown
        isOpen={open} setIsOpen={setOpen} />
    </div >
  )
}

export default Alternatives;