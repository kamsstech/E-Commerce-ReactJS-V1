import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";

import CrossImg from "../../../assets/images/cross-grey.svg";
import User from "../../../assets/images/user.svg";
import Srore from "../../../assets/images/store.svg";
import Email from "../../../assets/images/email.svg";
import Phone from "../../../assets/images/phone.svg";
import City from "../../../assets/images/city.svg";
import Shape from "../../../assets/images/shape.svg";


const DemoPharmsoft = (props) => {
  const { open, handleClose } = props;
  const [optValue, setOptValue] = React.useState("one");

  const handleSelect = (event) => {
    setOptValue(event.target.value);
  };

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
          <div className="demo-popup-sec">
            <div className="demopopup-titlesec">
              <h4>Demo Request Pharmsoft</h4>
              <img src={CrossImg} alt="CrossImg" onClick={handleClose} />
            </div>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <div className="mr-16">
                  <TextField
                    name="firstName"
                    margin="normal"
                    variant="outlined"
                    placeholder="First Name"
                    className="auth-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={User} alt="User" />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="mr-16">
                  <TextField
                    name="lastName"
                    margin="normal"
                    variant="outlined"
                    placeholder="Last Name"
                    className="auth-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={User} alt="User" />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="mr-16">
                  <TextField
                    name="storeName"
                    margin="normal"
                    variant="outlined"
                    placeholder="Store Name"
                    className="auth-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={Srore} alt="Srore" />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="mr-16">
                  <TextField
                    name="email"
                    margin="normal"
                    variant="outlined"
                    placeholder="Email Address"
                    className="auth-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={Email} alt="Email" />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="mr-16">
                  <TextField
                    name="mobile"
                    margin="normal"
                    variant="outlined"
                    placeholder="Phone Number/Landline Number"
                    className="auth-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={Phone} alt="Phone" />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="mr-16">
                  <TextField
                    name="area"
                    margin="normal"
                    variant="outlined"
                    placeholder="Area"
                    className="auth-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={City} alt="City" />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="mr-16">
                  <TextField
                    name="Area"
                    select
                    className="auth-input"
                    value={optValue}
                    onChange={handleSelect}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={Shape} alt="Shape" />
                        </InputAdornment>
                      )
                    }}
                    margin="normal"
                    variant="outlined"
                  >
                    <option value={"one"}>Area</option>
                    <option value={"two"}>Area1</option>
                    <option value={"three"}>Area2</option>
                  </TextField>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="mr-16">
                  <TextField
                    name="existingCustomer"
                    select
                    className="auth-input"
                    value={optValue}
                    onChange={handleSelect}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={User} alt="User" />
                        </InputAdornment>
                      )
                    }}
                    margin="normal"
                    variant="outlined"
                  >
                    <option value={"one"}>Are you a existing Customer</option>
                    <option value={"two"}>Yes</option>
                    <option value={"three"}>No</option>
                  </TextField>
                </div>
              </Grid>
              <Grid item xs={12} sm={12}>
                <div className="feedback-query">
                  <div className="feedback-label">Your Message</div>
                  <div className="feedback-label">
                    Max <span>1000</span> character
                  </div>
                </div>
                <TextField
                  multiline
                  name="name"
                  margin="normal"
                  variant="outlined"
                  placeholder="Write here..."
                  className="auth-input"
                ></TextField>
              </Grid>
            </Grid>
            <div className="align-center">
              <Button
                variant="contained"
                color="primary"
                className="cancel-demo-btn"
                component="span"
              >
                cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="schedule-demo-btn"
                component="span"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DemoPharmsoft;
