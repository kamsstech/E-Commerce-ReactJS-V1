import * as React from "react";
import {useEffect} from 'react'
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../../assets/images/cross-grey.svg";
import CiplaLogo from "../../../../assets/images/cipla-logo.png";
import BG from "../../../../assets/images/bg3.svg";
import OrderSuccess from "../../../../assets/images/order-tick.svg";
import { Tooltip, Zoom } from "@material-ui/core";

const PartialOrderPlaced = (props) => {
  const {openModal} =props
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(true);

  

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(openModal);
  }, [openModal])

  return (
    <div>
      {/* partial order placed */}
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
        C
      </Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="orderplaced-popup"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className="orderplaced-popup-sec">
            <div className="align-right popup-align-right">
              <Tooltip title="Close" TransitionComponent={Zoom}>
                <div className="cross-img-div">
                  <img src={CrossImg} alt="cross-img" onClick={handleClose} />
                </div>
              </Tooltip>
            </div>
            <div className="align-center">
                <img src={OrderSuccess} alt="Order placed" />
                <h3 className="order-title">Order placed for Raj-sons Successfully !</h3>
                <p className="order-label">
                    Your order regarding Raj-Sons Pvt. Ltd. placed successfully, check status in order history.      
                </p>
                
                <div className="order-info">
                    <p>Order ID : CLO09784784</p>
                    
                    <p className="errorInfo">
                        Seems Like <span>Mahaveer Medi-Sales Pvt. Ltd.</span> Doesn't allow you to order on credit
                    </p>

                </div>
                <Button
                variant="contained"
                color="primary"
                className="partial-pay-popup-btn"
                >
                pay now
                </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PartialOrderPlaced;
