import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

//images
import phone from "../../../assets/images/phone.svg";
import otp from "../../../assets/images/otp.svg";
import Eye from "../../../assets/images/eye.svg";
import EyeOff from "../../../assets/images/eyeOff.svg";
import password from "../../../assets/images/password.svg";
import Success from "../../../assets/images/success.svg";
import ErrorImg from "../../../assets/images/error.svg";

import {
  ForgotInputEntity,
  ForgotErrorEntity,
  ValidateOTPEntity,
  SavePassEntity
} from "../../../common/model";

interface Props {
  resendOTP(): void;
  input: ForgotInputEntity;
  inputError: ForgotErrorEntity;
  handleInput(e: any): void;
  handleBlur(e: any): void;
  handleSubmit(): void;
  succMsg: string;
  errMsg: string;
  savePassResult: SavePassEntity;
  isActive: boolean;
  count: any;
  isResendActive: boolean;
  resendCount: any;

}

const ForgotPassForm = (props: Props) => {
  const {
    resendOTP,
    handleInput,
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
    resendCount
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="forgot-pass">
      <p className="login-error-msg">{errMsg}</p>
      <form>
        <TextField
          error={inputError.c_mobile_no}
          name="c_mobile_no"
          type="number"
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="Mobile Number"
          value={input.c_mobile_no}
          onChange={e => handleInput(e)}
          // helperText={!isActive && (<span className="grey">Code expires in: <span className="red">{count.minutes}:{count.second}</span></span>)}
          helperText={
            <div className="timer-web">
              {
              !isActive && <span className="grey">Code expires in: <span className="red">{count.minutes}:{count.second}</span></span>
              } 
              {
              !isResendActive && <span className="grey">Resend otp in: <span className="red">{resendCount.minutes}:{resendCount.second}</span></span>
              } 
            </div>
          } 
          disabled={true}
          className="auth-input mob-input"
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
                {isActive  && !isResendActive && "Generate OTP"}
                {isActive && isResendActive && "Generate OTP"} 
                {isResendActive && !isActive && "Resend OTP" }
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
          onChange={e => handleInput(e)}
          onBlur={e => handleBlur(e)}
          helperText={inputError.OTP && "Not a valid OTP"}
          className="auth-input mob-input"
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
          helperText="Password should contain 4 - 16 character & should contain alphanumeric and special character"
          type={showPassword ? "text" : "password"}
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="Create New Password"
          value={input.c_new_pwd}
          onChange={e => handleInput(e)}
          onBlur={e => handleBlur(e)}
          className="auth-input mob-input m-0"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={password} alt="password" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {showPassword ? (
                  <img src={EyeOff} alt="password" onClick={handlePassword} />
                ) : (
                  <img src={Eye} alt="password" onClick={handlePassword} />
                )}
              </InputAdornment>
            )
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className="mob-theme-btn space-top-4"
          disabled={savePassResult.loading}
          onClick={handleSubmit}
        >
          {savePassResult.loading ? (
            <CircularProgress className="spining-icon" />
          ) : null}{" "}
          Submit
        </Button>
      </form>
      <div className="mob-auth-navigation">
        <p>Want to go back?</p>
        <Link to="/login">
          <Button variant="outlined" className="mob-default-btn">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassForm;
