import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../assets/images/cross-grey.svg";
import EGLogo from "../../../assets/images/ecogreen-logo.png";
import BG from "../../../assets/images/bg2.svg";
import DemoEcogreen from "./demoEcogreen";

const RoadBlockModalDIS = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
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

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Roadblock popup DIS
      </Button>
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
            <img src={EGLogo} alt="EGLogo" />
            <h2 className="EGmodal-popup-title">
              <span>One Stop Solution</span> <br />
              To Manage Your Retail Chains.
            </h2>
            <p className="RBmodal-popup-text">
              EcoGreen will help in "Several Management"
              <br />
              Inventory, Order, Warehouse, Vender, Payroll
              <br />
              Centralised Back Office Etc.
            </p>
            <Button
              variant="contained"
              color="primary"
              className="schedule-btn"
              onClick={handleOpenDemo}
            >
              Schedule Demo
            </Button>
            <p className="btn-subtext">Or Call On : +91- 98989-87878</p>
          </div>
        </Fade>
      </Modal>
      <DemoEcogreen open={openDemo} handleClose={handleCloseDemo} />
    </div>
  );
};

export default RoadBlockModalDIS;
