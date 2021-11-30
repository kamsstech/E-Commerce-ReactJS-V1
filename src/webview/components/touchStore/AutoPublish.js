import React from "react";
import { Link } from "react-router-dom";
import phone from "../../../assets/images/phone.svg";
import { Grid, InputAdornment, TextField } from "@material-ui/core";
/**
 * @author
 * @function CopyRights
 **/

const AutoPublish = (props) => {
  return (
    <>
      <form className="profile-details-sec">
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <div className="ml-16">
              {/* <Tooltip title="Mobile Number" TransitionComponent={Zoom} > */}

              <TextField
                name="c_mobile_no"
                value=""
                margin="normal"
                variant="outlined"
                placeholder="Mobile Number *"
                className="auth-input"
                autoComplete="new-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={phone} alt="mobile-phone" />
                    </InputAdornment>
                  ),
                }}
              />
              {/* </Tooltip> */}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="ml-16">
              {/* <Tooltip title="Mobile Number" TransitionComponent={Zoom} > */}

              <TextField
                name="c_email"
                value=""
                margin="normal"
                variant="outlined"
                placeholder="Email *"
                className="auth-input"
                autoComplete="new-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={phone} alt="mobile-phone" />
                    </InputAdornment>
                  ),
                }}
              />
              {/* </Tooltip> */}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="ml-16">
              {/* <Tooltip title="Mobile Number" TransitionComponent={Zoom} > */}

              <TextField
                name="c_user"
                value=""
                margin="normal"
                variant="outlined"
                placeholder="User Name *"
                className="auth-input"
                autoComplete="new-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={phone} alt="mobile-phone" />
                    </InputAdornment>
                  ),
                }}
              />
              {/* </Tooltip> */}
            </div>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AutoPublish;
