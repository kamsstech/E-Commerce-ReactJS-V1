import React from 'react';
import { Link } from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

//images
import CrossImg from "../../../assets/images/cross-grey.svg";
import Pharmacy from "../../../assets/images/pharmacy.svg";

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    // left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);



const DistributorList = (props) => {
  const listArr = [1, 2, 3, 4, 5, 6, 7];
  const { toggleDrawer, openDrawer } = props;
  const [optValue, setOptValue] = React.useState("one");

  const handleSelect = (event) => {
    setOptValue(event.target.value);
  };

  return (
    <div>
      <SwipeableDrawer
        anchor="bottom"
        open={openDrawer}
        className="drawerRadius"
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className="mob-profile-sec-space distributor-sec-height">
          <h4 className="mob-addbranch-drawer-title">Select Seller For Vasu Step Syrup 100 ml</h4>
          <p className="mob-addbranch-drawer-subtitle">See best schemes, Rate below</p>
          {listArr.map(list => (
            <div key={list}>
              <div className="mob-pro-sellers-list">
                <div>
                  <h5 className="mob-pro-sellername">Varun Pharma</h5>
                  <h5 className="mob-pro-drugrate">Rate: ₹ 10.90</h5>
                  <h5 className="mob-pro-scheme">Scheme: 10+2</h5>
                </div>
                <div>
                  <TextField
                    name="email"
                    select
                    autoComplete="off"
                    margin="normal"
                    variant="outlined"
                    value={optValue}
                    onChange={handleSelect}
                    className="mob-pro-drugcount"
                  >
                    <option value={"one"}>10</option>
                    <option value={"two"}>20</option>
                    <option value={"three"}>30</option>
                  </TextField>
                  <Link to="/cart">
                    <Button
                      variant="contained"
                      color="primary"
                      className="fast-moving-addtocart fast-moving-spacing"
                    >
                      Add To Cart
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default DistributorList;