import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../assets/images/cross-grey.svg";
import Loop from "../../../assets/images/icons/loop.svg";
import { Tooltip, Zoom } from "@material-ui/core";

const DeviceNotConnected = (props) => {
    const {openModal,closeModal} = props;
  
  const [open, setOpen] = React.useState(false);
  const [error1, setError1] = React.useState(true);

  
  React.useEffect(()=>{
    setOpen(openModal);
  },[openModal])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    closeModal();

  };

  
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
            className="scanner-popup-sec"
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
                <p className="search-title">Oops !</p>
                
                <p className="scan-label">
                Seems like Barcode Scanner Device/Machine <br/>is not connected to the desktop/system. 
                </p>
                <Button
                variant="contained"
                color="primary"
                className="try-popup-btn"
                onClick={toggleErrorText}
                >
                try again
                </Button>
                
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DeviceNotConnected;
