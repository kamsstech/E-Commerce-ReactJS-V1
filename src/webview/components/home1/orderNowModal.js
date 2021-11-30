import * as React from "react";
import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../assets/images/cross-grey.svg";
import OrderNowImg from "../../../assets/images/order-now.svg";
import { Tooltip, Zoom } from "@material-ui/core";

interface Props {
  openOrderNowModal: boolean;
  handleOpenOrderNowModal(): void;
  handleCloseOrderNowModal(): void;
}

const OrderNowModal = (props: Props) => {
  const [value, setValue] = useState("Mahaveer Medisales");
  const { openOrderNowModal, handleCloseOrderNowModal } = props;

  const handleChange = (event: any) => {
    const { value } = event.target;
    setValue(value);
  };

  
  const handleClose = (event: any) => {
    handleCloseOrderNowModal();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="ordernow-modal"
        open={openOrderNowModal}
        onClose={handleCloseOrderNowModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openOrderNowModal}>
          <div className="openmodal-sec">
          <div className="align-right popup-align-right">
              <Tooltip title="Close" TransitionComponent={Zoom}>
                <div className="cross-img-div" onClick={handleClose}>
                  <img src={CrossImg} alt="cross-img" />
                </div>
              </Tooltip>
            </div>
            <div className="align-center">
              <img
                src={OrderNowImg}
                alt="OrderNowImg"
                className="ordernow-img"
              />
              <h3 className="ordernow-title">Great !</h3>
              <p className="ordernow-label">Please Select your Manufacturer</p>
              <TextField
                autoComplete="off"
                name="select distributor"
                margin="normal"
                variant="outlined"
                placeholder="Select"
                className="auth-input ordernow-drop"
                select
                value={value}
                onChange={e => handleChange(e)}
              >
                <MenuItem value="Mahaveer Medisales">
                  Mahaveer Medisales
                </MenuItem>
                <MenuItem value="Mahaveer Medisales1">
                  Mahaveer Medisales1
                </MenuItem>
                <MenuItem value="Mahaveer Medisales3">
                  Mahaveer Medisales2
                </MenuItem>
                <MenuItem value="Mahaveer Medisales4">
                  Mahaveer Medisales3
                </MenuItem>
              </TextField>
              <Button
                variant="contained"
                color="primary"
                className="ordernow-modal-btn"
                onClick={handleCloseOrderNowModal}
              >
                DONE
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default OrderNowModal;
