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
      {item !== undefined &&
        item.payload.map((items, index) => (
          <div key={index}>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className="orderplaced-popup"
              open={isOpen}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{ timeout: 500 }}
            >
              <Fade in={isOpen}>
                <div className="seller-dropDown-sec DSScroll">
                  <h4 className="seller-title"> {items.c_item_name}</h4>
                  <p className="seller-item-mfc">
                    Mfg by{" "}
                    <span className="item-mfac-color">{items.c_mfg_name}</span>
                  </p>
                  <p className="seller-item-mfc">
                    Contains{" "}
                    <span className="item-mfac-color">
                      {items.c_content_name}
                    </span>
                  </p>
                  <p className="seller-item-mfc">HSN Code {items.c_hsn_code}</p>
                  <h4 className="seller-mrp">MRP &#8377; {items.n_max_mrp}</h4>
                  <p className="seller-item-mfc">GST Rate: {items.n_gst}%</p>
                  <p className="seller-packaging">
                    Pack Size: {items.n_pack_size}
                  </p>
                  <p className="seller-selected">
                    <span className="span">Selected Size:</span>{" "}
                    <span className="item-seller-selected">
                      {items.c_pack_name}
                    </span>
                  </p>

                  <Tabs
                    // value={label}
                    indicatorColor="primary"
                    textColor="primary"
                    // onChange={handleChange}
                    className="seller-select-size"
                    aria-label="disabled tabs example"
                  >
                    <Tab
                      label={items.c_pack_name}
                      key={index}
                      //  onClick={() => GetPdpPageItems(item.payload.c_item_code)}
                    />
                  </Tabs>
                  {item !== undefined &&
                    item.payload.map((data, index) => (
                    <div key ={index}>
                    <SellerDetailsSection
                                itemName={items.c_item_name}
                                br_code={br_code}
                                c_item_code={data.c_item_code}
                                c_item_name={data.c_item_name}
                                AddToCartAction={AddToCartAction}
                                addToCartResult={addToCartResult}
                                item1={pdpPageSellerDetailsResult.payload}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                CartCount={CartCount}
                                arrayLength={arrayLength}
                              />
                      </div>
                    )
                    )}

                  {/* {item !== undefined &&
                    item.payload.map((data, index) => (
                      <div key={index}>
                        {item1 &&
                          item1.payload.map((items1, index) => (
                            <div key={index}>
                              <SellerDetailsSection
                                itemName={items.c_item_name}
                                br_code={br_code}
                                c_item_code={data.c_item_code}
                                c_item_name={data.c_item_name}
                                AddToCartAction={AddToCartAction}
                                addToCartResult={addToCartResult}
                                pdpPageSellerDetailsResult={items1}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                CartCount={CartCount}
                              />
                            </div>
                          ))}
                      </div>
                    ))} */}
                </div>
              </Fade>
            </Modal>
          </div>
        ))}
    </>
  );
};

export default SellerDropDown;
