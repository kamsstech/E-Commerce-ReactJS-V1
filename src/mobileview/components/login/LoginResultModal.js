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
import loop from "../../../assets/images/icons/loop.svg";
//images
import CrossImg from "../../../assets/images/cross-grey.svg";
import Pharmacy from "../../../assets/images/pharmacy.svg";
import { Dialog, DialogContent, DialogTitle, IconButton, Tooltip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Zoom from "@material-ui/core/Zoom";

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



const LoginResultModal = (props) => {
  const { toggleDrawer, openDrawer,status,errorMsgPop } = props;

  return (
    <div>
      <SwipeableDrawer
        anchor="bottom"
        open={openDrawer}
        className="drawerRadius"
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
          
              <IconButton className="justifyContent-end" aria-label="close"   onClick={toggleDrawer}>
					<CloseIcon  />
				</IconButton>
                {
                    status === 5 && (
                        <div className="mob-profile-sec-space distributor-sec-height">
            <div className="center">
            <img src={loop} alt="loop" className="regsucimg" />
            </div>
            <div className="text-center">
				<p className="orderf-title">Welcome</p>
				<p className="orderf-label">Hey! Looks like this numer not a registered mobile number,Please Register...</p>
				</div>
          {/* <h4 className="mob-addbranch-drawer-title">Select Seller For Vasu Step Syrup 100 ml</h4>
          <p className="mob-addbranch-drawer-subtitle">See best schemes, Rate below</p> */}
          {/* <button onClick={toggleDrawer}>close</button> */}
          <div className="regSuccbtn">
					<Link to="/register/buyer">
					
					<Button variant="contained" color="primary" className="theme-btn">
					
					Register
				</Button>
						</Link>
					</div>
        </div>
                    )
                }
            {
                    status === 11 && (
                        <div className="mob-profile-sec-space distributor-sec-height">
            <div className="center">
            <img src={loop} alt="loop" className="regsucimg" />
            </div>
            <div className="text-center">
				<p className="orderf-title">Oops</p>
				<p className="orderf-label">Hey! Looks like this number Incorrect Username & Password... Please Enter Valuable Username & Password...</p>
				</div>
          
        </div>
                    )
                }


        
      </SwipeableDrawer>
    </div>
  );
}

export default LoginResultModal;