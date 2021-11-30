import React from 'react'
import { useState } from "react";

import { Link } from "react-router-dom";
import SellerDropDown from "./SellerDropDown";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';
import Grow from "@material-ui/core/Grow";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
// import { FastMovingItemsEntity, FastMovingItemsResultEntity } from "../../../common/model";
// import { AlternativesEntity, AlternativesResultEntity } from "../../../common/model";

import medicine from "../../../assets/images/medicine-syrup-plp-page.jpg";
import wishlist from "../../../assets/images/wishlist_plp_page.svg";
import wishlist_colorIcon from "../../../assets/images/wishlist_colorIcon.svg";
import commerce_offer from "../../../assets/images/commerce-and-shopping_plp_page.svg";
import ViewIcon from "../../../assets/images/Group_860.svg";
import DownArrow from "../../../assets/images/down-arrow.svg";
import shortbook_icon from "../../../assets/images/shortbook_pdpIcon.svg";
import shortbook_colorIcon from "../../../assets/images/shortbook_colorIcon.svg";

import oral_sus from "../../../assets/images/oral_sus.svg";
import capsules from "../../../assets/images/capsules.svg";
import injectable from "../../../assets/images/injectable.svg";
import tablet from "../../../assets/images/tablet.svg";
import drops from "../../../assets/images/drops.svg";
// import { table } from 'console';


