import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../assets/images/cross-grey.svg";
import CiplaLogo from "../../../assets/images/cipla-logo.png";
import BG from "../../../assets/images/bg3.svg";

const RoadBlockModalMFC = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Roadblock popup Mfc
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
            <img src={CiplaLogo} alt="CiplaLogo" />
            <h3 className="mfc-popup-subtitle">Special Ugadi Offer</h3>
            <h2 className="mfc-popup-title">
              Flat <span>25% Off</span> On All Cardiac
              <br />
              Division Products{" "}
            </h2>
            <p className="mfc-popup-text">Offer valid till 31st March </p>
            <Button
              variant="contained"
              color="primary"
              className="ordernow-popup-btn"
            >
              order now
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default RoadBlockModalMFC;
