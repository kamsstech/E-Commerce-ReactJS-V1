import * as React from "react";
import { useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../assets/images/cross-grey.svg";
import CiplaLogo from "../../../assets/images/cipla-logo.png";
// import BG from "../../../assets/images/bg3.svg";
import BG from "../../../assets/images/test.png";

import OrderNowModal from "./OrderNowModal";

const RoadBlockModalMFC = (props) => {
  const { roadBlockModalResult } = props;

  const [open, setOpen] = React.useState(true);
  const [openDemo, setOpenDemo] = React.useState(false);

  // const [image, setImage] = React.useState(null);


  // useEffect(() => {
    
  //   const temp = [];
    
  //     Object.values(roadBlockModalResult.payload.j_list).map((entry) => {
  //       temp[entry[0]] = entry[1];
  //     });
  
  //   setImage(temp[0].c_image_url);
  // }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenDemo(false);
  };

  const handleOpenDemo = () => {
    setOpen(false);
    setOpenDemo(true);
    // handleClose();
  };

  const handleCloseDemo = () => {
    setOpen(false);
    setOpenDemo(false);
    handleClose();
  };
  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
        Roadblock popup Mfc
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
          timeout: 500,
        }}
      >


        <Fade in={open}>
          <div
            className="roadblock-popup-sec"
            style={{
              backgroundImage: `url(${BG})`,
              // height: "33%",
              width: "64%",
              backgroundRepeat: "no-repeat",
            }}
            
          >
            <div className="align-right">
              <img src={CrossImg} alt="cross-img" onClick={handleClose} />
            </div>

            {/* <img src={CiplaLogo} alt="CiplaLogo" />
            <h3 className="mfc-popup-subtitle">Special Ugadi Offer</h3>
            <h2 className="mfc-popup-title">
              Flat <span>25% Off</span> On All Cardiac
              <br />
              Division Products{" "}
            </h2>
            <p className="mfc-popup-text">Offer valid till 31st March </p> */}
            <div style={{marginLeft:"150px",marginTop:"240px"}}>
            <Button
              variant="contained"
              color="primary"
              className="ordernow-popup-btn"
              onClick={handleOpenDemo}
            >
              order now
            </Button>
            </div>
            
          </div>
        </Fade>
      </Modal>

      <OrderNowModal
        openOrderNowModal={openDemo}
        handleCloseOrderNowModal={handleCloseDemo}
      />
    </div>
  );
};

export default RoadBlockModalMFC;
