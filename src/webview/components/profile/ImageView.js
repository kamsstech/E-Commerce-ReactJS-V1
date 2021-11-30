import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../assets/images/cross-grey.svg";
import PSLogo from "../../../assets/images/pharmsoft-logo.png";
// import BG from "../../../assets/images/bg1.jpg";
// import DemoPharmsoft from "./demoPharmsoft";

const ImageView = (props) => {
    const {open, handleClose, imgUrl} = props;
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const [openDemo, setOpenDemo] = React.useState(false);

//   const handleOpenDemo = () => {
//     setOpenDemo(true);
//     handleClose();
//   };

//   const handleCloseDemo = () => {
//     setOpenDemo(false);
//   };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="roadblock-popup"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
            <div className="roadblock-popup-sec">
                <div className="align-right">
                    <img src={CrossImg} alt="cross-img" onClick={handleClose} />
                </div>
                <div className="center">
                    <img src={imgUrl} alt="licence" className="viewImage" />
                </div>
            </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ImageView;
