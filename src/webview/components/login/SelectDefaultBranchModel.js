import * as React from "react";
import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../assets/images/cross-grey.svg";
import OrderNowImg from "../../../assets/images/pharmacy.svg";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const SelectDefaultBranchModal = (props) => {
  const { openModal, handleCloseModal } = props;

  const [value, setValue] = React.useState('one');

  const handleChange = (event) => {
    setValue((event.target).value);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="ordernow-modal"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openModal}>
          <div className="openmodal-sec">
            <div className="align-right">
              <img
                src={CrossImg}
                alt="cross-img"
                onClick={handleCloseModal}
              />
            </div>
            <div className="align-center">
              <img
                src={OrderNowImg}
                alt="OrderNowImg"
                className="ordernow-img"
              />
              <h3 className="ordernow-title">Select Default Branch !</h3>
              <p className="ordernow-label">Please Select your favourite branch to make default.</p>
              <FormControl component="fieldset" className="sortby-filter payment login-select-branch">
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                  <FormControlLabel
                    value="one"
                    control={<Radio />}
                    label="Maruthi Medical, Jayanagar"
                  />
                  <div className="dashed-divider space-10" />
                  <FormControlLabel
                    value="four"
                    control={<Radio />}
                    label="Maruthi Medical, Jay Prakesh Nagar"
                  />
                  <div className="dashed-divider space-10" />
                  <FormControlLabel
                    value="five"
                    control={<Radio />}
                    label="Maruthi Medical, Banshankari"
                  />
                  <div className="dashed-divider space-10" />
                  <FormControlLabel
                    value="six"
                    control={<Radio />}
                    label="Maruthi Medical, Hebbal"
                  />
                  <div className="dashed-divider space-10" />
                </RadioGroup>
              </FormControl>
              <div className="align-left">
                <Button
                  variant="contained"
                  className="feedback-clear-btn select-branch-btn mr-8"
                  component="span"
                  onClick={handleCloseModal}
                >
                  ASK ME LATER
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="feedback-send-btn select-branch-btn ml-8"
                  component="span"
                  onClick={handleCloseModal}
                >
                  DONE
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default SelectDefaultBranchModal;
