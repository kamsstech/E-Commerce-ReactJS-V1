import React from "react";
import { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import InfoIcon from "../../../assets/images/info.svg";

import CouponCD from "./CouponCD";
import EstimatedDetailsCD from "./EstimatedDetailsCD";
import { Link } from "react-router-dom";

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

  })

);
const PriceDetailsCD = () => {

  // const handlePay = () => {
  //   history.push("/checkout")
  // }
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [relevanceValue, setRelevanceValue] = useState('Relevance');

  const anchorRef = React.useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };
  const handleClose = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target)
    ) {
      return;
    }
    setOpen(false);
  };
  return (
    <div className="chooseDelivery-cart-priceDetails">
      <div className="cart-price-details-wrapper">
        <h4 className="cart-price-details-title">Cart Value Details</h4>
        <div>
          <div className="cart-price-seller-sec">
            <FormControlLabel
              control={
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                  checkedIcon={<CheckBoxIcon fontSize="large" />}
                  checked={true}
                  // onChange={handleCheckbox("n_place_order", index)}
                  color="primary"
                  className="adduser-checkbox-icon"
                />
              }
              label="Maheerveer Medi-Sales Pvt. Ltd."
              className="adduser-checkbox  cart-check"
            />
            <div className="display-flex">
              <img src={InfoIcon} alt="InfoIcon" className="cart-info-icon  cursor" onClick={handleToggle} />
              <div className="cart-info-icon-collapse-div">
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                  className="profile-dropdown"
                >
                  {({ TransitionProps, placement }) => (
                    // <Grow
                    //   {...TransitionProps}
                    //   style={{
                    //     transformOrigin:
                    //       placement === "bottom"
                    //         ? "center top"
                    //         : "center bottom"
                    //   }}
                    // >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList id="split-button-menu" >
                            <div className=" cart-info-price-details">
                              <div className="b-05">
                                <div className="line-display">
                                  <p className="m-0"> Cart Total Price </p>
                                  <p className="m-0"> ₹ 1,255.00</p>
                                </div>
                                <div className="line-display">
                                  <p className="mt-10 mb-0"> Total GST </p>
                                  <p className="mt-10 mb-0"> ₹ 150.00</p>
                                </div>
                              </div>

                              <div className="line-display pt-10 ">
                                <p className="m-0 bold"> Total</p>
                                <p className="m-0 bold"> ₹ 1,405.00</p>
                              </div>
                            </div>
                          </MenuList>

                        </ClickAwayListener>
                      </Paper>
                    // </Grow>
                  )}
                </Popper>
              </div>
              <h4 className="cart-seller-price">₹ 1,405.00</h4>
            </div>
          </div>
          <div className="cart-price-seller-sec">
            <h4 className="cart-seller-price cart-blue-color">Delivery  Charges</h4>
            <h4 className="cart-seller-price cart-purle-color">₹ 100.00</h4>
          </div>
          <div className="cart-price-seller-sec">
            <h4 className="cart-seller-price cart-blue-color">Total</h4>
            <h4 className="cart-seller-price cart-black-color bold">₹ 1,505 .00</h4>
          </div>
        </div>
        <div>
          <div className="cart-price-seller-sec">
            <FormControlLabel
              control={
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                  checkedIcon={<CheckBoxIcon fontSize="large" />}
                  checked={true}
                  // onChange={handleCheckbox("n_place_order", index)}
                  color="primary"
                  className="adduser-checkbox-icon"
                />
              }
              label="Maheerveer Medi-Sales Pvt. Ltd."
              className="adduser-checkbox cart-check"
            />
            <div className="display-flex">
              <img src={InfoIcon} alt="InfoIcon" className="cart-info-icon" />
              <h4 className="cart-seller-price">₹ 1,405.00</h4>
            </div>
          </div>
          <div className="cart-price-seller-sec">
            <h4 className="cart-seller-price cart-blue-color">Delivery  Charges</h4>
            <h4 className="cart-seller-price cart-purle-color">₹ 100.00</h4>
          </div>
          <div className="cart-price-seller-sec">
            <h4 className="cart-seller-price cart-blue-color">Total</h4>
            <h4 className="cart-seller-price cart-black-color bold">₹ 1,505 .00</h4>
          </div>
        </div>
        <div className="cart-dashed-line"></div>

        <div>
          <h3 className="cart-coupon-title">Have Coupon ! Apply Below</h3>
          <CouponCD />
          <EstimatedDetailsCD />
          <div>
            <Link to="/payment">
              <Button
                variant="contained"
                color="primary"
                className="ordernow-modal-btn width-35"
              // onClick={handlePay}
              >
                Pay Now
          </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              className="payLater-modal-btn width-65 bg"
            // onClick={handleCloseOrderNowModal}
            >
              Pay Later on Credit
        </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceDetailsCD;