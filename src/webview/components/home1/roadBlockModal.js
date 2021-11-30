import React,{useEffect} from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../assets/images/cross-grey.svg";
import PSLogo from "../../../assets/images/pharmsoft-logo.png";
import BG from "../../../assets/images/bg1.jpg";
import DemoPharmsoft from "./demoPharmsoft";

const RoadBlockModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    // setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openDemo, setOpenDemo] = React.useState(false);

  const handleOpenDemo = () => {
    setOpenDemo(true);
    handleClose();
  };

  const handleCloseDemo = () => {
    setOpenDemo(false);
  };
useEffect(() => {
  setOpen(true);
}, [5000])

  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
        Roadblock popup
      </Button> */}
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
          <div
            className="roadblock-popup-sec"
            style={{ backgroundImage: `url(${BG})` }}
          >
            <div className="align-right">
              <img src={CrossImg} alt="cross-img" onClick={handleClose} />
            </div>
            <img src={PSLogo} alt="PSLogo" />
            <h2 className="RBmodal-popup-title">
              The <span>End To End Solution</span>
              <br />
              For All Pharmacies.
            </h2>
            <p className="RBmodal-popup-text">
              Manage your store inventory, Stock & Sales, <br />
              Billing, Rack Management, Suppliers, <br />
              Payments etc.
            </p>
            <Button
              variant="contained"
              color="primary"
              className="schedule-btn"
              onClick={handleOpenDemo}
            >
              Schedule Demo
            </Button>
          </div>
        </Fade>
      </Modal>
      <DemoPharmsoft open={openDemo} handleClose={handleCloseDemo} />
    </div>
  );
};

export default RoadBlockModal;
