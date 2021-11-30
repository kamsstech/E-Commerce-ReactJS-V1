import * as React from "react";
import {useEffect} from 'react'
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../../assets/images/cross-grey.svg";
import Exclamation from "../../../../assets/images/exclamation.svg";
import { Tooltip, Zoom } from "@material-ui/core";
 
const SelectDeliveryAlert = (props) => {
  const {openModal,orderCreditLimitResult} = props;
  console.log(orderCreditLimitResult,"<<<<< orderCreditLimitResult")

  const [open, setOpen] = React.useState(false);
  const [error1, setError1] = React.useState(true);

 

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if(openModal){
      console.log(openModal, "<<<< openModal")
      setOpen(true);
    }
   
  }, [openModal])
  
  const toggleErrorText = () => {
    setError1(!error1);
  };
  return (
    <div>
     
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
            className="delivery-alert-popup-sec"
          >
            <div className="align-right popup-align-right">
              <Tooltip title="Close" TransitionComponent={Zoom}>
                <div className="cross-img-div">
                  <img src={CrossImg} alt="cross-img" onClick={handleClose} />
                </div>
              </Tooltip>
            </div>
            <div className="align-center">
                <img src={Exclamation} alt="Order placed" />
                <p className="orderf-title">Uh Oh!</p>
                
                <p className="alert-label">
                Seems Like you have no buyer found <br/>
                    {orderCreditLimitResult.error}
                </p>
                <Button
                variant="contained"
                color="primary"
                className="selectslot-popup-btn"
                onClick={handleClose}
                >
                OK
                </Button>
                
            </div>
            
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default SelectDeliveryAlert;
