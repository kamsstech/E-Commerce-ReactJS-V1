import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {Types} from "../../../common/constant/action";


import CircularProgress from "@material-ui/core/CircularProgress";
import phone from "../../../assets/images/phone.svg";
import otp from "../../../assets/images/otp.svg";
import password from "../../../assets/images/password.svg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import eye from "../../../assets/images/eye.svg";
import eyeOff from "../../../assets/images/eyeOff.svg";
import Success from "../../../assets/images/success.svg";
import ErrorImg from "../../../assets/images/error.svg";
import CopyRightsContainer from "../copyRights/CopyRightsContainer";
// import { CopyRightsContainer } from "../copyRights/CopyRightsContainer";


const ForgotPassForm = (props) => {
  const {
    resendOTP,
    handleInput,
    handleFocus,
    handleBlur,
    input,
    inputError,
    handleSubmit,
    succMsg,
    errMsg,
    savePassResult,
    isActive,
    count,
    isResendActive,
    resendCount,
    enableMessage,
    disableMessage
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-form-space">
      <div className="auth-form-header">
      <h3 className="auth-title">Uh Oh! Forgot Password Don't Worry </h3>
      <h5 className="auth-subtitle">
      Just Verify Your Mobile Number to set new password
      </h5>
      </div>
      
      <p className="login-error-msg success-color">{succMsg}</p>
      <p className="login-error-msg">{errMsg}</p>
      <form>
        
        <TextField
          error={inputError.c_mobile_no}
          name="c_mobile_no"
          type="number"
          margin="normal"
          variant="outlined"
          placeholder="Mobile Number"
          value={input.c_mobile_no}
          onChange={e => handleInput(e)}
          helperText={
            <div className="timer-web">
              {
              !isResendActive && <span className="grey">OTP Will Resend in : <span className="countdown">{resendCount.minutes}:{resendCount.second}</span></span>
              } 
            </div>
          } 
          disabled={true}
          className="auth-input auth-inputs"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={phone} alt="mobile-phone" />
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
        <TextField
          error={inputError.OTP}
          name="OTP"
          type="number"
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="Enter OTP"
          value={input.OTP}
          disabled={disableMessage}
          onChange={e => handleInput(e)}
          onFocus={e => handleFocus(e)}
          onBlur={e => handleBlur(e)}
          helperText={inputError.OTP && "Not a valid OTP"}
          className="auth-input"
          
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={otp} alt="otp" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          error={inputError.c_new_pwd}
          name="c_new_pwd"
          helperText="Password should contain 4 - 16 characters & should contain alphanumeric and special characters"
          type={showPassword ? "text" : "password"}
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="Create New Password"
          value={input.c_new_pwd}
          disabled={enableMessage}
          onChange={e => handleInput(e)}
          onFocus={e => handleFocus(e)}
          onBlur={e => handleBlur(e)}
          className="auth-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={password} alt="password" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" className="cursor">
                {showPassword ? (
                  <img src={eyeOff} alt="password" onClick={handlePassword} />
                ) : (
                  <img src={eye} alt="password" onClick={handlePassword} />
                )}
              </InputAdornment>
            )
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className="theme-btn default-width fixed-space"
          disabled={savePassResult.loading}
          onClick={handleSubmit}
        >
          {savePassResult.loading ? (
            <CircularProgress className="spining-icon" />
          ) : null}{" "}
          Submit
        </Button>
      </form>

     <CopyRightsContainer />
    </div>
  );
};

export default ForgotPassForm;
