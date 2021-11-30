import * as React from "react";
import { Link } from "react-router-dom";
import user from "../../../assets/images/user.svg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import OtpInput from 'react-otp-input';


const VerifyOtpFrom = (props) => {
  const {otp, errOTP, errorMsg, handleOTP, handleBlur, handleValidate, loading,
    resendOTP, isActive, count} = props;


  return (
    <div>
        {/* <TextField
          error={errOTP}
          name="otp"
          type="number"
          margin="normal"
          variant="outlined"
          placeholder="Enter OTP"
          className="auth-input"
          value={otp}
          onChange={(e) => handleOTP(e)}
          onBlur={e => handleBlur(e)}
          // helperText={errOTP && "Not a valid OTP" }
          helperText={!isActive && (<span className="grey">Code expires in: <span className="red">{count.minutes}:{count.second}</span></span>)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={user} alt="user" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                className="web-forgot-link"
                onClick={() => resendOTP()}
              >
                {isActive && "Resend OTP"}
              </InputAdornment>
            )
          }}
        /> */}
        
        <OtpInput
        //   onChange={handleChange}
          onChange={(e) => handleOTP(e)}
          value={otp}
          isDisabled={false}
          numInputs={5}
          separator={<span>&nbsp;&nbsp;&nbsp;</span>}
          isInputNum={true}
        />
        {/* <div className="resend-sec">
        <p className="resend-otp-text">Didn’t Receive the OTP?</p>
        <Link to="/" className="resend-link">
          Resend Code
        </Link>
      </div> */}
    </div>
  );
};

export default VerifyOtpFrom;
