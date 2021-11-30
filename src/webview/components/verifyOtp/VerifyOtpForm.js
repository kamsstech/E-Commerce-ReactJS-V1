import * as React from "react";
import { Link } from "react-router-dom";
import user from "../../../assets/images/otp.svg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import CopyRightsContainer from "../copyRights/CopyRightsContainer";


const VerifyOtpFrom = (props) => {
  const {otp, errOTP, errorMsg, handleOTP, handleBlur, handleValidate, loading,
    resendOTP, isActive, count, isResendActive, resendCount,handleFocus} = props;

  return (
    <div className="auth-form-space">
      <div className="auth-form-header">
      <h3 className="auth-title">OTP Validation !</h3>
      <h5 className="auth-subtitle">
       Please enter OTP which we have sent to <span className="auth-subtitle_phone">+91-{props.mobile}</span> 
      </h5>
      </div>
      
      <p className="login-error-msg">{errorMsg}</p>
      <form onSubmit={(e) => handleValidate(e)}>
        <TextField
          error={errOTP}
          name="otp"
          type="number"
          margin="normal"
          variant="outlined"
          placeholder="Enter OTP"
          className="auth-input"
          value={otp}
          onChange={(e) => handleOTP(e)}
          onFocus={(e) => handleFocus(e)}
          onBlur={e => handleBlur(e)}
          helperText={
          <div className="timer-web"> 
          {errOTP && "Not a valid OTP"}
          {!isResendActive && <span className="grey">Resend otp in: <span className="red">{resendCount.minutes}:{resendCount.second}</span></span>} 
          </div>} 
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
                {isActive  && !isResendActive && "Generate OTP ?"}
                {isActive && isResendActive && "Generate OTP ?"} 
                {isResendActive && !isActive && "Resend OTP ?" }
              </InputAdornment>
            )
          }}
        />
        <Button
         disabled={loading} 
        //  onClick={e => handleValidate(e)} 
         variant="contained" 
         color="primary" 
         className="theme-btn"
         type="submit"
         >
          {loading ? <CircularProgress className="spining-icon" /> : null}{" "}
          Validate
        </Button>

        </form>
      <CopyRightsContainer />
    </div>
  );
};

export default VerifyOtpFrom;
