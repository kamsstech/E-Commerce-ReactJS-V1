import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../../assets/images/cross-grey.svg";
import Loop from "../../../../assets/images/icons/loop.svg";
import { Tooltip, Zoom } from "@material-ui/core";
 
const OrderFailed = () => {
  const [open, setOpen] = React.useState(false);
  const [error1, setError1] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const toggleErrorText = () => {
    setError1(!error1);
  };
  return (
    <div>
      {/* orderFailed popup Mfc */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        B
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="orderfailed-popup"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div
            className="orderfailed-popup-sec"
          >
            <div className="align-right popup-align-right">
              <Tooltip title="Close" TransitionComponent={Zoom}>
                <div className="cross-img-div">
                  <img src={CrossImg} alt="cross-img" onClick={handleClose} />
                </div>
              </Tooltip>
            </div>
            <div className="align-center">
                <img src={Loop} alt="Order placed" />
                <p className="orderf-title">Oops !</p>
                {error1 ?
                <>
                <p className="orderf-label">
                    Seems like Mahaveer Medi-sales & Raj-sons do not allow you to order on credit.
                </p>
                {/* <div className="orderf-info">
                    <p>Order ID : CLO09784784 (Mahaveer Medi-Sales)</p>
                    <p>Order ID : CLO89789789 (Raj-Sons)</p>
                    
                </div> */}
                <Button
                variant="contained"
                color="primary"
                className="orderfailed-popup-btn"
                onClick={toggleErrorText}
                >
                pay now
                </Button>
                </>
                :
                <>
                <p className="orderf-label">
                    You have reached your <span>credit limit</span> for Mahaveer Medi-sales. Clear your old dues or Pay now for this order
                </p>
                <Button variant="outlined" color="primary" className="cleardue-popup-btn"> Clear all dues </Button>
                <Button variant="contained" color="primary" onClick={toggleErrorText} className="pay-popup-btn"> pay now </Button>
                </>
                }
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default OrderFailed;
