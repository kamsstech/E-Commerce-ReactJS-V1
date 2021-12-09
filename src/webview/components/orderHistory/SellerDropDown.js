import React, { useEffect, useState } from "react";

// import ProductDetailsCD from "./productDetailsCD";
import SellerDetailsSection from "./SellerDetailsSection";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import CrossImg from "../../../assets/images/cross-grey.svg";

//images
import ProductImg1 from "../../../assets/mobImages/item1.png";
import ProductImg2 from "../../../assets/mobImages/item2.png";
import ProductImg3 from "../../../assets/mobImages/item3.png";
import ProductImg4 from "../../../assets/mobImages/item4.png";
import ProductImg5 from "../../../assets/mobImages/item5.png";

const SellerDropDown = (props) => {
  // const [Open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // }

  const {
    isOpen,
    setIsOpen,
    br_code,
    pdpPageItemsResult,
    pdpPageSellerDetailsResult,
    AddToCartAction,
    addToCartResult,
    CartCount,
  } = props;


  // console.log(pdpPageItemsResult,"<<pdpPageItemsResult")
  // console.log(pdpPageSellerDetailsResult,"<<pdpPageSellerDetailsResult")

  const [value, setValue] = React.useState(0);
  const [arrayLength, setarrayLength] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  //   const [error, setError] = React.useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  const item = pdpPageItemsResult;
  const item1 = pdpPageSellerDetailsResult;

  // let tempArray = [];
  //   for (let i = 0; i < arrayLength; i++) {
  //       tempArray.push(false)
  //   }

  useEffect(() => {
    if(item1.statuscode === 0){
      setarrayLength(item1.payload.j_list.length)
      console.log(item1.payload && item1.payload.j_list.length,"OOOOOOOOOOOOOOOOOOOOOO item1")
    }
  }, [item1])

  
  return (
    <>
          </>
  );
};

export default SellerDropDown;