function GrowTransition(props) {
    console.log("props",props)
    return <Grow {...props} />;
}
const useStyles = makeStyles((theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    dropdownStyle: {
      borderRadius: "6px",
      backgroundColor: "#fff",
      width: "11.9em",
      marginTop: "3em"
    },
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      paddingLeft: theme.spacing(0),

    },
    nested: {
      paddingLeft: theme.spacing(0),
      alignItems: 'left',
      paddingTop: theme.spacing(0)
    },
    root1: {
      maxWidth: '100%',
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }))
const FreqBoxView = (props) => {
  const {freqorderResponse} =props
    const classes = useStyles();

    let array = [{
        c_item_code: "1",
        c_item_name: "Calpol 250mg Peadiatric oral Suspe...",
        c_pack_name: "100 ml syrup",
        n_mrp: 20.00,
        rate: "18.00",
        preferred_seller: "Mahaveer Medi-Sales",
        c_cont_name: "Paracetamol"
    },
    {
        c_item_code: "2",
        c_item_name: "Telpres CT 40/12.5 Tablet",
        c_pack_name: "Strip of 15 Tablets",
        n_mrp: 60.00,
        rate: "55.60",
        preferred_seller: "Raj-Sons Pharma",
        c_cont_name: "Telmisartan (40 mg) + Chlorthal..."
    }, {
        c_item_code: "3",
        c_item_name: "Ralguz Soft Gelatin capsule",
        c_pack_name: "100 ml syrup",
        n_mrp: 34.50,
        rate: "25.00",
        preferred_seller: "Ganesh Pharma",
        c_cont_name: "Gultathione (50 mg)"
    },
    {
        c_item_code: "4",
        c_item_name: "Vitcofol injection",
        c_pack_name: "Vial of 10 ml injection",
        n_mrp: 94.20,
        rate: "66.60",
        preferred_seller: "RCM Pharmaceutical",
        c_cont_name: "Necotinamide(200mg/ml)+ Folic..."
    },
    {
        c_item_code: "5",
        c_item_name: "Refresh Tears Eye Drop",
        c_pack_name: "10 ml eye drop bottle",
        n_mrp: 20.00,
        rate: "15.50",
        preferred_seller: "Mahaveer Medi-Sales",
        c_cont_name: "Carboxymethylcellilose(0.5% w/v)"
    },
    {
        c_item_code: "6",
        c_item_name: "Calpol 250mg Peadiatric oral Suspe...",
        c_pack_name: "100 ml syrup",
        n_mrp: 20.00,
        rate: "18.00",
        preferred_seller: "Mahaveer Medi-Sales",
        c_cont_name: "Paracetamol"
    }
    ]
    // const result = ((Array.isArray(pdpPageAlternativesResult.payload) && pdpPageAlternativesResult.payload.length !== 0) ? pdpPageAlternativesResult.payload : fastMovingItemsResult.payload)
    // console.log("result", result);
 

    let tempArray = [];
    for (let i = 0; i <= array.length; i++) {
        tempArray.push(false)
    }

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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const [state, setState] = useState({
        open: false,
        Transition: Fade,
        message: "",
    });
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
            <div className="box-view-sec-1">
                {
                    array.map((item, index) => (
                        <div className="box-view-sec-25-1" key={item.c_item_code}>
                            <div className="box-view-tile-1" >
                                <div className="box-view-tile-imgsec-1">
                                    {/* <Link to={`/pdp/${item.c_item_code}/${item.c_item_name}`}  > */}
                                    {
                                        item.c_item_name.toLowerCase().includes("cap") ? <img src={capsules} alt="homeSliderImg-1" className="imgsec" /> :
                                            (item.c_item_name.toLowerCase().includes("oral_sus") ? <img src={oral_sus} alt="homeSliderImg-1" className="imgsec" /> :
                                                (item.c_item_name.toLowerCase().includes("injectable") ? <img src={injectable} alt="homeSliderImg-1" className="imgsec" /> :
                                                    (item.c_item_name.toLowerCase().includes("tab") ? <img src={tablet} alt="homeSliderImg-1" className="imgsec" /> :
                                                        (item.c_item_name.toLowerCase().includes("drops") ? <img src={drops} alt="homeSliderImg-1" className="imgsec" /> : <img src={tablet} alt="homeSliderImg-1" className="imgsec" />
                                                        ))
                                                ))
                                    }
                                    {/* </Link> */}
                                </div>
                                <div className="box-view-tile-details-1">
                                    <div>
                                        {/* <Link to={`/pdp/${item.c_item_code}/${item.c_item_name}`}  > */}

                                        <Tooltip title="Watchlist" TransitionComponent={Zoom}>
                                                <div className="box-view-tile-wishList-1"  onClick={handleWishListColor( index)} >
                                                {wishListColor[index] === true ? 
                                                <img src={wishlist_colorIcon} alt="wishListImg-1" className="wishList-icon" onClick={handleClickWatchListRemoved(GrowTransition,  item.c_item_name)}/> : 
                                                <img src={wishlist} alt="wishListImg-1" className="wishList-icon"  onClick={handleClickWatchListAdded(GrowTransition,  item.c_item_name)}/>} 
                                                </div>
                                            </Tooltip>
                                        <img src={commerce_offer} alt="wishListImg-1" className="box-view-tile-fav-1" />
                                        <h4 className="medicine-title-1">{item.c_item_name.toLowerCase()}</h4>
                                        <h5 className="medicine-packsize-1">Pack Size: {item.c_pack_name}</h5>
                                        <div className="medicine-price">
                                            <h5 className="medicine-mrp-1"><del ><span className="mrp-del">MRP &#8377; {item.n_mrp}</span></del></h5>
                                            <h6 className="medicine-rate-1"> Rate &#8377; {item.rate}</h6>
                                        </div>
                                        <p className="medicine-preferred-seller"> Preferred Seller : <span className="item-mfac-color">{item.preferred_seller}</span> </p>
                                        <h5 className="medicine-contains-1">
                                            Contains <span>{item.c_cont_name.toLowerCase()}</span>
                                        </h5>
                                    </div>
                                    {/* </Link> */}
                                    <div>
                                        <Tooltip title="Shortbook" TransitionComponent={Zoom}>
                                            <div className="box-view-tile-shortbook-1" onClick={handleIconColor(index)}>
                                                {iconColor[index] === true ? <img src={shortbook_colorIcon} alt="addtoshortbook-icon-1" className="addtoshortbook-icon" onClick={handleClickShortBookRemoved(GrowTransition, item.c_item_name)}  />
                                                    : <img src={shortbook_icon} alt="addtoshortbook-icon-1" className="addtoshortbook-icon" onClick={handleClickShortBookAdded(GrowTransition, item.c_item_name)} />}
                                            </div>
                                        </Tooltip>
                                        <Button variant="contained" color="primary" className="box-view-addtocart-1" onClick={handleOpen}>
                                            Add To Cart
                                            </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))

                }
            </div>
            <SellerDropDown
                isOpen={open} setIsOpen={setOpen} />
<div className={classes.root1}>
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
        </div >
    )
}

export default FreqBoxView;