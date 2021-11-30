import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Slider from "react-slick";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';
import Grow from "@material-ui/core/Grow";
// import SellerDropDown from "../orderHistory/sellerDropDown";

import wishlist from "../../../assets/images/wishlist_plp_page.svg"
import wishlist_colorIcon from "../../../assets/images/wishlist_colorIcon.svg";
import commerce_offer from "../../../assets/images/commerce-and-shopping_plp_page.svg"
import newLauchesimageBig from "../../../assets/images/newLauchesimageBig.png";
import shortbook_icon from "../../../assets/images/shortbook_pdpIcon.svg";
import shortbook_colorIcon from "../../../assets/images/shortbook_colorIcon.svg";
import BackArrow from "../../../assets/images/down-arrow-line-grey.svg";
import ForwardArrow from "../../../assets/images/leftarrowline.svg";

import product1 from "../../../assets/images/products/product-1-2x.png";
import product2 from "../../../assets/images/products/product-2@2x.png";
import product3 from "../../../assets/images/products/product-3@2x.png";
import product4 from "../../../assets/images/products/product-4@2x.png";
import product5 from "../../../assets/images/products/product-5@2x.png";

import { Link } from "react-router-dom";


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
const NewLaunches = () => {
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

    let payload = [
        {
            c_item_img: `${product1}`,
            c_item_name: "Telpres CT 40/6.25 Tablet",
            c_item_code: "1",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 72.50,
        },
        {
            c_item_img: `${product2}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "2",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 95.50,
        },
        {
            c_item_img: `${product3}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "3",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 65.50,
        },
        {
            c_item_img: `${product4}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "4",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 95.50,
        },
        {
            c_item_img: `${product5}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "5",
            c_pack_name: " Strip of 10 tablets",
            c_cont_name: "Telmisartan(40mg...",
            n_mrp: 95.50,
        },
        {
            c_item_img: `${product1}`,
            c_item_name: "Telpres CT 40/12.5 Tablet",
            c_item_code: "6",
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
                    <h4>New Launches</h4>
                    <h5>All over India</h5>
                </div>
                <div>

                    {/* <Link to="/plp" >
                        <Button
                            variant="contained"
                            color="primary"
                            className="home-title-sectionbtn"

                        >
                            View All
                        </Button>
                    </Link> */}
                </div>
            </div>


            <div className="fast-moving-sec">
                <Slider {...settings} className="preferred-seller-slider">
                    {(payload).map((item, index) => (
                        <div key={item.c_item_code} >
                            <div className="fast-moving-sec-25" key={item.c_item_code} >
                                <div className="fast-moving-tile">
                                    <div className="fast-moving-tile-imgsec" >
                                        <Link to={`/pdp/${item.c_item_code}/${item.c_item_name}`} key={item.c_item_code}>
                                            <img 
                                             src={`${item.c_item_img}`}
                                            alt="homeSliderImg" />
                                          
                                            <img src={commerce_offer} alt="wishListImg-1" className="fast-moving-tile-offer" />
                                        </Link>
                                        
                                                <div onClick={handleWishListColor(index)}   >
                                                <Tooltip title="Watchlist" TransitionComponent={Zoom}>
                                                    {wishListColor[index] === true ?
                                                        <img src={wishlist_colorIcon} alt="wishListImg-1" className="fast-moving-tile-fav color"  onClick={handleClickWatchListRemoved(GrowTransition,  item.c_item_name)} /> :
                                                        <img src={wishlist} alt="wishListImg-1" className="fast-moving-tile-fav" onClick={handleClickWatchListAdded(GrowTransition,  item.c_item_name)} />}
                                               </Tooltip>
                                                </div>
                                            
                                    </div>
                                    <div className="fast-moving-tile-details">
                                        <div >
                                            <Link to={`/pdp/${item.c_item_code}/${item.c_item_name}`} key={item.c_item_code}>
                                            <Tooltip title={item.c_item_name} TransitionComponent={Zoom}>
                                                <h4 className="medicine-title">{item.c_item_name.toLowerCase()}</h4>
                                                </Tooltip>
                                                <h5 className="medicine-packsize">Pack Size: {item.c_pack_name}</h5>
                                                <h5 className="medicine-mrp">MRP &#8377; {item.n_mrp.toFixed(2)}</h5>
                                                <h5 className="medicine-contains">
                                                    Contains<span> {item.c_cont_name.toLowerCase()}</span>
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
                                            <Tooltip title="Shortbook" TransitionComponent={Zoom}>
                                                <div className="addtoshortbook-icon-sec" onClick={handleIconColor(index)} >
                                                    {iconColor[index] === true ? <img src={shortbook_colorIcon} alt="addtoshortbook-icon-1" className="addtoshortbook-icon" onClick={handleClickShortBookRemoved(GrowTransition, item.c_item_name)} />
                                                        : <img src={shortbook_icon} alt="addtoshortbook-icon-1" className="addtoshortbook-icon" onClick={handleClickShortBookAdded(GrowTransition, item.c_item_name)} />}
                                                </div>
                                            </Tooltip>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        // </Link>
                    ))}

                </Slider>
            </div>
            {/* <SellerDropDown
                isOpen={open} setIsOpen={setOpen} /> */}
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
        </div >
    );
};

export default NewLaunches;
