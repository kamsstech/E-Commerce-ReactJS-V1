import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../../assets/images/cross-grey.svg";
import Exclamation from "../../../../assets/images/exclamation.svg";
import { Tooltip, Zoom } from "@material-ui/core";
 

const DeleteCart = (props) => {
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
      <Button variant="contained" color="primary" onClick={handleOpen}>
        {/* Delete cart */}
        F
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
            className="branch-change-popup-sec"
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
                <p className="orderf-title">Are you sure ?</p>
                
                <p className="orderf-label">
                You want to delete entire cart, Once you delete it 
all items will be removed from shopping bag.
                </p>
                
                <Button variant="outlined" color="secondary" className="brchangeno"> No </Button>
                <Button variant="contained" color="primary" onClick={toggleErrorText} className="brchangeyes"> Yes </Button>
                
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DeleteCart;
